function vowelCounter(wordStr) {
    let wordArr = wordStr.toUpperCase().split('')
    let total = 0;
    for(let i = 0 ; i < wordArr.length ; i++ ){
        if(wordArr[i].includes('A')){
            total++;
        }else if(wordArr.includes('E')){
            total++;
        }else if(wordArr.includes('I')){
            total++;
        }else if(wordArr.includes('I')){
            total++;
        }else if(wordArr.includes('O')){
            total++;
        }else if(wordArr.includes('U')){
            total++;
        }else{
            total;
        }
    }
    return total;
}
//     }else if(wordArr.includes('A','E','I','O','U')){

//     }else{
//       return 0;
//     }}