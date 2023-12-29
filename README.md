# Website 
[randy-gif.github.io](https://randy-gif.github.io)

## ABOUT
This is my very first project in JavaScript. I created this program to help a person I was training to add downtime to her hourly inspections.

### DEFINITIONS
- **Down-Time**: The amount of time the room was not running.
- **Hourly Inspections**: As part of the quality control routine, hourly inspections are performed on finished products.

### HOW TO USE
1. Put the time of the last inspection or put the time when production first started.
2. Put the time the room went down (the time it stopped running).
3. Put the time when production was resumed (the time the room started to run again).

### WHAT IT DOES
- It calculates the amount of time the room was down by subtracting the time the room went down from the time when production was resumed.
- It adds the total downtime to the last inspection plus one hour.

## EXAMPLE
```javascript
let iTime = "3:45pm 6/17/23"; // time of last inspection / or time when production first started
let downTime = "4:00pm 6/17/23"; // time the room went down
let timeResumed = "4:30pm 6/17/23"; // time when the production resumed
let totalDownTime = timeResumed - downTime; // in this case, total downtime equals 30 minutes
let nextInspectionDueTime = iTime + totalDownTime + 60; // in this case, nextInspectionDueTime is equal to "5:15pm 6/17/23"
return nextInspectionDueTime; // "5:15pm 6/17/23"



