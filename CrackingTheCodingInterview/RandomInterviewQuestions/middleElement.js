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

    findMidElement() {
        let step = 0
        let ptr1 = this.head
        let ptr2 = this.head

        while(ptr1 !== null) {
            step++
            if(step %2 === 0) {
                ptr2 = ptr2.next
            }
            ptr1 = ptr1.next
        }

        console.log(ptr2.value);
        
    }
}

const sampleList = new LinkedList()

sampleList.add(12)
sampleList.add(13)
sampleList.add(14)
sampleList.add(15)
sampleList.add(16)
sampleList.add(17)
sampleList.add(19)
sampleList.findMidElement()
