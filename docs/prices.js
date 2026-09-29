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
    const dateLabel = readableDate(get("eventDate"));
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
    // The date lives in a hidden input (native `required` doesn't apply), so check it
    // on the submit button click, which runs before the browser's own validation…
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.addEventListener("click", function (e) {
        if (!requireDate()) e.preventDefault();
      });
    }
    form.addEventListener("submit", function (e) {
      // …and again here, before reportValidity, the email send, WhatsApp and GA4.
      if (!requireDate()) {
        e.preventDefault();
        e.stopImmediatePropagation();
        return;
      }
      if (!form.reportValidity()) return;
      e.preventDefault();
      applyPrices();
      updateBooking();
      const text = buildWhatsAppText(form);
      const wa = "https://wa.me/6582003847?text=" + encodeURIComponent(text);
      // Send the booking email first (in the background) so it isn't lost when
      // the phone switches to WhatsApp, then open WhatsApp.
      const data = new FormData(form);
      const file = data.get("paymentProof");
      const hasFile = file && file.size > 0;
      if (!hasFile) data.delete("paymentProof");
      let sent = false;
      try {
        fetch(form.action, { method: "POST", body: data, mode: "no-cors", keepalive: !hasFile })
          .then(function () { sent = true; showThanks(); })
          .catch(function () { if (!sent) HTMLFormElement.prototype.submit.call(form); });
      } catch (err) {
        HTMLFormElement.prototype.submit.call(form);
        return;
      }
      window.open(wa, "_blank", "noopener,noreferrer");
    });
    function showThanks() {
      const btn = form.querySelector('button[type="submit"]');
      if (btn) { btn.textContent = "Booking sent ✓"; btn.disabled = true; }
      let note = document.getElementById("book-sent-note");
      if (!note) {
        note = document.createElement("p");
        note.id = "book-sent-note";
        note.className = "field-hint";
        note.style.fontWeight = "600";
        note.textContent = "Thanks! Your booking was sent. If WhatsApp didn't open, message Yumi on +65 8200 3847.";
        btn ? btn.insertAdjacentElement("afterend", note) : form.appendChild(note);
      }
    }
  }

  /* ---------- Inline month calendar (vanilla JS) ---------- */
  const DAY = 86400000;
  const DOW_LONG = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const DOW_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const MON_LONG = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const MON_SHORT = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const WINDOW_DAYS = 120;

  /** Midnight UTC timestamp for "today" in Singapore (all calendar maths is done in UTC days). */
  function sgToday() {
    const parts = {};
    new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Singapore", year: "numeric", month: "numeric", day: "numeric" })
      .formatToParts(new Date())
      .forEach(function (p) { parts[p.type] = p.value; });
    return Date.UTC(+parts.year, +parts.month - 1, +parts.day);
  }
  function isoOf(ts) { return new Date(ts).toISOString().slice(0, 10); }
  function tsOf(iso) {
    const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso || "");
    return m ? Date.UTC(+m[1], +m[2] - 1, +m[3]) : NaN;
  }
  /** "Sat, 31 Oct 2026" for the WhatsApp text (built by hand so every browser formats it the same). */
  function readableDate(iso) {
    const ts = tsOf(iso);
    if (isNaN(ts)) return iso || "";
    const d = new Date(ts);
    return DOW_SHORT[d.getUTCDay()] + ", " + d.getUTCDate() + " " + MON_SHORT[d.getUTCMonth()] + " " + d.getUTCFullYear();
  }
  function shortDate(ts) {
    const d = new Date(ts);
    return DOW_SHORT[d.getUTCDay()] + " " + d.getUTCDate() + " " + MON_SHORT[d.getUTCMonth()] + " " + d.getUTCFullYear();
  }
  function longDate(ts) {
    const d = new Date(ts);
    return DOW_LONG[d.getUTCDay()] + " " + d.getUTCDate() + " " + MON_LONG[d.getUTCMonth()] + " " + d.getUTCFullYear();
  }

  const cal = { ready: false, booked: new Set(), min: 0, max: 0, y: 0, m: 0 };

  function calEls() {
    return {
      input: document.getElementById("eventDate"),
      box: document.getElementById("bookingCal"),
      grid: document.getElementById("calGrid"),
      title: document.getElementById("calTitle"),
      prev: document.getElementById("calPrev"),
      next: document.getElementById("calNext"),
      status: document.getElementById("calStatus"),
      error: document.getElementById("eventDateError"),
    };
  }

  function isOpen(ts) {
    return cal.ready && ts >= cal.min && ts <= cal.max && !cal.booked.has(isoOf(ts));
  }

  function monthIndex(y, m) { return y * 12 + m; }

  function renderCalendar() {
    const el = calEls();
    if (!el.grid) return;
    const selected = el.input ? el.input.value : "";
    const first = Date.UTC(cal.y, cal.m, 1);
    const daysIn = new Date(Date.UTC(cal.y, cal.m + 1, 0)).getUTCDate();
    const lead = (new Date(first).getUTCDay() + 6) % 7; // Monday-first
    const frag = document.createDocumentFragment();
    for (let i = 0; i < lead; i++) {
      const blank = document.createElement("span");
      blank.className = "cal-blank";
      blank.setAttribute("aria-hidden", "true");
      frag.appendChild(blank);
    }
    for (let d = 1; d <= daysIn; d++) {
      const ts = Date.UTC(cal.y, cal.m, d);
      const key = isoOf(ts);
      const b = document.createElement("button");
      b.type = "button";
      b.className = "cal-day";
      b.textContent = String(d);
      b.dataset.date = key;
      let state;
      if (!cal.ready) {
        state = "loading";
        b.disabled = true;
        b.classList.add("is-off");
      } else if (ts < cal.min || ts > cal.max) {
        state = ts < cal.min ? "unavailable (past)" : "unavailable";
        b.disabled = true;
        b.classList.add("is-off");
      } else if (cal.booked.has(key)) {
        state = "booked";
        b.disabled = true;
        b.classList.add("is-booked");
      } else {
        state = "available";
        b.classList.add("is-open");
        if (key === selected) {
          state = "available, selected";
          b.classList.add("is-selected");
          b.setAttribute("aria-pressed", "true");
        } else {
          b.setAttribute("aria-pressed", "false");
        }
      }
      b.setAttribute("aria-label", longDate(ts) + ", " + state);
      frag.appendChild(b);
    }
    el.grid.innerHTML = "";
    el.grid.appendChild(frag);
    if (el.title) el.title.textContent = MON_LONG[cal.m] + " " + cal.y;
    const cur = monthIndex(cal.y, cal.m);
    const today = new Date(cal.min - DAY);
    const last = new Date(cal.max);
    if (el.prev) el.prev.disabled = cur <= monthIndex(today.getUTCFullYear(), today.getUTCMonth());
    if (el.next) el.next.disabled = cur >= monthIndex(last.getUTCFullYear(), last.getUTCMonth());
    updateCalStatus();
  }

  function updateCalStatus() {
    const el = calEls();
    if (!el.status) return;
    const v = el.input ? el.input.value : "";
    if (!cal.ready) {
      el.status.textContent = "Loading available dates…";
    } else if (v && isOpen(tsOf(v))) {
      el.status.innerHTML = "";
      el.status.appendChild(document.createTextNode("Selected: "));
      const strong = document.createElement("strong");
      strong.textContent = shortDate(tsOf(v));
      el.status.appendChild(strong);
    } else {
      el.status.textContent = "Tap an open date";
    }
  }

  function showView(ts) {
    const d = new Date(ts);
    cal.y = d.getUTCFullYear();
    cal.m = d.getUTCMonth();
    renderCalendar();
  }

  function setDateError(on) {
    const el = calEls();
    if (el.error) el.error.hidden = !on;
    if (el.box) el.box.classList.toggle("has-error", !!on);
  }

  function pickDate(key) {
    const el = calEls();
    if (!el.input || !isOpen(tsOf(key))) return;
    el.input.value = key;
    el.input.dispatchEvent(new Event("change", { bubbles: true }));
    setDateError(false);
    renderCalendar();
    const btn = el.grid.querySelector('button[data-date="' + key + '"]');
    if (btn) btn.focus({ preventScroll: true });
  }

  /** Blocks submit when no date is picked: inline error + scroll the calendar into view. */
  function requireDate() {
    const el = calEls();
    if (!el.input) return true;
    const v = el.input.value;
    if (v && isOpen(tsOf(v))) return true;
    if (v && !cal.ready) return true; // restored value while booked.json is still loading
    el.input.value = "";
    setDateError(true);
    updateCalStatus();
    const target = el.box ? el.box.closest(".cal-field") || el.box : null;
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      const firstOpen = el.grid && el.grid.querySelector("button.is-open");
      if (firstOpen) firstOpen.focus({ preventScroll: true });
    }
    return false;
  }

  function wireCalendar() {
    const el = calEls();
    if (!el.grid || !el.input || el.grid.dataset.wired === "1") return;
    el.grid.dataset.wired = "1";
    const today = sgToday();
    cal.min = today + DAY;
    cal.max = today + WINDOW_DAYS * DAY;
    showView(today);

    el.grid.addEventListener("click", function (e) {
      const b = e.target.closest("button.cal-day");
      if (b && !b.disabled) pickDate(b.dataset.date);
    });
    el.grid.addEventListener("keydown", function (e) {
      const steps = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7 };
      const b = e.target.closest("button.cal-day");
      if (!b || !(e.key in steps)) return;
      e.preventDefault();
      let ts = tsOf(b.dataset.date);
      do { ts += steps[e.key] * DAY; } while (ts >= cal.min && ts <= cal.max && !isOpen(ts));
      if (!isOpen(ts)) return;
      const d = new Date(ts);
      if (d.getUTCFullYear() !== cal.y || d.getUTCMonth() !== cal.m) showView(ts);
      const next = el.grid.querySelector('button[data-date="' + isoOf(ts) + '"]');
      if (next) next.focus();
    });
    el.prev.addEventListener("click", function () { showView(Date.UTC(cal.y, cal.m - 1, 1)); });
    el.next.addEventListener("click", function () { showView(Date.UTC(cal.y, cal.m + 1, 1)); });

    function ready(list) {
      if (cal.ready) return;
      cal.booked = new Set(Array.isArray(list) ? list : []);
      cal.ready = true;
      // Drop a restored (back button) value if it's no longer open.
      if (el.input.value && !isOpen(tsOf(el.input.value))) el.input.value = "";
      if (el.input.value) showView(tsOf(el.input.value)); else renderCalendar();
    }
    // If booked.json fails (or hangs), treat every day in the window as available.
    const timer = setTimeout(function () { ready([]); }, 8000);
    fetch("booked.json?v=" + Date.now())
      .then(function (r) { if (!r.ok) throw new Error("HTTP " + r.status); return r.json(); })
      .then(function (j) { clearTimeout(timer); ready(j && j.booked); })
      .catch(function () { clearTimeout(timer); ready([]); });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      applyPrices();
      wireBookingState();
      wireBookingForm();
      wireCalendar();
      wireAnalyticsClicks();
    });
  } else {
    applyPrices();
    wireBookingState();
    wireBookingForm();
    wireCalendar();
    wireAnalyticsClicks();
  }
})();
