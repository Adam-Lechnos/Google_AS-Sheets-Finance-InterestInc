function populateHistoricRecord() {

  var sheetHistoricData = SpreadsheetApp.getActive().getSheetByName('Historic Data')
  var sheetSummary = SpreadsheetApp.getActive().getSheetByName('Summary')

  var dateRecord = Utilities.formatDate(new Date(), "GMT-5", "MM/dd/yyyy")
  var numGrandTotalAnn = sheetSummary.getRange('B2').getValue();
  var numTotalTaxEx = sheetSummary.getRange('B3').getValue();
  var numTotalTaxable = sheetSummary.getRange('B4').getValue();
  var numTaxDedIntExApp = sheetSummary.getRange('B7').getValue();
  var numTotTaxDedAccInt = sheetSummary.getRange('B8').getValue();
  var numEffTaxDedInvIntExp = sheetSummary.getRange('B9').getValue();
  var numFedExIncome = sheetSummary.getRange('B12').getValue();
  var numStateExIncome = sheetSummary.getRange('B13').getValue();
  var numFedStateExInc = sheetSummary.getRange('B14').getValue();
  var yearRecord = Utilities.formatDate(new Date(), "GMT-5", "yyyy")

  sheetHistoricData.appendRow([dateRecord,numGrandTotalAnn,numTotalTaxEx,numTotalTaxable,numTaxDedIntExApp,numTotTaxDedAccInt,numEffTaxDedInvIntExp,numFedExIncome,numStateExIncome,numFedStateExInc,yearRecord]);

  var range = sheetHistoricData;
  range.sort(1, false);
  
}
