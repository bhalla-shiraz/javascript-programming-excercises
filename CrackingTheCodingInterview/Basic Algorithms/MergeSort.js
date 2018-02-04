const mergeSort = (list) => {
   if(list.length === 1) {
        return list
    }
    const m = Math.floor(list.length/2)
    const list1 = mergeSort(list.slice(0, m))
    const list2 = mergeSort(list.slice(m))
    return merge(list1, list2)
}

const merge = (list1, list2) => {
    let list3 = []
    let i = 0
    let j = 0
    while(i<list1.length && j<list2.length) {
        if(list1[i] < list2[j]) {
            list3.push(list1[i++])
        } else {
            list3.push(list2[j++])
        }
    }

    while(i < list1.length) list3.push(list1[i++])
    while(j < list2.length) list3.push(list2[j++])
    return list3
    
}
const listToBeSorted = [24,5,2,3,4,7,8,1,4,3]

console.log(mergeSort(listToBeSorted));
 