$(document).ready(function(){
 
//RELEASE 0: 
  //Link this script and the jQuery library to the jquery_example.html file and analyze what this code does. 
 
$('body').css({'background-color': 'pink'})

var bodyElement = $('body')
//RELEASE 1:
  //Add code here to select elements of the DOM 
 var header1 = $('h1').css({'color': 'darkblue', 'border':'0.5em solid black', 'visibility':'visible'})
//RELEASE 2: 
  // Add code here to modify the css and html of DOM elements
 $('div h1').html("<h1> I am a Fence Lizard, hear me squeak. Or something... </h1>").css({'font-size':'14px','padding':'1em','text-align':'center'})
 

//RELEASE 3: Event Listener
  // Add the code for the event listener here 
  $('img').on('mouseover',function(e) {
 		e.preventDefault()
 		$(this).attr('src', 'logo.jpg')
 		$(this).css({'height':'333px','width':'250px','border':'2px solid white','display':'block', 'margin':'0 auto'})
 })

 $('img').on('mouseleave', function(e) {
 		e.preventDefault();
 		$(this).attr('src','dbc_logo.jpeg')
 })
 
//RELEASE 4 : Experiment on your own
 $( "img" ).on('mouseover', function() {
  $( "img" ).animate({
   	left: '250px',
    height:'+=150px',
   	width:'+=150px'
  }, 750 )
});

$( "img" ).on('mouseout', function() {
  $( "img" ).animate({
   	left: '-250px',
    height: '-=150px',
   	width:'-=150px'
  }, 750 );
});
 
 
 
 
})  // end of the document.ready function: do not remove or write DOM manipulation below this.

/*
REFLECTION----
  For this challenge I really enjoyed getting into some more jquery stuff and manipulation the DOM and CSS by using jquery methods. I had never done any type of
  animation with jquery but it was really cool getting to play around with it! I can't wait to start adding some jquery functionality to my website! It was a bit difficult to grasp how the animations
  actually worked at first, but after going through the code it became pretty obvious. Essentially an animation is just a series of incremental css changes that happen over time, which
  makes elements on the screen move around. Overall I feel pretty comfortable with the learning objectives and cannot wait to get more into it as the on-site program starts! I enjoyed this challenge a lot
  because it really helped me solidify my knowledge of jquery.

*/
