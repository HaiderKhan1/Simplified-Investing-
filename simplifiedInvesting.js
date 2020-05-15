
// MARKET PROSPECT RATIOS JS CODE //

function calcEPS() {
var netIncome;
var pd;
var numerator;
var denom;
var finalAnswer;

netIncome = Number(document.getElementById("netIncome").value);
pd = Number(document.getElementById("pD").value);
denom = Number(document.getElementById("denom").value);

if (isNaN(netIncome) || isNaN(pd) || isNaN(denom)) {

  finalAnswer = "Hmm looks like your input was not accepted <br> Please check your input: <br> (1) Is just numbers <br> (2) There are no alphabets <br> (3) No special characters other then decimal <br> (4) All input feilds have been filled";

  } else if ((netIncome == "") || (pd == "") || (denom == "")){
  alert("All Input Feilds Must Be Filled");

    } else {

    numerator = netIncome - pd;
    finalAnswer = numerator / denom;

    }

document.getElementById("EPS").innerHTML = "Earning Per Share Ratio: " + finalAnswer;
}

function pE(){
  var mV, eP, finalAnswer;

  mV = Number(document.getElementById("mV").value);
  eP = Number(document.getElementById("eP").value);

  if (isNaN(mV) || isNaN(eP)) {

    finalAnswer = "Hmm looks like your input was not accepted <br> Please check your input: <br> (1) Is just numbers <br> (2) There are no alphabets <br> (3) No special characters other then decimal <br> (4) All input feilds have been filled";

  } else if ((mV == "") || (eP == "")){
    alert("All Input Feilds Must Be Filled");

      } else {

      finalAnswer = mV / eP;

      }

  document.getElementById("pE").innerHTML = "Price Earnings Ratio: " + finalAnswer;

}


function dP(){
  var netIncome_td, tD, finalAnswer;

  tD = Number(document.getElementById("tD").value);
  netIncome_td = Number(document.getElementById("netIncome_td").value);

  if (isNaN(tD) || isNaN(netIncome_td)) {

    finalAnswer = "Hmm looks like your input was not accepted <br> Please check your input: <br> (1) Is just numbers <br> (2) There are no alphabets <br> (3) No special characters other then decimal <br> (4) All input feilds have been filled";

  } else if ((tD == "") || (netIncome_td == "")){
    alert("All Input Feilds Must Be Filled");

      } else {

      finalAnswer = tD / netIncome_td;

      }

  document.getElementById("dP").innerHTML = "Dividend Payout Ratio: " + finalAnswer;

}

function dY(){
  var marketValue, cD, finalAnswer;

  cD = Number(document.getElementById("cD").value);
  marketValue = Number(document.getElementById("marketValue").value);

  if (isNaN(cD) || isNaN(marketValue)) {

    finalAnswer = "Hmm looks like your input was not accepted <br> Please check your input: <br> (1) Is just numbers <br> (2) There are no alphabets <br> (3) No special characters other then decimal <br> (4) All input feilds have been filled";

  } else if ((cD == "") || (marketValue == "")){
    alert("All Input Feilds Must Be Filled");

      } else {

      finalAnswer = cD / marketValue;

      }

  document.getElementById("dY").innerHTML = "Dividend Yeild: " + finalAnswer;

}

//LIQUIDITY RATIOS JS CODE //


function calcquickRatio() {
var currentAssets;
var cL;
var inventory;
var preExpense;
var finalAnswer;
var numerator;

currentAssets = Number(document.getElementById("currentAssets").value);
cL = Number(document.getElementById("cL").value);
inventory = Number(document.getElementById("inventory").value);
preExpense = Number(document.getElementById("preExpense").value);

if (isNaN(currentAssets) || isNaN(cL) || isNaN(inventory) || isNaN(preExpense)) {

  finalAnswer = "Hmm looks like your input was not accepted <br> Please check your input: <br> (1) Is just numbers <br> (2) There are no alphabets <br> (3) No special characters other then decimal <br> (4) All input feilds have been filled";

} else if ((currentAssets == "") || (cL == "") || (inventory == "") || (preExpense == "")){
  alert("All Input Feilds Must Be Filled");

    } else {

    numerator = currentAssets - inventory - preExpense;
    finalAnswer = numerator / cL;

    }

document.getElementById("quickRatio").innerHTML = "Quick Ratio: " + finalAnswer;

}

function currentRatio(){
  var cA, currentL, finalAnswer;

  cA = Number(document.getElementById("cA").value);
  currentL = Number(document.getElementById("currentL").value);

  if (isNaN(cA) || isNaN(currentL)) {

    finalAnswer = "Hmm looks like your input was not accepted <br> Please check your input: <br> (1) Is just numbers <br> (2) There are no alphabets <br> (3) No special characters other then decimal <br> (4) All input feilds have been filled";

  } else if ((cA == "") || (currentL == "")){
    alert("All Input Feilds Must Be Filled");

      } else {

      finalAnswer = cA / currentL;

      }

  document.getElementById("currentRatio").innerHTML = "Current Ratio: " + finalAnswer;

}

function timeInterest() {

  var income, intExp, finalAnswer;

  income = Number (document.getElementById("income").value);
  intExp = Number(document.getElementById("intExp").value);

  if (isNaN(income) || isNaN(intExp)){
    finalAnswer = "Hmm looks like your input was not accepted <br> Please check your input: <br> (1) Is just numbers <br> (2) There are no alphabets <br> (3) No special characters other then decimal <br> (4) All input feilds have been filled";

  } else if ((income == "") || (intExp == "")) {
    alert("All Input Feilds Must Be Filled");
  } else {

  finalAnswer = income / intExp;
  }

  document.getElementById("timeInterest").innerHTML = "Times Interest Earned Ratio: " + finalAnswer;
}

//SOLVENCY RATIOS JS CODE //


function calcdebtRatio(){

  var totalL, totalE, finalAnswer;

  totalE = Number(document.getElementById("totalE").value);
  totalL = Number(document.getElementById("totalL").value);

  if (isNaN(totalL) || isNaN(totalE)) {

    finalAnswer = "Hmm looks like your input was not accepted <br> Please check your input: <br> (1) Is just numbers <br> (2) There are no alphabets <br> (3) No special characters other then decimal <br> (4) All input feilds have been filled";

  } else if ((totalL == "") || (totalE == "")){
    alert("All Input Feilds Must Be Filled");

      } else {

      finalAnswer = totalL/ totalE;

      }

  document.getElementById("debtRatio").innerHTML = "Debt to Equity Ratio: " + finalAnswer;

}

function equityRatio(){

  var total_E, totalA, finalAnswer;

  total_E = Number(document.getElementById("total_E").value);
  totalA = Number(document.getElementById("totalA").value);

  if (isNaN(totalA) || isNaN(total_E)) {

    finalAnswer = "Hmm looks like your input was not accepted <br> Please check your input: <br> (1) Is just numbers <br> (2) There are no alphabets <br> (3) No special characters other then decimal <br> (4) All input feilds have been filled";

  } else if ((totalA == "") || (total_E == "")){
    alert("All Input Feilds Must Be Filled");

      } else {

      finalAnswer = total_E / totalA;

      }

  document.getElementById("equity_Ratio").innerHTML = "Equity Ratio: " + finalAnswer;

}

function debtRatio(){

  var total_L, total_A, finalAnswer;

  total_L = Number(document.getElementById("total_L").value);
  total_A = Number(document.getElementById("total_A").value);

  if (isNaN(total_A) || isNaN(total_L)) {

    finalAnswer = "Hmm looks like your input was not accepted <br> Please check your input: <br> (1) Is just numbers <br> (2) There are no alphabets <br> (3) No special characters other then decimal <br> (4) All input feilds have been filled";

  } else if ((total_A == "") || (total_L == "")){
    alert("All Input Feilds Must Be Filled");

      } else {

      finalAnswer = total_L / total_A;

      }

  document.getElementById("debt_Ratio").innerHTML = "Debt Ratio: " + finalAnswer;

}

//Profitability RATIOS //

function grossMargin(){

  var cogs, netSales, gross_Margin, finalAnswer;

  cogs = Number(document.getElementById("cogs").value);
  netSales = Number(document.getElementById("netSales").value);

  if (isNaN(cogs) || isNaN(netSales)) {

    finalAnswer = "Hmm looks like your input was not accepted <br> Please check your input: <br> (1) Is just numbers <br> (2) There are no alphabets <br> (3) No special characters other then decimal <br> (4) All input feilds have been filled";

  } else if ((cogs == "") || (netSales == "")){
    alert("All Input Feilds Must Be Filled");

      } else {

      gross_Margin = netSales - cogs;
      finalAnswer = gross_Margin / netSales;

      }

  document.getElementById("grossMargin").innerHTML = "Gross Margin Ratio: " + finalAnswer;

}

function profitMargin(){

  var netIncome, net_Sales, finalAnswer;

  netIncome = Number(document.getElementById("netIncome").value);
  net_Sales = Number(document.getElementById("net_Sales").value);

  if (isNaN(netIncome) || isNaN(net_Sales)) {

    finalAnswer = "Hmm looks like your input was not accepted <br> Please check your input: <br> (1) Is just numbers <br> (2) There are no alphabets <br> (3) No special characters other then decimal <br> (4) All input feilds have been filled";

  } else if ((netIncome == "") || (net_Sales == "")){
    alert("All Input Feilds Must Be Filled");

      } else {

      finalAnswer = netIncome / net_Sales;

      }

  document.getElementById("profitMargin").innerHTML = "Profit Margin Ratio: " + finalAnswer;

}

function returnOnAssets(){

  var NetIncome, totalAssets, finalAnswer;

  NetIncome = Number(document.getElementById("NetIncome").value);
  totalAssets = Number(document.getElementById("totalAssets").value);

  if (isNaN(NetIncome) || isNaN(totalAssets)) {

    finalAnswer = "Hmm looks like your input was not accepted <br> Please check your input: <br> (1) Is just numbers <br> (2) There are no alphabets <br> (3) No special characters other then decimal <br> (4) All input feilds have been filled";

  } else if ((NetIncome == "") || (totalAssets == "")){
    alert("All Input Feilds Must Be Filled");

      } else {

      finalAnswer = NetIncome / totalAssets;

      }

  document.getElementById("returnOnAssets").innerHTML = "Return on Assets Ratio: " + finalAnswer;

}

function returnOnEquity(){

  var Net_Income, sE, finalAnswer;

  Net_Income = Number(document.getElementById("Net_Income").value);
  sE = Number(document.getElementById("sE").value);

  if (isNaN(Net_Income) || isNaN(sE)) {

    finalAnswer = "Hmm looks like your input was not accepted <br> Please check your input: <br> (1) Is just numbers <br> (2) There are no alphabets <br> (3) No special characters other then decimal <br> (4) All input feilds have been filled";

  } else if ((Net_Income == "") || (sE == "")){
    alert("All Input Feilds Must Be Filled");

      } else {

      finalAnswer = Net_Income / sE;

      }

  document.getElementById("returnOnEquity").innerHTML = "Return on Equity Ratio: " + finalAnswer;

}
