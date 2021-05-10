// # 1. 2D Array
// * Given the 2D Array below, **loop** through the arrays to print the values.

let board = [
  [1, 2, 3],
  ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
  [true, false]
];

for ( i = 0; i < board.length; ++i) {
    console.log( 'value at array [' + i + '] is: ' + board[i] );
  } 
  //or 
  for (const values of board) {
    console.log("values: ", values);
} 

  //ANSWER:
// value at array [0] is: 1,2,3
// value at array [1] is: quick,brown,fox,jumped,over,lazy,dog
// value at array [2] is: true,false


// #### 2. Doggo
// * 2.1 Create a doggo object. Add name and breed as properties of the object.
// * 2.2 Create an array within the doggo object named favorite foods and add the doggo's favorite foods to the array.
// * 2.3 Access the second element of the doggo's favorite foods. 
// * 2.4 Add a method that loops through and print all the doggo's favorite food.

const doggo = {
    dogName: "Pipo",
    breed: "mixed-race",
    favouriteFoods: ["pienso", "carrots", "meat", "fruits"],
    print: function() {
        console.log("These are " + this.dogName + "'s  (our " + this.breed + " dog)  favourite foods:  " + this.favouriteFoods)},
    
};

console.log(doggo.favouriteFoods[1]); //it prints: carrots
doggo.print();// it prints : "These are Pipo's  (our mixed-race dog)  favourite foods:  pienso,carrots,meat,fruits"


// #### 3. 
// * 3.1 Create an object called recipes.
// * 3.2 Inside this object, you should create another object for ingredients and store ingredients as properties butter, sugar, flour etc. Each property should have a string as its value. 

const recipes = {
    ingredients : { 
        butter : "100 gr", 
        sugar : "50 gr", 
        flour: "180 gr" },
    printIngredients() {
        console.log(Object.values(recipes.ingredients));//method to print all ingredients
    }
};   
// * 3.3 Without changing the previous code, add another ingredient - let's add `ginger`. 

//function to add ingredient : key and value
function addIngredient(x) {
  x.ginger = "1 pinch";
  return x;
}

addIngredient(recipes.ingredients);//we are passing in a reference

console.log(recipes);
//ANSWER: it prints:
// {
//     ingredients: {
//       butter: '100 gr',
//       sugar: '50 gr',
//       flour: '180 gr',
//       ginger: '1 pinch'
//     }
//   }
// * 3.4 Change the ingredient `sugar` to `brown sugar`. 

recipes.ingredients['brownSugar'] = recipes.ingredients['sugar'];//changed the key sugar

// * 3.5 Write a method in the recipes object that prints the value of each ingredient in the ingredients object. 

recipes.printIngredients();// method that prints:the value of recipeś ingredients

