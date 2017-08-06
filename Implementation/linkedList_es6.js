class LinkedList {
   constructor() {
      this.value = 0
      this.next = null
   }
}

let list = new LinkedList()

let i = 0
let head = list
while(i < 10) {
   head.value = i
   head.next = new LinkedList()
   head = head.next
   i++
}

console.log(list);


let ptr1 = null
let ptr2 = list
let ptr3 = list.next

while(ptr3 !== null) {
   ptr2.next = ptr1
   ptr1 = ptr2
   ptr2 = ptr3
   ptr3 = ptr3.next
}

ptr2.next = ptr1
console.log(ptr2);
