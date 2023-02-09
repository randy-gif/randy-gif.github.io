document.getElementById("submitBtn")
 .onclick = () => {
  let lastInspection = document
   .getElementById(
    "LastInspectionImpt");
  let downTime = document
   .getElementById("downTimeImpt");
  let timeResumed = document
   .getElementById("resumedImpt");
  document.getElementById(
    "inspectionDue").innerText =
   formatTime(CalculateNextInspection(
    lastInspection, downTime,
    timeResumed))
 };

function calculateDownTime(downTime,
 timeResumed) {

 /* This converts the time from string to int for Down Time*/
 let DTHoursStr = downTime.value[0] +
  downTime.value[1];
 let DTMinutesStr = downTime.value[
   3] +
  downTime.value[4];
 let DTHours = parseInt(DTHoursStr);
 let DTMinutes = parseInt(
  DTMinutesStr);

 /* This converts the time from string to int for time resumed*/
 let TRHoursStr = timeResumed.value[
   0] + timeResumed
  .value[1];
 let TRMinutesStr = timeResumed
  .value[
   3] + timeResumed
  .value[4];
 let TRHours = parseInt(TRHoursStr);
 let TRMinutes = parseInt(
  TRMinutesStr);

 let totalMinutes = ((TRHours * 60) +
  TRMinutes) - ((DTHours * 60) +
  DTMinutes);

 return totalMinutes;
}

function CalculateNextInspection(
 lastInspection, downTime,
 timeResumed
) {
 let hoursStr = lastInspection.value[
  0] + lastInspection.value[1];
 let minutesStr = lastInspection
  .value[
   3] + lastInspection.value[4];
 let hours = parseInt(hoursStr);
 let minutes = parseInt(minutesStr);
 let totalHours = 0;

 let totalMinutes =
  calculateDownTime(
   downTime, timeResumed) + ((hours *
   60) + minutes) + 60;
 if (totalMinutes >= 60) {
  totalHours = Math.floor(
   totalMinutes / 60);
  totalMinutes = totalMinutes % 60;
  /* while (totalMinutes > 60) {
    totalMinutes -= 60;
    totalHours += 1;
   }*/

 }
 if (totalHours < 10 &&
  totalMinutes < 10) {
  return "0" + totalHours + ":" +
   "0" + totalMinutes;
 } else if (totalHours < 10 &&
  totalMinutes > 10) {
  return "0" + totalHours + ":" +
   totalMinutes;
 } else if (totalHours > 10 &&
  totalMinutes < 10) {
  return totalHours + ":" + "0" +
   totalMinutes;
 } else {
  return totalHours + ":" +
   totalMinutes;
 }
}

function formatTime(time) {
 let hoursStr = time[0] + time[1];
 let minutesStr = time[3] + time[4];
 let amOrpm = "AM";

 let hours = parseInt(hoursStr);
 let minutes = parseInt(minutesStr);

 if (hours > 12) {
  hours = hours - 12;
  amOrpm = "PM";
 }

 if (hours < 10 &&
  minutes < 10) {
  return "0" + hours + ":" +
   "0" + minutes + " " +
   amOrpm;
 } else if (hours < 10 &&
  minutes > 10) {
  return "0" + hours + ":" +
   minutes + " " +
   amOrpm;
 } else if (hours > 10 &&
  minutes < 10) {
  return hours + ":" + "0" +
   minutes + " " +
   amOrpm;
 } else {
  return hours + ":" +
   minutes + " "
  amOrpm;
 }
}
