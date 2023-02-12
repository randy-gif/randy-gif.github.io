import {inspectionCalculator, DownTimeError, BlankError, ProductionResumedError } from "/timeCalculator.js"
let inspectionCalc = new inspectionCalculator;
inspectionCalc.autoSetDate();
document.getElementById("submitBtn")
 .onclick = () => {

  // reset any errors
  let errorReset = document.querySelector(".error");
  errorReset.style.display = "none";

  // Get elements and assgin them
  let lastInspectionTime = document.getElementById("LastInspectionImpt");
  let downTimeTime = document.getElementById("downTimeImpt");
  let timeResumedTime = document.getElementById("resumedImpt");
  let lastInspectionDate = document.getElementById("lastInspectionDate");
  let downTimeDate = document.getElementById("donwTimeDate");
  let timeResumedDate = document.getElementById("timeResumedDate");

  // convert elements to Date objects
  let lastInspection = convertToDateObj(lastInspectionTime,lastInspectionDate);
  let downTime = convertToDateObj(downTimeTime, downTimeDate);
  let timeResumed = convertToDateObj(timeResumedTime, timeResumedDate);
  let nextInspection = new inspectionCalculator();

  // Exception handalilng
    try{
        if (lastInspection.getTime() > downTime.getTime()){
            let downTimeError = new DownTimeError("last inspection time is greater than down Time");
            throw downTimeError;
        }
        else if(lastInspection == null || downTime == null || timeResumed == null){
            let blankError = new BlankError("fill out all blank spaces");
            throw blankError;
        }
        else if ( downTime.getTime() > timeResumed.getTime()){
            let productionResumedError = new ProductionResumedError("Down time is greater than production resumed");
            throw productionResumedError;
        }
    }catch(error){
        if(error instanceof DownTimeError){
            document.getElementById("downTimeError").style.display = "block";
            document.getElementById("downTimeError").innerText =`${error.name}: ${error.message}`;
            return 0;
        }
        else if(error instanceof BlankError){
            document.getElementById("BlankError").style.display = "block";
            document.getElementById("BlankError").innerText =`${error.name}: ${error.message}`;
            return 0;
        }
        else if(error instanceof ProductionResumedError){
            document.getElementById("ProductionResumedError").style.display = "block";
            document.getElementById("ProductionResumedError").innerText =`${error.name}: ${error.message}`;
            return 0;
        }
    }

  // down time has to be greater than last inspection time error

  document.getElementById("inspectionDue").innerText = 
  nextInspection.formatTime(nextInspection.CalculateNextInspection(lastInspection, downTime, timeResumed))
 };

 function convertToDateObj(timeStr, dateStr){
  let hourStr = timeStr.value[0] + timeStr.value[1];
  let minuteStr = timeStr.value[3] + timeStr.value[4];
  let yearStr = dateStr.value[0] + dateStr.value[1] + dateStr.value[2] + dateStr.value[3];
  let monthStr = dateStr.value[5] + dateStr.value[6];
  let dayStr = dateStr.value[8] + dateStr.value[9];
 
  let dateObj = new Date();
  dateObj.setHours(parseInt(hourStr));
  dateObj.setMinutes(parseInt(minuteStr));
  dateObj.setSeconds(0);
  dateObj.setFullYear(parseInt(yearStr));
  dateObj.setMonth(parseInt(monthStr)- 1);
  dateObj.setDate(parseInt(dayStr));

  return dateObj;
 }
