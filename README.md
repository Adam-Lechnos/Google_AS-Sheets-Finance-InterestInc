# Google_AS-Sheets-Finance-InterestInc
Estimate Interest Income automation scripts

## Google Apps Script Configuration

### Triggers

| Function | Event Source ( - t)^ | Time Based Trigger ( - nn)* | Time of Day / Hour | Failure Notifications |
| -------- | ------------ | ------------------ | ----------- | --------------------- |
| populateHistoricRecord | Time-drive | Month - 1st | Midnight to 1am | Weekly |
| populateHistoricRecord | Time-drive | Month - 15th | Midnight to 1am | Weekly |

*\*Day of the month if `Month timer` is selected or Day of Week if `Week timer` is selected* \
*\^Event type if `From spreadsheet` is selected*

<sup><sub>Spreadsheet Name: `Estimated Interest Income - Brokerages`</sup></sub>
