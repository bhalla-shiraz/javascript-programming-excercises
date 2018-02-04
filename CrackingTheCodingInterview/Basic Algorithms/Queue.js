class Queue {
    constructor() {
        this.front = -1
        this.end = -1
        this.data = []
    }

    insert(value) {
        if(this.front === -1 && this.end === -1) {
            this.front++
        }
        this.end++ 
        this.data[this.end] = value
    }

    remove() {
        if(this.end < this.front || this.front === -1) {
            console.log("Queue is empty")
            return
        }
        console.log(this.data[this.front++]);
        
    }
}

const queue = new Queue()

queue.remove()
queue.insert(20)
queue.insert(21)
queue.insert(22)
queue.insert(23)
queue.remove()
queue.remove()
queue.remove()
queue.remove()
queue.remove()