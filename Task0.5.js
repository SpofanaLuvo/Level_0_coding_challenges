function calculateArea(sideA,sideB,sideC){
    var semiPerimeter = (1/2)*(sideA+sideB+sideC);
    var area = Math.sqrt(semiPerimeter*((semiPerimeter-sideA)*(semiPerimeter-sideB)*(semiPerimeter-sideC)));
 
    return area;

} 
console.log(calculateArea(7,8,9));