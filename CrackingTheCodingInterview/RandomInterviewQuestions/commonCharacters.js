const commonCharacters = (string1, string2) => {
    const stringArr1 = string1.split('')
    const map = {}
    
    for(i = 0; i < stringArr1.length; i++) {
        if(!map.hasOwnProperty(stringArr1[i])) {
            map[stringArr1[i]] = 1
        } else {
            map[stringArr1[i]]++
        }
    }

    string2.split('').map((c) => {
        if(map.hasOwnProperty(c) && map[c] > 0) {
            console.log(c);
            map[c]--
        }
    })
}

commonCharacters('test', 'resty')