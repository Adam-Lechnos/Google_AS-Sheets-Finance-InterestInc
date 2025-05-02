function populateHistoricRecord() {

  var timeOutTH = 1000;
  var sheetHistoricData = SpreadsheetApp.getActive().getSheetByName('Historic Data')
  var sheetSummary = SpreadsheetApp.getActive().getSheetByName('Summary')
  var checkWiseIm = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("yield_calcs").getRange("b44").getValue(); 

  // wait for data to load from WiseSheets
  checkCount = 1
  while (checkWiseIm == "No Data") {      
    SpreadsheetApp.flush()
    checkWiseIm = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("yield_calcs").getRange("b44").getValue(); 
    console.log(`Run attempt ${checkCount}`)
    checkCount += 1;
    if (checkCount == timeOutTH) {
      // Fetch the email address
      var emailAddress = 'adam.lechnos@gmail.com';
      // Send Alert Email.
      var message = 'Script termination for historicRecord.gs. WiseSheets not loading. Check "Estimated Interest Income - Brokerages", "yield_calcs" tab (https://docs.google.com/spreadsheets/d/1qVpG716vNPSDFzkjYQbkTVGrbJlxBT4l52w3FX8CwW4/edit?gid=1577234131#gid=1577234131). Check and re-run script manually.'; // Second column
      var subject = 'Spreadsheet Script Termination - "Estimated Interest Income - Brokerages" - historicRecord.gs';
      MailApp.sendEmail(emailAddress, subject, message);
      console.log("WiseSheets data load timed out")
      return;
    }
  }

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
