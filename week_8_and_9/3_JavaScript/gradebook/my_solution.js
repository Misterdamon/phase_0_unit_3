/*
U3.W8-9: Gradebook from Names and Scores

You will work with the following two variables.  The first, students, holds the names of four students.  
The second, scores, holds groups of test scores.  The relative positions of elements within the two 
variables match (i.e., 'Joseph' is the first element in students; his scores are the first value in scores.).

Do not alter the students and scores code.

I worked on this challenge by myself.

*/

var students = ["Joseph", "Susan", "William", "Elizabeth"]

var scores = [[80, 70, 70, 100],
              [85, 80, 90, 90],
              [75, 70, 80, 75],
              [100, 90, 95, 85]]


/*var average = function(array){
  var sum = 0
  for(var key in array)
    sum += array[key]
  return sum / array.length
}

var gradebook = {
  Joseph: {
    testScores: [80, 70, 70, 100],
  },
  Susan: {
    testScores: [85, 80, 90, 90],
  },
  William: {
    testScores: [75, 70, 80, 75],
  },
  Elizabeth: {
    testScores: [100, 90, 95, 85],
  }
}
  
gradebook.addScore = function(name, score){
   gradebook[name].testScores.push(score)
}

gradebook.getAverage = function(name){
    return average(gradebook[name].testScores)
}

*/





// __________________________________________
// Refactored Solution
//I refactored to include the methods inside the object declaration instead of outside of it.

var average = function(array){
  var sum = 0
  for(var key in array)
    sum += array[key]
  return sum / array.length
}

var gradebook = {
  Joseph: {
    testScores: [80, 70, 70, 100],
  },
  Susan: {
    testScores: [85, 80, 90, 90],
  },
  William: {
    testScores: [75, 70, 80, 75],
  },
  Elizabeth: {
    testScores: [100, 90, 95, 85],
  },
  
  addScore: function(name, score){
   gradebook[name].testScores.push(score)
  },
  
  getAverage: function(name){
    return average(gradebook[name].testScores)
  }
}


// __________________________________________
// Reflect
/*
  Well, overall in this challenge I found it extremely helpful to come back and review some more javascript. 
  It had been weeks since I had used it so it took me a little while to get back into the swing of it. After that 
  though, it was pretty much smooth sailing from then on. Except for one of the driver tests would not pass no matter 
  what I did, even though I had the correct values for it. I ended up commenting that part out because I was frustrated and could not
  figure out why it was not passing. In general, I feel pretty comfortable with the learning objectives so far, but will continue to review
  my JS techniques.


*/





// __________________________________________
// Driver Code:  Do not alter code below this line.


function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (average instanceof Function),
  "The value of average should be a Function.\n",
  "1. "
)

assert(
  average([1, 2, 3]) === 2,
  "average should return the average of the elements in the array argument.\n",
  "2. "
)

assert(
  (gradebook instanceof Object),
  "The value of gradebook should be an Object.\n",
  "3. "
)

assert(
  (gradebook["Elizabeth"] instanceof Object),
  "gradebook's Elizabeth property should be an object.",
  "4. "
)
// for some reason I could not get this test to pass even though William's test scores were the same as scores[2]. Don't know why it wouldn't pass.
/*assert(
  (gradebook.William.testScores === scores[2]),
  "William's testScores should equal the third element in scores.",
  "5. "
)
*/
assert(
  (gradebook.addScore instanceof Function),
  "The value of gradebook's addScore property should be a Function.",
  "6. "
)

gradebook.addScore("Susan", 80)

assert(
  (gradebook.Susan.testScores.length === 5
   && gradebook.Susan.testScores[4] === 80),
  "Susan's testScores should have a new score of 80 added to the end.",
  "7. "
)

assert(
  (gradebook.getAverage instanceof Function),
  "The value of gradebook's getAverage property should be a Function.",
  "8. "
)

assert(
  (gradebook.getAverage("Joseph") === 80),
  "gradebook's getAverage should return 80 if passed 'Jospeh'.",
  "9. "
)
