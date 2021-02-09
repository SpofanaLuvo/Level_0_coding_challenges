function getMaximum(){
    var max=-9999999999;

    for (var i=0;i<arguments.length;i++){
        if (arguments[i]>max){
            max=arguments[i];
        }
    }
  
    return max;
}
console.log("Maximum number is "+ getMaximum(1,22,3,2));