class Node {
    constructor(value) {
        this.left = null
        this.value = value
        this.right = null
    }
}
class BinarySearchTree {
    constructor() {
        this.head = null
        this.current = this.head
    }

    insert(value) {
        if(this.head === null) {
            this.head = new Node(value)
            this.current = this.head
            return
        }
        if (value < this.current.value) {
            if(this.current.left === null) {
                this.current.left = new Node(value)
                this.current = this.head
                return
            } else {
                this.current = this.current.left
                this.insert(value)
            }
        } else {
            if(this.current.right === null) {
                this.current.right = new Node(value)
                this.current = this.head
                return
            } else {
                this.current = this.current.right
                this.insert(value)
            }
        }
    }


    getHeight(tree) {
        if(tree === null) return 0
        const leftSubtreeHeight = this.getHeight(tree.left)
        const rightSubtreeHeight = this.getHeight(tree.right)
        return Math.max(leftSubtreeHeight + 1, rightSubtreeHeight + 1)
    }

    traverse() {
     const height = this.getHeight(this.head)   
     for(let i = 0; i < height; i++) {
         this.printLevel(this.head, i)
     }
    }
     printLevel(tree, level) {
         if(level === 0) {
             console.log(tree.value)
             return
         }
         tree.left && this.printLevel(tree.left, level - 1)
         tree.right && this.printLevel(tree.right, level - 1)
     }
     
    
    
}

const tree = new BinarySearchTree()
tree.insert(10)
tree.insert(5)
tree.insert(40)
tree.insert(1)
tree.insert(7)
tree.insert(50)

tree.traverse()
