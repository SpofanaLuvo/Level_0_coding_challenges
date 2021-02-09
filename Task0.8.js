function convertToTime(number){
    var hours=0;
    var minutes=0;
    var hUnit;
    var mUnit;

    if (number<60){
        minutes=number;
    }
    else{
        while(number>=60){
            hours++;
            number-=60;
            if(number<60){
                minutes=number;
            }
        }
    }
    if(hours==1){
        hUnit=" Hour, "
    }else{
        hUnit = " Hours, "
    }
    if (minutes==1){
        mUnit=" Minute."
    }else{
        mUnit=" Minutes."
    }
    var time =  hours+hUnit + minutes+mUnit;
    return time;
}
console.log(convertToTime(61));