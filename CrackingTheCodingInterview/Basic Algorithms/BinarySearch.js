const BinarySearch = (list, value, low, high) => {
    const mid = low + Math.floor((high - low) / 2)
    if(low > high) {
        console.log("not found");
        return
    }
    if(list[mid] === value) {
        console.log("index", mid);
        return
    } else if(list[mid] > value) { 
        BinarySearch(list, value, low, mid - 1)
    } else {
        BinarySearch(list, value, mid + 1, high)
    }
}

const arr = [1,2,3,4,5,6,7,8,9, 10, 11, 12, 13, 14, 15]

BinarySearch(arr, 13, 0, arr.length - 1)