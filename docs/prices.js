/** Live list prices — single source of truth for the whole site. */
window.SBCR_PRICES = {
  halfDay: 129,
  fullDay: 189,
  mainlandDelivery: 60,
  currency: "S$",
  updatedAt: "2026-09-15T01:41",
  note: "Internal yield may change these; never publish a rate matrix."
};

(function () {
  function money(n) {
    return window.SBCR_PRICES.currency + n;
  }

  function applyPrices() {
    const p = window.SBCR_PRICES;
    document.querySelectorAll("[data-price]").forEach((el) => {
      const key = el.getAttribute("data-price");
      if (key === "halfDay") el.textContent = money(p.halfDay);
      if (key === "fullDay") el.textContent = money(p.fullDay);
      if (key === "mainlandDelivery") el.textContent = money(p.mainlandDelivery);
      if (key === "halfDayLabel") el.textContent = "Half day — " + money(p.halfDay);
      if (key === "fullDayLabel") el.textContent = "Full day — " + money(p.fullDay);
      if (key === "offSentosaLabel") el.textContent = "Elsewhere in Singapore — +" + money(p.mainlandDelivery);
      if (key === "paynowLine") {
        el.innerHTML =
          "Half-day " + money(p.halfDay) + " · Full day " + money(p.fullDay) +
          "<br />+ " + money(p.mainlandDelivery) + " if outside Sentosa";
      }
      if (key === "footerLine") {
        el.textContent =
          "Half-day " + money(p.halfDay) + " · Full day " + money(p.fullDay) +
          " · Free Sentosa delivery · " + money(p.mainlandDelivery) + " elsewhere · Self-setup";
      }
      if (key === "heroPrices") {
        el.innerHTML =
          '<strong style="color:var(--cream)">Half-day ' + money(p.halfDay) +
          '</strong> or <strong style="color:var(--cream)">full day ' + money(p.fullDay) + "</strong>";
      }
    });

    const halfOpt = document.querySelector('select[name="package"] option[data-price-option="half"]');
    const fullOpt = document.querySelector('select[name="package"] option[data-price-option="full"]');
    const offOpt = document.querySelector('select[name="location"] option[data-price-option="off"]');
    if (halfOpt) {
      halfOpt.value = "Half day — " + money(p.halfDay);
      halfOpt.textContent = halfOpt.value;
    }
    if (fullOpt) {
      fullOpt.value = "Full day — " + money(p.fullDay);
      fullOpt.textContent = fullOpt.value;
    }
    if (offOpt) {
      offOpt.value = "Elsewhere in Singapore — +" + money(p.mainlandDelivery);
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
      "Window: " + get("window"),
      "Name: " + get("fullName"),
      "Mobile: " + get("mobile"),
      "Email: " + get("email"),
      "Location: " + get("location"),
      "Venue: " + get("venueName"),
      "Address: " + get("address"),
      "Venue type: " + get("venueType"),
      get("notes") ? "Notes: " + get("notes") : null,
      "",
      "Confirms: self-setup, power point, PayNow, calendar checked.",
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
      // re-sync package/location values after price apply in case user had old selection text
      const text = buildWhatsAppText(form);
      const wa = "https://wa.me/6582003847?text=" + encodeURIComponent(text);
      window.open(wa, "_blank", "noopener,noreferrer");
      // Allow FormSubmit POST to continue
      HTMLFormElement.prototype.submit.call(form);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      applyPrices();
      wireBookingForm();
    });
  } else {
    applyPrices();
    wireBookingForm();
  }
})();
