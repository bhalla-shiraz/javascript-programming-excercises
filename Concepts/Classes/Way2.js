/*
 * Way 2 of making classes is using Object Literals
 * This way is also called Singleton Class
 * As only one object can be created - cannot create multiple instances
 */

 const Fruit = {
    name: 'Apple',
    type: 'raw',
    getFruitName: function() {
        console.log(this.name)
    },
    getFruitType: function() {
        console.log(this.type);
    }
 }

 Fruit.getFruitName()
 Fruit.getFruitType()
 