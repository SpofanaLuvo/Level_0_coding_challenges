function getMaximum(){
    var max=-9999999999;

    for (var i=0;i<arguments.length;i++){
        if (arguments[i]>max){
            max=arguments[i];
        }
    }
   /* for (var i=0;i<numbers.length;i++){
        return numbers[i];
    }

    /*if(num1>=num2 && num1>= num3){
        max=num1;
    }else if(num2 >=num1 && num2>= num3){
        max=num2;
    }
    else{
        max = num3;
    }*/
    return max;
}
console.log("Maximum number is "+ getMaximum(1,22,3,2));