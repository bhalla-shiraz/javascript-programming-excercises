class Node {
    constructor(val) {
        this.next = null
        this.value = val
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.current = null
    }

    add(value) {
        const newNode = new Node(value)
        if(this.head === null) {
            this.current = newNode
            this.head = this.current
        } else {
            this.current.next = newNode
            this.current = this.current.next
        }
    }

    traverse() {
        let list = this.head
        console.log("list: ");
        
        while(list !== null) {
            console.log(list.value);
            list = list.next
        }
    }
}

const sampleList = new LinkedList()

sampleList.traverse()
sampleList.add(12)
sampleList.add(13)
sampleList.add(14)
sampleList.add(15)
sampleList.add(16)
sampleList.add(17)
sampleList.add(19)
sampleList.traverse()