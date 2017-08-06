function LinkedList() {
   this.value = 0
   this.next = null
}

let l1 = new LinkedList()

l1.value = 100
l1.next = new LinkedList()

let temp = l1.next
let i = 0
while(i < 10) {
   temp.value = i
   temp.next = new LinkedList()
   temp = temp.next
   i++
}

let head = l1

while(head != null) {
   console.log(head.value)
   head = head.next
}

i = 0
head = l1
while(head != null) {
   if(i == 5) {
      head.next = null
   }
   i++
   head = head.next
}

console.log(l1);
