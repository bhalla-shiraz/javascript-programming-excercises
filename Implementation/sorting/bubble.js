class Bubble {
   constructor() {
      this.list = []
   }

   swap(index) {
      let temp = this.list[index]
      this.list[index] = this.list[index + 1]
       this.list[index + 1] = temp
   }

   sort(list) {
      this.list = list

      for(var index = 1; index < list.length; index++) {
         for(var index1 = 0; index1 < list.length - index; index1++) {
               if (this.list[index1] > this.list[index1 + 1]) {
                  this.swap(index1)
               }
         }
      }
   }

   show() {
      console.log(this.list);
   }


}

let b = new Bubble()
b.sort([5,4,3,6,7,8,9,1,2])
b.show()
