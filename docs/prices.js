/** Live list prices — edit here; site reads these everywhere. Managed by pricing assistant. */
window.SBCR_PRICES = {
  halfDay: 129,
  fullDay: 189,
  mainlandDelivery: 60,
  currency: "S$",
  updatedAt: "2026-09-15T01:11",
  note: "Internal yield may change these; never publish a rate matrix."
};

(function applyPrices() {
  const p = window.SBCR_PRICES;
  const money = (n) => p.currency + n;
  document.querySelectorAll("[data-price]").forEach((el) => {
    const key = el.getAttribute("data-price");
    if (key === "halfDay") el.textContent = money(p.halfDay);
    if (key === "fullDay") el.textContent = money(p.fullDay);
    if (key === "mainlandDelivery") el.textContent = money(p.mainlandDelivery);
    if (key === "halfDayLabel") el.textContent = "Half day — " + money(p.halfDay);
    if (key === "fullDayLabel") el.textContent = "Full day — " + money(p.fullDay);
    if (key === "offSentosaLabel") el.textContent = "Elsewhere in Singapore — +" + money(p.mainlandDelivery);
    if (key === "paynowLine") el.innerHTML = "Half-day " + money(p.halfDay) + " · Full day " + money(p.fullDay) + "<br />+ " + money(p.mainlandDelivery) + " if outside Sentosa";
    if (key === "footerLine") el.textContent = "Half-day " + money(p.halfDay) + " · Full day " + money(p.fullDay) + " · Free Sentosa delivery · " + money(p.mainlandDelivery) + " elsewhere · Self-setup";
    if (key === "heroPrices") el.innerHTML = "<strong style=\"color:var(--cream)\">Half-day " + money(p.halfDay) + "</strong> or <strong style=\"color:var(--cream)\">full day " + money(p.fullDay) + "</strong>";
  });
  // Package <option> texts
  const halfOpt = document.querySelector('option[data-price-option="half"]');
  const fullOpt = document.querySelector('option[data-price-option="full"]');
  const offOpt = document.querySelector('option[data-price-option="off"]');
  if (halfOpt) { halfOpt.value = "Half day — " + money(p.halfDay); halfOpt.textContent = halfOpt.value; }
  if (fullOpt) { fullOpt.value = "Full day — " + money(p.fullDay); fullOpt.textContent = fullOpt.value; }
  if (offOpt) { offOpt.value = "Elsewhere in Singapore — +" + money(p.mainlandDelivery); offOpt.textContent = offOpt.value; }
})();
