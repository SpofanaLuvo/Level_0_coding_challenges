function getCommonChars(string1,string2){
    
    var commonChars =[];

    for (var i=0; i<string2.length;i++){
        if (string1.includes (string2[i])){
            commonChars.push(string2[i]);
        }
    }
    return commonChars;   
}

console.log("Common letters: " + getCommonChars("house","computers"));