class Stack {
    constructor() {
        this.data = []
        this.top = -1
    }   

    push(value) {
        this.top++
        this.data[this.top] = value
    }

    pop() {
        console.log(this.data[this.top--])
    }
}

const sampleStack = new Stack()
sampleStack.push(2)
sampleStack.push(3)
sampleStack.push(6)
sampleStack.push(7)
sampleStack.pop()
sampleStack.pop()
sampleStack.pop()