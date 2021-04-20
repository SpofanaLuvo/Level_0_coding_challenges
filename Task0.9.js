function getVowels(string){
    const vowels = "AEIOUaeiou";
    var foundVowels =[];

    for (var i=0; i<string.length;i++){
        if (vowels.includes (string[i])){
            foundVowels.push(string[i]);
        }
    }
    return foundVowels;   
}

console.log("Vowels: " + getVowels("aUnjekiolnsae"));
