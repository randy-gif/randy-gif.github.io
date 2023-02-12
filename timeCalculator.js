export class inspectionCalculator{

    #nextInspection;

    constructor(){
        this.#nextInspection = new Date();
    }

    calculateDownTime(downTime, timeResumed){
        return timeResumed.getTime() - downTime.getTime();
    }


    CalculateNextInspection(lastInspection, downTime, timeResumed) {
        let dateObj = new Date;
        this.#nextInspection.setTime(lastInspection.getTime() +
        this.calculateDownTime(downTime, timeResumed) + (60 * 60 * 1000));
        dateObj = this.#nextInspection;
        return dateObj;
    } 

    formatTime(time){
        let amOrpm = "NaN";
        let hours = time.getHours();
        if (time.getHours() >= 12){
            amOrpm = "PM";
        }else{
            amOrpm = "AM";
        }
        if (time.getHours() > 12){
            hours = time.getHours() - 12;
        }
        else if(time.getHours() == 0){
            hours = 1;
        }
        if (hours < 10 && time.getMinutes() < 10) {
            return "0" + hours + ":" + "0" + time.getMinutes() + " " + amOrpm + 
            "\n" + (time.getMonth() + 1 ) + "/" + time.getDate() + "/" +time.getFullYear();
        } 
        else if (hours < 10 && time.getMinutes() >= 10) {
            return "0" + hours + ":" +  time.getMinutes() + " " + amOrpm + 
            "\n" + (time.getMonth() + 1 ) + "/" + time.getDate() + "/" +time.getFullYear();
        } 
        else if (hours >= 10 && time.getMinutes() < 10) {
            return hours + ":" + "0" + time.getMinutes() + " " + amOrpm + 
            "\n" + (time.getMonth() + 1 ) + "/" + time.getDate() + "/" +time.getFullYear();
        } 
        else {
            return hours + ":" + time.getMinutes() + " " + amOrpm + 
            "\n" + (time.getMonth() + 1 ) + "/" + time.getDate() + "/" +time.getFullYear();
            ;
        }
    }
    formatHours(hours){
        if (hours < 10){
            return `0${hours}`;
        }
        else{
            return `${hours}`;
        }
     }
    formatMinutes(minutes){
        if (minutes < 10){
            return `0${minutes}`;
        }
        else{
            return `${minutes}`;
        }
     }
    formatMonth(month){
        let actualMonth = month + 1;
        if (actualMonth < 10){
            return `0${actualMonth}`;
        }
        else{
            return `${actualMonth}`;
        }
     }
    formatDay(day){
        if (day < 10){
            return `0${day}`;
        }
        else{
            return `${day}`;
        }
     }
    autoSetDate(){
        let dateObj = new Date();
        let month = this.formatMonth(dateObj.getMonth());
        let day = this.formatDay(dateObj.getDate());
        let dateFormat =  dateObj.getFullYear() + "-" + month + "-" + day;
        document.getElementById("lastInspectionDate").value = dateFormat;
        document.getElementById("donwTimeDate").value = dateFormat;
        document.getElementById("timeResumedDate").value = dateFormat;
    }
}

export class DownTimeError extends Error{
    constructor(message){
        super(message);
        this._message = message
    }
}
export class LastInspectionError extends Error{
    constructor(message){
        super(message);
        this._message = message
    }
}
export class ProductionResumedError extends Error{
    constructor(message){
        super(message);
        this._message = message
    }
}
export class BlankError extends Error{
    constructor(message){
        super(message);
        this._message = message;
    }
}
