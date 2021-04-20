function getMaximum(){
    var minValue = Math.min(...arguments);
    var maxValue = minValue;
    for (var i=0;i<arguments.length;i++){
        if (arguments[i]>maxValue){
            maxValue=arguments[i];
        }
    }
    return maxValue;
}
console.log(getMaximum(-1,-22,-3,2));