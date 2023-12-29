# randy-gif.github.io

## ABOUT
This is my very first project in JavaScript. I created this program to help a person I was training to add downtime to her hourly inspections.

## EXAMPLE
```javascript
let iTime = "3:45pm 6/17/23"; // time of last inspection / or time when production first started
let downTime = "4:00pm 6/17/23"; // time the room went down
let timeResumed = "4:30pm 6/17/23"; // time when the production resumed
let totalDownTime = timeResumed - downTime; // in this case, total downtime equals 30 minutes
let nextInspectionDueTime = iTime + totalDownTime + 60; // in this case, nextInspectionDueTime is equal to "5:15pm 6/17/23"
return nextInspectionDueTime; // "5:15pm 6/17/23"


    DEFENITIONS:
Down-Time - the amount of time the room was not running. <br/>
Hourly Inspections - as part of quality control routine hourly inspections are performed on finishe product. <br/>

    HOW TO USE:
put the time of the last inspection/ or put the time when production first started. <br/>
put the time the room went down (the time it stoped running). <br/>
put the time when production was resumed (the time the room started to run again). <br/>

    WHAT IT DOES:
it gets the the amount of time the room was down. it does this by subtracting the time the room went down by the time when production was resumed. <br/>
it adds the total down time to the last inspection plus one hour.  <br/>
