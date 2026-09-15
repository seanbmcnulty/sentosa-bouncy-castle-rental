/** Live list prices — single source of truth for the whole site. */
window.SBCR_PRICES = {
  fullDay: 189,
  mainlandDelivery: 60,
  currency: "$",
  updatedAt: "2026-09-15T03:58",
  note: "Full-day only. Internal yield may change fullDay; never publish a rate matrix."
};

(function () {
  function money(n) {
    return window.SBCR_PRICES.currency + n;
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
      offOpt.value = "Elsewhere in Singapore — +" + money(p.mainlandDelivery) + " delivery";
      offOpt.textContent = offOpt.value;
    }
  }

  function buildWhatsAppText(form) {
    const fd = new FormData(form);
    const get = (k) => String(fd.get(k) || "").trim();
    const lines = [
      "Hi Yumi — new Sentosa Bouncy Castle booking from the website:",
      "",
      "Date: " + get("eventDate"),
      "Package: " + get("package"),
      "Delivery window: " + get("window"),
      "Name: " + get("fullName"),
      "Mobile: " + get("mobile"),
      "Email: " + get("email"),
      "Location: " + get("location"),
      "Venue: " + get("venueName"),
      "Address: " + get("address"),
      "Venue type: " + get("venueType"),
      get("notes") ? "Notes: " + get("notes") : null,
      "",
      "Confirms: full-day hire, self-setup, power point, PayNow, calendar checked, Rules accepted (no balls included).",
      "Please confirm availability and payment.",
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
      const text = buildWhatsAppText(form);
      const wa = "https://wa.me/6582003847?text=" + encodeURIComponent(text);
      window.open(wa, "_blank", "noopener,noreferrer");
      HTMLFormElement.prototype.submit.call(form);
    });
  }

  function setDateMin() {
    const d = document.getElementById("eventDate");
    if (!d) return;
    const t = new Date();
    const iso = t.toLocaleDateString("en-CA", { timeZone: "Asia/Singapore" });
    d.min = iso;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      applyPrices();
      wireBookingForm();
      setDateMin();
    });
  } else {
    applyPrices();
    wireBookingForm();
    setDateMin();
  }
})();
