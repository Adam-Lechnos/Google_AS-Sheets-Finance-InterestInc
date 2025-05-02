function errorCheckRates() {
  // Fetch error status
  var errorRange = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("yield_calcs").getRange("Q1"); 
  var errorStatus = errorRange.getValue();
  // Check totals sales
  if (errorStatus){
    // Fetch the email address
    var emailAddress = 'adam.lechnos@gmail.com';
  
    // Send Alert Email.
    var message = 'Error in spreadsheet "Estimated Interest Income - Brokerages", "yield_calcs" tab (https://docs.google.com/spreadsheets/d/1qVpG716vNPSDFzkjYQbkTVGrbJlxBT4l52w3FX8CwW4/edit?gid=1577234131#gid=1577234131)'; // Second column
    var subject = 'Spreadsheet Error - Estimated Interest Income - Brokerages';
    MailApp.sendEmail(emailAddress, subject, message);
    }
}