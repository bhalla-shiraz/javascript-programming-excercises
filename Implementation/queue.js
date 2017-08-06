function Queue () {
   this.oldest_index = -1
   this.newest_index = -1
   this.list = []

   this.enqueue = function(data) {
      if(this.oldest_index == -1) {
         this.oldest_index = 0
      }
      this.newest_index++
      this.list[this.newest_index] = data
      console.log(this);
   }

Queue.prototype.show = function() {
   console.log("hello");
}
   this.dequeue = function(data) {
      if(this.newest_index == -1 || this.oldest_index > this.newest_index) {
         console.log("empty");
         return
      }
      console.log(this.list[this.oldest_index])
      this.oldest_index++
      console.log(this);
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
