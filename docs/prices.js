/** Live list prices — single source of truth for the whole site. */
window.SBCR_PRICES = {
  fullDay: 149,
  mainlandDelivery: 60,
  currency: "$",
  updatedAt: "2026-09-20T22:13",
  note: "Full-day only. Internal yield may change fullDay; never publish a rate matrix."
};

(function () {
  function money(n) {
    return window.SBCR_PRICES.currency + n;
  }

  
  function track(name, params) {
    try {
      if (typeof gtag === "function") gtag("event", name, params || {});
    } catch (e) {}
  }

  function wireAnalyticsClicks() {
    document.querySelectorAll('a[href^="#book"], a.btn[href="#book"]').forEach(function (el) {
      el.addEventListener("click", function () {
        track("book_click", { link_text: (el.textContent || "").trim().slice(0, 40) });
      });
    });
    document.querySelectorAll('a[href*="wa.me/6582003847"]').forEach(function (el) {
      el.addEventListener("click", function () {
        track("whatsapp_click", { link_url: el.href });
      });
    });
    const form = document.getElementById("booking-form");
    if (form) {
      form.addEventListener("submit", function () {
        track("booking_submit", { currency: "SGD", value: bookingTotal().amount || undefined });
      });
    }
  }

  function applyPrices() {
    const p = window.SBCR_PRICES;
    document.querySelectorAll("[data-price]").forEach((el) => {
      const key = el.getAttribute("data-price");
      if (key === "fullDay") el.textContent = money(p.fullDay);
      if (key === "mainlandDelivery") el.textContent = money(p.mainlandDelivery);
      if (key === "fullDayLabel") el.textContent = "Full day — " + money(p.fullDay);
      if (key === "offSentosaLabel") el.textContent = "Elsewhere in Singapore — +" + money(p.mainlandDelivery);
      if (key === "paynowLine") {
        el.innerHTML =
          "Full day " + money(p.fullDay) +
          "<br />Free on Sentosa or self pick-up &amp; return" +
          "<br />+ " + money(p.mainlandDelivery) + " if we deliver off Sentosa";
      }
      if (key === "footerLine") {
        el.textContent =
          "Full day " + money(p.fullDay) +
          " · Free Sentosa delivery or self pick-up · " + money(p.mainlandDelivery) +
          " off-Sentosa delivery · Self-setup";
      }
      if (key === "heroPrices") {
        el.innerHTML =
          '<strong style="color:var(--cream)">Full day ' + money(p.fullDay) + "</strong>";
      }
    });

    const fullOpt = document.querySelector('select[name="package"] option[data-price-option="full"]');
    const pkgHidden = document.querySelector('input[name="package"][data-price-option="full"]');
    const offOpt = document.querySelector('select[name="location"] option[data-price-option="off"]');
    if (fullOpt) {
      fullOpt.value = "Full day — " + money(p.fullDay);
      fullOpt.textContent = fullOpt.value;
    }
    if (pkgHidden) {
      pkgHidden.value = "Full day — " + money(p.fullDay);
    }
    if (offOpt) {
      offOpt.value = "Elsewhere in Singapore — +" + money(p.mainlandDelivery) + " delivery & pickup";
      offOpt.textContent = offOpt.value;
    }
  }

  /** Which delivery option is picked: "sentosa", "pickup", "elsewhere" or "". */
  function selectedLocation() {
    const sel = document.getElementById("bookingLocation");
    if (!sel || sel.selectedIndex < 0) return "";
    return sel.options[sel.selectedIndex].getAttribute("data-loc") || "";
  }

  function bookingTotal() {
    const p = window.SBCR_PRICES;
    const loc = selectedLocation();
    const amount = p.fullDay + (loc === "elsewhere" ? p.mainlandDelivery : 0);
    let note = "(choose delivery or pick-up in Step 1)";
    if (loc === "sentosa") note = "(free Sentosa delivery)";
    if (loc === "pickup") note = "(free self pick-up & return)";
    if (loc === "elsewhere") note = "(includes " + money(p.mainlandDelivery) + " delivery + pickup)";
    return { amount: amount, note: note, text: money(amount) + " " + note, loc: loc };
  }

  function updateBooking() {
    const t = bookingTotal();
    const box = document.getElementById("bookingTotal");
    if (box) {
      const amt = box.querySelector(".total-amount");
      const note = box.querySelector(".total-note");
      if (amt) amt.textContent = money(t.amount);
      if (note) note.textContent = t.note;
    }
    const field = document.getElementById("bookingTotalField");
    if (field) field.value = t.loc ? t.text : money(t.amount);

    // Address only for deliveries (Sentosa or elsewhere); hidden, disabled and not required for self pick-up.
    const wrap = document.getElementById("addressField");
    const addr = document.getElementById("bookingAddress");
    const needsAddress = t.loc === "sentosa" || t.loc === "elsewhere";
    if (wrap && addr) {
      wrap.hidden = !needsAddress;
      addr.disabled = !needsAddress;
      addr.required = needsAddress;
      addr.placeholder = t.loc === "sentosa" ? "Villa / condo, street, unit on Sentosa" : "Block / street, unit, postal code";
    }

    const wl = document.getElementById("windowLabel");
    if (wl) wl.textContent = t.loc === "pickup" ? "Pick-up time" : needsAddress ? "Delivery time" : "Delivery / pick-up time";
  }

  function wireBookingState() {
    const sel = document.getElementById("bookingLocation");
    if (!sel || sel.dataset.stateWired === "1") return;
    sel.dataset.stateWired = "1";
    sel.addEventListener("change", updateBooking);
    sel.addEventListener("input", updateBooking);
    // Restored form values (back button / bfcache) should re-sync the total and address.
    window.addEventListener("pageshow", updateBooking);
    updateBooking();
  }

  function buildWhatsAppText(form) {
    const fd = new FormData(form);
    const get = (k) => String(fd.get(k) || "").trim();
    const dateSel = document.getElementById("eventDate");
    const dateLabel = dateSel && dateSel.selectedIndex > 0 ? dateSel.options[dateSel.selectedIndex].textContent : get("eventDate");
    const file = form.querySelector('input[name="paymentProof"]');
    const hasFile = !!(file && file.files && file.files.length);
    const lines = [
      "Hi Yumi — new Sentosa Bouncy Castle booking from the website:",
      "",
      "Date: " + dateLabel,
      "Package: " + get("package"),
      "Delivery / pick-up: " + get("location"),
      "Time window: " + get("window"),
      "Total: " + bookingTotal().text,
      "",
      "Name: " + get("fullName"),
      "Mobile: " + get("mobile"),
      "Email: " + get("email"),
      get("venueName") ? "Venue: " + get("venueName") : null,
      get("address") ? "Address: " + get("address") : null,
      get("notes") ? "Notes: " + get("notes") : null,
      "",
      hasFile ? "PayNow screenshot attached to the web form." : "PayNow: please confirm my payment.",
      "I've read and agree to the Rules (self-setup, balls not included).",
      "Please confirm my date.",
    ].filter((x) => x !== null);
    return lines.join("\n");
  }

  function wireBookingForm() {
    const form = document.getElementById("booking-form");
    if (!form || form.dataset.waWired === "1") return;
    form.dataset.waWired = "1";
    form.addEventListener("submit", function (e) {
      if (!form.reportValidity()) return;
      e.preventDefault();
      applyPrices();
      updateBooking();
      const text = buildWhatsAppText(form);
      const wa = "https://wa.me/6582003847?text=" + encodeURIComponent(text);
      window.open(wa, "_blank", "noopener,noreferrer");
      HTMLFormElement.prototype.submit.call(form);
    });
  }

  function setDateMin() {
    const sel = document.getElementById("eventDate");
    if (!sel || sel.tagName !== "SELECT") return;
    const fmt = new Intl.DateTimeFormat("en-SG", { timeZone: "Asia/Singapore", weekday: "short", day: "numeric", month: "short", year: "numeric" });
    const iso = (d) => d.toLocaleDateString("en-CA", { timeZone: "Asia/Singapore" });
    function fill(booked) {
      const taken = new Set(booked || []);
      sel.innerHTML = '<option value="">Select a date…</option>';
      const start = new Date();
      start.setDate(start.getDate() + 1);
      for (let i = 0; i < 120; i++) {
        const d = new Date(start.getTime() + i * 86400000);
        const key = iso(d);
        if (taken.has(key)) continue;
        const o = document.createElement("option");
        o.value = key;
        o.textContent = fmt.format(d);
        sel.appendChild(o);
      }
    }
    fetch("booked.json?v=" + Date.now()).then((r) => r.json()).then((j) => fill(j.booked)).catch(() => fill([]));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      applyPrices();
      wireBookingState();
      wireBookingForm();
      setDateMin();
      wireAnalyticsClicks();
    });
  } else {
    applyPrices();
    wireBookingState();
    wireBookingForm();
    setDateMin();
    wireAnalyticsClicks();
  }
})();
