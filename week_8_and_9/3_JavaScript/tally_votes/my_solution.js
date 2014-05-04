// U3.W8-9: Gradebook from Names and Scores

// I worked on this challenge by myself.

// These are the votes cast by each student. Do not alter these objects here.
var votes = {
  "Alex": { president: "Bob", vicePresident: "Devin", secretary: "Gail", treasurer: "Kerry" },
  "Bob": { president: "Mary", vicePresident: "Hermann", secretary: "Fred", treasurer: "Ivy" },
  "Cindy": { president: "Cindy", vicePresident: "Hermann", secretary: "Bob", treasurer: "Bob" },
  "Devin": { president: "Louise", vicePresident: "John", secretary: "Bob", treasurer: "Fred" },
  "Ernest": { president: "Fred", vicePresident: "Hermann", secretary: "Fred", treasurer: "Ivy" },
  "Fred": { president: "Louise", vicePresident: "Alex", secretary: "Ivy", treasurer: "Ivy" },
  "Gail": { president: "Fred", vicePresident: "Alex", secretary: "Ivy", treasurer: "Bob" },
  "Hermann": { president: "Ivy", vicePresident: "Kerry", secretary: "Fred", treasurer: "Ivy" },
  "Ivy": { president: "Louise", vicePresident: "Hermann", secretary: "Fred", treasurer: "Gail" },
  "John": { president: "Louise", vicePresident: "Hermann", secretary: "Fred", treasurer: "Kerry" },
  "Kerry": { president: "Fred", vicePresident: "Mary", secretary: "Fred", treasurer: "Ivy" },
  "Louise": { president: "Nate", vicePresident: "Alex", secretary: "Mary", treasurer: "Ivy" },
  "Mary": { president: "Louise", vicePresident: "Oscar", secretary: "Nate", treasurer: "Ivy" },
  "Nate": { president: "Oscar", vicePresident: "Hermann", secretary: "Fred", treasurer: "Tracy" },
  "Oscar": { president: "Paulina", vicePresident: "Nate", secretary: "Fred", treasurer: "Ivy" },
  "Paulina": { president: "Louise", vicePresident: "Bob", secretary: "Devin", treasurer: "Ivy" },
  "Quintin": { president: "Fred", vicePresident: "Hermann", secretary: "Fred", treasurer: "Bob" },
  "Romanda": { president: "Louise", vicePresident: "Steve", secretary: "Fred", treasurer: "Ivy" },
  "Steve": { president: "Tracy", vicePresident: "Kerry", secretary: "Oscar", treasurer: "Xavier" },
  "Tracy": { president: "Louise", vicePresident: "Hermann", secretary: "Fred", treasurer: "Ivy" },
  "Ullyses": { president: "Louise", vicePresident: "Hermann", secretary: "Ivy", treasurer: "Bob" },
  "Valorie": { president: "Wesley", vicePresident: "Bob", secretary: "Alex", treasurer: "Ivy" },
  "Wesley": { president: "Bob", vicePresident: "Yvonne", secretary: "Valorie", treasurer: "Ivy" },
  "Xavier": { president: "Steve", vicePresident: "Hermann", secretary: "Fred", treasurer: "Ivy" },
  "Yvonne": { president: "Bob", vicePresident: "Zane", secretary: "Fred", treasurer: "Hermann" },
  "Zane": { president: "Louise", vicePresident: "Hermann", secretary: "Fred", treasurer: "Mary" }
}

// Tally the votes in voteCount.
var voteCount = {
  president: {},
  vicePresident: {},
  secretary: {},
  treasurer: {}
}

/* The name of each student receiving a vote for an office should become a property 
of the respective office in voteCount.  After Alex's votes have been tallied, 
voteCount would be ...

  var voteCount = {
    president: { Bob: 1 },
    vicePresident: { Devin: 1 },
    secretary: { Gail: 1 },
    treasurer: { Kerry: 1 }
  }

*/


/* Once the votes have been tallied, assign each officer position the name of the 
student who received the most votes. */
var officers = {
  president: undefined,
  vicePresident: undefined,
  secretary: undefined,
  treasurer: undefined
}

// Pseudocode
/*
  --define count_votes to take an object as parameter
    - for voter in votes
      - for position in voter's votes (votes[voter])
        - set voteCount[pos][votes[voter][pos]] to the next incremented value
        - set it to 1 if this is the first time this person has been voted for
  -- define choose_officers to take the counted votes as parameter
    - for position in voteCount
      - initialize largest amount of votes to 0
      - for person in voteCount[position]
        - if value of votes for person at position in voteCount is larger than largest, set officer[position] to that person
        - set largest = value of votes at voteCount[position][person]
        - return officers object
*/

// __________________________________________
// Initial Solution
/*var count_votes = function(object){
  for (var i in object){ //for each name in votes
    for( var j in object[i]){ // for each vote for each name
      // this statement sets the value of vote count for each officer position to another object
      // containing the name and number of votes for that name. ++ || 1 increments the counter for each person's vote
      // but sets the value to 1 if this is the first time this persons vote has come up. 

      voteCount[j][object[i][j]] = ++voteCount[j][object[i][j]] || 1
    }
  }
}
count_votes(votes)
console.log(voteCount)

//assigns values to officers object
var choose_officers = function(count){

  for (var i in voteCount){
    var largest = 0 //sets largest amount of votes to 0
    for (var j in voteCount[i]){
      if(voteCount[i][j] > largest){
        officers[i] = j //sets officer[position] to value of person
        largest = voteCount[i][j] //sets largest to value of voteCount[position][person]
      }
    }
  }
  return officers
}
console.log(choose_officers(voteCount))

*/
// __________________________________________
// Refactored Solution
//I refactored my solution to use more descriptive counter names for my loops, I think it helps track the progression of the code better.

var count_votes = function(object){
  for (var voter in object){ //for each name in votes
    for( var pos in object[voter]){ // for each vote for each name
      // this statement sets the value of vote count for each officer position to another object
      // containing the name and number of votes for that name. ++ || 1 increments the counter for each person's vote
      // but sets the value to 1 if this is the first time this persons vote has come up. 

      voteCount[pos][object[voter][pos]] = ++voteCount[pos][object[voter][pos]] || 1
    }
  }
}
count_votes(votes)

//assigns values to officers object
var choose_officers = function(count){

  for (var pos in voteCount){
    var largest = 0 //sets largest amount of votes to 0
    for (var person in voteCount[pos]){
      if(voteCount[pos][person] > largest){
        officers[pos] = person //sets officer[position] to value of person
        largest = voteCount[pos][person] //sets largest to value of voteCount[position][person]
      }
    }
  }
  return officers
}
choose_officers(voteCount)





// __________________________________________
// Reflection
/*
I felt that this challenge was pretty difficult to work through at first, just because I hadn't had much practice with nested objects and iterating through them. 
After I figured out how I would access each value I needed to work with, then I started writing the loops to go through and count the votes. It took a bit of time to
get my loops done correctly so that I was getting the right values, but I eventually tailored figured it out. I enjoyed this challenge because I liked coming back to Javascript after
a while of inactivity with it. Overall I feel comfortable with the learning objectives, but could always use more practice!
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
  (voteCount.president["Bob"] === 3),
  "Bob should receive three votes for President.",
  "1. "
)

assert(
  (voteCount.vicePresident["Bob"] === 2),
  "Bob should receive two votes for Vice President.",
  "2. "
)

assert(
  (voteCount.secretary["Bob"] === 2),
  "Bob should receive two votes for Secretary.",
  "3. "
)

assert(
  (voteCount.treasurer["Bob"] === 4),
  "Bob should receive four votes for Treasurer.",
  "4. "
)

assert(
  (officers.president === "Louise"),
  "Louise should be elected President.",
  "5. "
)

assert(
  (officers.vicePresident === "Hermann"),
  "Hermann should be elected Vice President.",
  "6. "
)

assert(
  (officers.secretary === "Fred"),
  "Fred should be elected Secretary.",
  "7. "
)

assert(
  (officers.treasurer === "Ivy"),
  "Ivy should be elected Treasurer.",
  "8. "
)