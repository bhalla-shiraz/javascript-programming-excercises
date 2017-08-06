class Node {
   constructor() {
      this.left = null
      this.right= null
      this.value= null
   }
}

function insert(t1, data) {
   if(!t1.value) {
      t1.value = data
      t1.next = new Node()
      return
   }

   if(t1.value < data) {
      if(t1.right == null) {
         t1.right = new Node()
         t1.right.value = data
         return
      }
      insert(t1.right, data)
   } else {
      if(t1.left == null) {
         t1.left = new Node()
         t1.left.value = data
         return
      }
      insert(t1.left, data)
   }

}



let t = new Node()

let list = [4,2,6,1,3,5,9]

for(let l in list) {
   insert(t, list[l])

}


function DFS(t) {
   console.log(t.value);
   if(!t.left && !t.right) {
      return
   }

   if(t.left) {
      show(t.left)
   }

   if(t.right) {
      show(t.right)
   }
}

function preorder(t) {
   console.log(t.value);
   if(!t.left && !t.right) {
      return
   }

   if(t.left) {
      preorder(t.left)
   }

   if(t.right) {
      preorder(t.right)
   }
}

function post(t) {
   if(!t.left && !t.right) {
      console.log(t.value);
      return
   }

   if(t.left) {
      post(t.left)
   }

   if(t.right) {
      post(t.right)
   }
   console.log(t.value);

}

function inorder(t) {
   if(!t.left && !t.right) {
      console.log(t.value);
      return
   }

   if(t.left) {
      inorder(t.left)
   }
   console.log(t.value);

   if(t.right) {
      inorder(t.right)
   }
}

class Queue {
   constructor() {
      this.list = []
      this.newest_index = -1
      this.oldest_index = -1
   }

   enqueue(data) {
      if(this.oldest_index == -1) {
         this.oldest_index++
      }
      this.newest_index++
      this.list[this.newest_index] = data
   }

   dequeue() {
      if(this.newest_index == -1 || this.oldest_index > this.newest_index) {
         return 100
      }
      return this.list[this.oldest_index++]

   }

   isEmpty() {
      if(this.newest_index == -1 || this.oldest_index > this.newest_index) {
         return true
      } else {
         return false
      }
   }
}


function BFS(t) {
   let q = new Queue()
   let ele = t
   q.enqueue(ele)
   console.log(q);
   let i = 10

   while(!q.isEmpty() && i > 0) {
      ele = q.dequeue()
      console.log(ele);
      console.log(ele.value);
      if(ele.left)
         q.enqueue(ele.left)
      if(ele.right)
         q.enqueue(ele.right)

      console.log(q);
      i--
   }
}

function show(t) {
   if(!t.left && !t.right) {
      return
   }

   if(t.left) {
      show(t.left)
   }

   if(t.right) {
      show(t.right)
   }
}


console.log(t);
BFS(t)
