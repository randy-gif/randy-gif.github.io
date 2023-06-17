# randy-gif.github.io
    ABOUT
this is my very first project in javaScript. I created this program to help a person I was training to add down-time to her hourly inspections. <br/>

    EXAMPLE:
let iTime = 3:45pm 6/17/23; // time of last inspection / or time when production first started <br/>
let downTime = 4:00pm 6/17/23; // time the room went down <br/>
let timeResumed = 4:30pm 6/17/23; // time when the production resumed <br/>
let totalDownTime = timeResumed - downTime; // in this case total downTime equals 30 minutes <br/>
let nextInspectionDueTime = iTime + totalDownTime + 60 minutes; // in this case nextInspectionDueTime is equal to 5:15pm 6/17/23 <br/>
retrun nextInspectionDueTime; // 5:15pm 6/17/23 <br/>

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
