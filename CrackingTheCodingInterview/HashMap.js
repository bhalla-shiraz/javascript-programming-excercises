class Node {
    constructor(key, value, hashIndex) {
        this.key = key
        this.value = value
        this.hashIndex = hashIndex
        this.next = null
    }
}

class HashMap {
    constructor() {
        this.map = []
        this.NumberOfbuckets = 16
    }
    getHashCode(key) {
        return key.charCodeAt(0)
    }
    getHashIndex(key) {
        return this.getHashCode(key) & (this.NumberOfbuckets - 1)
    }
    put(key, value) {
        const hashIndex = this.getHashIndex(key)
        let bucketItem = this.map[hashIndex]
        if(!bucketItem) {
            this.map[hashIndex] = new Node(key, value, hashIndex)
            return
        } 
        while(bucketItem.next !== null && bucketItem.next.key !== key) {
            bucketItem = bucketItem.next
        }

        if(bucketItem.next === null) {
            bucketItem.next = new Node(key, value, hashIndex)
            return
        }
        
        bucketItem.next.value = value
        
    }
    get(key) {
        const hashIndex = this.getHashIndex(key)
        let bucketItem = this.map[hashIndex]
        while(bucketItem.key !== key) {
            bucketItem = bucketItem.next
        }
        if(bucketItem === null) {
            console.log("key not found");
            return
        }

        console.log(bucketItem);
        


        
    }
    show() {
        console.log(this.map[6]);
        
    }
}

const map = new HashMap()

map.put('sachin', 30)
map.put('vishal', 20)
map.put('v', 50)
map.put('v', 670)
map.put('v', 0)
map.put('v', 1)

// map.show()

map.get('v')



