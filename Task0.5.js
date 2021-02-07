function calculateArea(sideA,sideB,sideC){
    var semiPerimeter = (1/2)*(sideA+sideB+sideC);
    var areaSquared = semiPerimeter*((semiPerimeter-sideA)*(semiPerimeter-sideB)*(semiPerimeter-sideC));
 
    function getSquareRoot(areaSquared){
        for(var i=areaSquared;i>=1;i--){
            if(i*i ===areaSquared){
                var squareRoot=i;
                break;
            }
        }return squareRoot;

    }
    var area= getSquareRoot(areaSquared);
    return area;

} 
console.log(calculateArea(4,5,3));