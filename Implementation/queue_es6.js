class Queue {
   constructor() {
      console.log("queue constructor");
      let x = 20
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
         console.log("empty");
         return
      }

      console.log(this.list[this.oldest_index]);
      this.oldest_index++
   }
}


let q = new Queue()
q.enqueue(200)
q.enqueue(210)
q.enqueue(220)
q.enqueue(230)
q.dequeue()
q.dequeue()
q.dequeue()
q.dequeue()
q.dequeue()
q.dequeue()
