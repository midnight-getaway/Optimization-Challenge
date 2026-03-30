/**
 * Tip Calculator — calculates tip amount and total bill from user input.
 */
(function () {
  "use strict";

  const billInput = document.getElementById("billAmount");
  const tipInput = document.getElementById("tipPercent");
  const calculateBtn = document.getElementById("calculateBtn");
  const errorEl = document.getElementById("errorMessage");
  const resultsEl = document.getElementById("results");
  const tipAmountEl = document.getElementById("tipAmount");
  const totalBillEl = document.getElementById("totalBill");

  function calculateTip(bill, tipPercent) {
    if (bill < 0 || tipPercent < 0) return null;
    const tip = (bill * tipPercent) / 100;
    const total = bill + tip;
    return { tip, total };
  }

  function formatMoney(value) {
    return value.toFixed(2);
  }

  function showError(message) {
    errorEl.textContent = message;
    resultsEl.hidden = true;
  }

  function showResults(tip, total) {
    errorEl.textContent = "";
    tipAmountEl.textContent = formatMoney(tip);
    totalBillEl.textContent = formatMoney(total);
    resultsEl.hidden = false;
  }

  function handleCalculate() {
    const billStr = billInput.value.trim();
    const tipStr = tipInput.value.trim();

    if (billStr === "" || tipStr === "") {
      showError("Please enter both bill amount and tip percentage.");
      return;
    }

    const bill = parseFloat(billStr);
    const tipPercent = parseFloat(tipStr);

    if (Number.isNaN(bill) || Number.isNaN(tipPercent)) {
      showError("Please enter valid numbers.");
      return;
    }

    if (bill < 0 || tipPercent < 0) {
      showError("Bill and tip percentage cannot be negative.");
      return;
    }

    const result = calculateTip(bill, tipPercent);
    if (result === null) {
      showError("Invalid values. Use non-negative numbers.");
      return;
    }

    showResults(result.tip, result.total);
  }

  calculateBtn.addEventListener("click", handleCalculate);

  function handleKeydown(e) {
    if (e.key === "Enter") {
      handleCalculate();
    }
  }

  billInput.addEventListener("keydown", handleKeydown);
  tipInput.addEventListener("keydown", handleKeydown);
})();
