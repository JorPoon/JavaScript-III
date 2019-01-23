/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.  The "this" in window binding refers to the global scope which is the global object.
* 2. The object left of the "dot" when invoking a function is implicit binding.
* 3. When using .call(), .apply() or .bind() to invoke a function, that is explicit binding.
* 4. The new binding creates a new object with the same properties of the parent object.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this);

// Principle 2

// code example for Implicit Binding
const pokemon = {
    name: "squirtle",
    gen: 1,
    type: "water"
};

console.log(pokemon.name);



// Principle 3

// code example for New Binding
function Pokemons(pokemon) {
    this.name = pokemon.name,
    this.gen = pokemon.gen,
    this.type = pokemon.type,
    this.region = pokemon.region
   };

   const charmander = new Pokemons({
       name: "Charmander",
       gen: 1,
       type: "Fire",
       region: "Kanto",
   });

   console.log(charmander);

// Principle 4

// code example for Explicit Binding

function Trainers (trainer) {
    Pokemons.call(this, trainer);
    this.level =trainer.level;
};

const bulbasaur = new Trainers({
    name:"Bulbasaur",
    gen: 1,
    type: "Grass",
    region: "Kanto",
    level: 15,
});

console.log(bulbasaur);