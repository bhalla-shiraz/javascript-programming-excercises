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

    traverse() {
        
        console.log("inorder");
        this.inorder(this.current)
        console.log("preorder");
        this.preorder(this.current)
        console.log("postorder");
        this.postorder(this.current)
    }
    inorder(treePointer) {
        if(treePointer === null) return
        this.inorder(treePointer.left)
        console.log(treePointer.value)
        this.inorder(treePointer.right)
    }

    preorder(treePointer) {
        if(treePointer === null) return
        console.log(treePointer.value)
        this.inorder(treePointer.left)
        this.inorder(treePointer.right)   
    }
    
    postorder(treePointer) {
        if(treePointer === null) return
        this.inorder(treePointer.left)
        this.inorder(treePointer.right)
        console.log(treePointer.value)        
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
