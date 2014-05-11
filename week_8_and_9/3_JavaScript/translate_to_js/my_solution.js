// U3.W8-9: PezDispenser to JS


// I worked on this challenge by myself.

// 2. Pseudocode
/*
	--define var PezDispenser as an object literal
		- define function initialize to take an array of strings as a parameter
			- set this.flavors to a random order of flavors
		- define function show_pez to tkae no parameters
			- loop through flavors and output to console
		- define count_pez with no parameters
			- output this.flavors.length to console
		- define take_pez to take no parameters
			- pop last value from this.flavors and return
		- define add_pez to take a string as parameter
			- push parameter into this.flavors
*/

var flavors1 = ['cherry', 'chocolate', 'cola', 'grape', 'lemon', 'orange', 'peppermint', 'raspberry', 'strawberry']
// 3. Initial Solution
/*var PezDispenser = {
		initialize: function(flavors){
			this.flavors = flavors.sort(function() { //this is a pseudorandom shuffle algorithm that randomizes the flavors.
  			return .5 - Math.random();
			});
		},
		show_pez: function(){
			console.log("Flavors in dispenser: ");
			for (var i in this.flavors){
				console.log(this.flavors[i]);
			}
		},
		count_pez: function(){
			console.log("You have " + this.flavors.length + " pez left.")
			return this.flavors.length
		},
		take_pez: function(){
			var taken = this.flavors.pop()
			console.log("You took a " + taken + " pez from the dispenser.")
			return taken
		},
		add_pez: function(flavor){
			console.log("You add a " + flavor + " flavored pez to the dispenser.")
			this.flavors.push(flavor)
			return this.flavors
		}
}

PezDispenser.initialize(flavors1)
PezDispenser.show_pez()
PezDispenser.count_pez()
PezDispenser.take_pez()
PezDispenser.count_pez()
PezDispenser.show_pez()
PezDispenser.add_pez('purple')
PezDispenser.count_pez()
*/
// 4. Refactored Solution
var PezDispenser = {
		initialize: function(flavors){
			this.flavors = flavors.sort(function() { //this is a pseudorandom shuffle algorithm that randomizes the flavors.
  			return .5 - Math.random();
			});
		},
		show_pez: function(){
			console.log("Flavors in dispenser: ");
			this.flavors.forEach( function(elem){ //refactored solution to use forEach loop 
					console.log(elem)
			})
		},
		count_pez: function(){
			console.log("You have " + this.flavors.length + " pez left.")
			return this.flavors.length
		},
		take_pez: function(){
			var taken = this.flavors.pop()
			console.log("You took a " + taken + " pez from the dispenser.")
			return taken
		},
		add_pez: function(flavor){
			console.log("You add a " + flavor + " flavored pez to the dispenser.")
			this.flavors.push(flavor)
			return this.flavors
		}
}

PezDispenser.initialize(flavors1)
PezDispenser.show_pez()
PezDispenser.count_pez()
PezDispenser.take_pez()
PezDispenser.count_pez()
PezDispenser.show_pez()
PezDispenser.add_pez('purple')
PezDispenser.count_pez()





// 1. DRIVER TESTS/ASSERT STATEMENTS GO BELOW THIS LINE
console.log(PezDispenser.flavors instanceof Array)
console.log(typeof PezDispenser === 'object')
console.log(PezDispenser.take_pez() === 'purple')
console.log(typeof PezDispenser.take_pez() === 'string')
console.log(typeof PezDispenser.count_pez() === 'number')





// 5. Reflection
/*
	I really enjoyed this challenge for two reasons: 1) I love pez, they are seriously the best candy ever. 2) I have a hard time switching 
	between ruby and JS and this was great exercise in doing just that. My strategy was first to come up with a way to represent the dispenser in a 'class-like'
	structure, i.e. object notation. I used object methods to mimic the class methods that my ruby program was using. It took me a bit to write out the methods the way I liked them but I got it
	eventually. Overall I feel more comfortable with switchign between Ruby and JS and am definitely ready to start the on-site program. I didn't find any part of this challenge to be tedious because
	it was fun to code!
*/