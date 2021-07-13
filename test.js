function vowelCounter(wordStr) {
    let wordArr = wordStr.split('')
    let total = 0;
    for(let i = 0 ; i < wordArr.length ; i++ ){
        if(wordArr[i].includes('a','e','i','o','u')){
            total++;
        }else if(wordArr.includes('A','E','I','O','U')){
            total++;
        }  
    }
    return total;
}
//     }else if(wordArr.includes('A','E','I','O','U')){

//     }else{
//       return 0;
//     }}