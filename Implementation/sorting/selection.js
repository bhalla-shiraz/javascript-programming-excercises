class Selection {
   constructor() {
      this.list = []
   }

   swap(i,j) {
      let temp = this.list[i]
      this.list[i] = this.list[j]
       this.list[j] = temp
   }

   sort(list) {
      this.list = list

      for(var index = 0; index < list.length; index++) {
         let selected = index
         for(var index1 = index + 1; index1 < list.length; index1++) {
               if (this.list[selected] > this.list[index1]) {
                  selected = index1
               }
         }

         if(index != selected) {
            this.swap(index, selected)
         }
      }
   }

   show() {
      console.log(this.list);
   }


}

let b = new Selection()
b.sort([5,4,3,6,7,8,9,1,2])
b.show()
