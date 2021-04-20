function getMaximum(){
    var minValue = 0;
    var maxValue = 0;
    for (var i=0;i<arguments.length;i++){
        if(arguments[i]<minValue){
            minValue = arguments[i];
        }
        if (arguments[i]>maxValue){
            maxValue=arguments[i];
        }
    }
  
    return maxValue;
}
console.log(getMaximum(1,22,3,2));