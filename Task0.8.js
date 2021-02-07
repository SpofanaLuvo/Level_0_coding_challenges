function convertToTime(number){
    var hours=0;
    var minutes=0;
    var hSuffix;
    var mSuffix;

    if (number<60){
        minutes=number;
        hours="";
    }
    else{
        while(number>=60){
            hours++;
            number-=60;
            if(number<60){
                minutes=number;
                if (minutes==0){
                    minutes="";
                }
            }
        }
    }
    
    if (hours>1 && minutes ==0){
        hSuffix=" Hours.";
    }else if (hours>1){
        hSuffix=" Hours, ";
    }else if(hours==1 && minutes==0){
        hSuffix=" Hour. ";
    }else if (hours==0){
        hSuffix="";
    }else{
        hSuffix=" Hour, ";
    }
    
    if (minutes>1){
        mSuffix=" Minutes.";
    }else if(minutes==1){
        mSuffix=" Minute.";
    }else{
        mSuffix="";
    }

    return hours+ hSuffix+ minutes+mSuffix;
}
console.log(convertToTime(180));