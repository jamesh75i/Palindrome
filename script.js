function palindromeChecker(str){
    let word = str.toLowerCase().replace(/[\W_]/g, "");
    
    let forwards = word;
    let backwards = [];
    let len = forwards.length
    for(let i = 0; i < len; i++){
        backwards[i] = forwards[len -1 - i];
    }

    for(let i = 0; i < len; i++){
        if(backwards[i] !== forwards[i]){
            return false;
        }
    }
    return true; 
}

palindromeChecker(word3);