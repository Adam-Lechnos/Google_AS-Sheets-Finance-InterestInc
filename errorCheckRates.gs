function errorCheckRates() {
  // Fetch error status
  var errorStatus = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("yield_calcs").getRange("Q1").getValue();
  errorCheckTH = 1000
  errorCheckCount = 0

  // Give time for error to self resolve
  while (errorStatus && errorCheckCount < errorCheckTH){
    console.log("Error Status: "+errorStatus+"    Check Count:"+errorCheckCount+"/"+errorCheckTH)
    var errorStatus = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("yield_calcs").getRange("Q1").getValue();
    SpreadsheetApp.flush()
    errorCheckCount++
    }

  if (errorStatus){
    // Fetch the email address
    var emailAddress = 'adam.lechnos@gmail.com';

    // Send Alert Email.
    var message = 'Error in spreadsheet "Estimated Interest Income - Brokerages", "yield_calcs" tab (https://docs.google.com/spreadsheets/d/1qVpG716vNPSDFzkjYQbkTVGrbJlxBT4l52w3FX8CwW4/edit?gid=1577234131#gid=1577234131)'; // Second column
    var subject = 'Spreadsheet Error - Estimated Interest Income - Brokerages';
    MailApp.sendEmail(emailAddress, subject, message);
  }
}