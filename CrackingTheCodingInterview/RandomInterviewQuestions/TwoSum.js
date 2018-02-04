const twoSum = (arr, target) => {
    const map = {}
    for(let i = 0; i < arr.length; i++) {
        if(map.hasOwnProperty(target - arr[i])) {
            return [ i, map[target - arr[i]]]   
        } else {
            map[arr[i]] = i
        }
    }

    return 'unable to find the combo'
}

console.log(twoSum([2,7,11,15], 19));
console.log(twoSum([2,7,11,15], 18));
