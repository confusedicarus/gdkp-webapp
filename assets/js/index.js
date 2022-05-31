const submitEl = document.getElementById("formBttn");
const originalPotEl = document.getElementById("originalPot");
const orgDeductionEl = document.getElementById("orgDeduction");
const tankBonusEl = document.getElementById("tankBonusTotal");
const healerBonusEl = document.getElementById("healerBonusTotal");
const tankBonusEachEl = document.getElementById("tankBonusEach");
const healerBonusEachEl = document.getElementById("healerBonusEach");
const finalPotEl = document.getElementById("finalPot");
const playersCutEl = document.getElementById("playersCut");
const orgFinalCutEl = document.getElementById("orgFinalCut");

function results(event) {
  event.preventDefault();
  const players = document.getElementById("players").value;
  const pot = document.getElementById("pot").value;
  const orgCut = document.getElementById("orgCut").value;
  const tankCount = document.getElementById("tankCount").value;
  const healerCount = document.getElementById("healerCount").value;
  const orgCutTotal = Math.floor(pot * (orgCut * 0.01));
  const tankCutTotal = Math.floor(pot * 0.02);
  const tankCutEach = Math.floor(tankCutTotal / tankCount);
  const totalDeduction = orgCutTotal + tankCutTotal;
  const finalPot = pot - totalDeduction;
  const healerCutTotal = Math.floor(orgCutTotal * 0.15);
  const healerCutEach = Math.floor(healerCutTotal / healerCount);
  const orgFinal = orgCutTotal - healerCutTotal;
  const finalPayoutEach = Math.floor(finalPot / players);
  const noTankPayout = Math.floor(pot - orgCutTotal);
  const finalPayoutEachNoTank = Math.floor(noTankPayout / players);
  originalPotEl.textContent = pot;
  if (tankCount > 0 && healerCount > 0) {
    orgDeductionEl.textContent = totalDeduction;
    orgFinalCutEl.textContent = orgFinal;
    tankBonusEl.textContent = tankCutTotal;
    tankBonusEachEl.textContent = tankCutEach;
    healerBonusEl.textContent = healerCutTotal;
    healerBonusEachEl.textContent = healerCutEach;
    finalPotEl.textContent = finalPot;
    playersCutEl.textContent = finalPayoutEach;
  } else if (tankCount > 0 && healerCount <= 0) {
    orgDeductionEl.textContent = totalDeduction;
    orgFinalCutEl.textContent = orgCutTotal;
    tankBonusEl.textContent = tankCutTotal;
    tankBonusEachEl.textContent = tankCutEach;
    healerBonusEl.textContent = "0";
    healerBonusEachEl.textContent = "0";
    finalPotEl.textContent = finalPot;
    playersCutEl.textContent = finalPayoutEach;
  } else if (tankCount <= 0) {
    orgDeductionEl.textContent = orgCutTotal;
    orgFinalCutEl.textContent = orgCutTotal;
    tankBonusEl.textContent = '0';
    tankBonusEachEl.textContent = '0';
    healerBonusEl.textContent = "0";
    healerBonusEachEl.textContent = "0";
    finalPotEl.textContent = noTankPayout;
    playersCutEl.textContent = finalPayoutEachNoTank;
  }
}

submitEl.addEventListener("click", results);
