/**
 * Singleton using function
 * When you want a constructor function
 * But a single instance
 */

 const Counter = new function() {
     this.count = 0
     this.updateCount = () => {
         this.count += 1
     }
     this.getcount = () => {
         console.log(this.count);
         
     }
 }

 Counter.updateCount()
 Counter.updateCount()
 Counter.updateCount()

 Counter.getcount()