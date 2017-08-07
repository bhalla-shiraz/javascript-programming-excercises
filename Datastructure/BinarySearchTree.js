class Node {
   constructor(val) {
      this.value = val
      this.left = null
      this.right = null
   }
}
class BinarySearchTree {
   constructor() {
      this.head = null
      this.current = this.head
      console.log("BinarySearchTree");
   }

   insert(val) {
      if(!val) {
         this.current = this.head
         console.log('head', this.head);
         return
      }
      console.log("header");
      if(!this.head) {
         this.head = new Node(val)
         this.current = this.head
         return
      }

      if(val > this.current.value) {
         if(this.current.right == null) {
            this.current.right = new Node(val)
            this.current = this.head
            console.log(this.current, this.head);
            return
         }
         this.current = this.current.right
         this.insert(val)
      } else {
         console.log("value left", val);
         if(this.current.left == null) {
            this.current.left = new Node(val)
            this.current = this.head
            console.log("printing");
            console.log(this.current, this.head);
            return
         }
         this.current = this.current.left
         this.insert(val)
      }
   }

   show() {
      console.log(this);
   }
}


let bst = new BinarySearchTree()
bst.insert(1)
bst.insert(1)
bst.insert(1)
bst.insert(1)
console.log(bst, "bst");
bst.show()
