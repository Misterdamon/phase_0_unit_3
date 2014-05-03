## Evaluate a Website! 
 
1) How does this website follow HTML Best Practices? Are there any places where 
it does not?  Provide examples of the "bad" code.
For the most part, hackernews.com follows best practices at least in terms of clear choices HTML elements and readability of the code. The element titles were descriptive and clear as well. There were a few instances where the writers followed bad practice, at least from what I've been reading. In the top section of the html code, there is a script that is being loaded in before the rest of the html elements:


` < link href="index.css" rel="stylesheet" type="text/css">  
  < link href="favicon.ico" rel="shortcut icon">  
  < script type="text/javascript">  
function byId(id) {
    return document.getElementById(id);
    }

    function vote(node) {
    var v = node.id.split(/_/);   // {'up', '123'}
    var item = v[1];

    // hide arrows
    byId('up_'   + item).style.visibility = 'hidden';
    byId('down_' + item).style.visibility = 'hidden';

    // ping server
    var ping = new Image();
    ping.src = node.href;

    return false; // cancel browser nav
    } 
  </script > `  

This script can block the rest of the html and their styles from being loaded. This brings me to the next example of bad practice, which is the use of inline CSS, like so:  

` <td style="line-height:12pt; height:10px;"><span class=
            "pagetop"><b><a href="news">Hacker News</a></b><img height="1" src=
            "s.gif" width="10"><a href="newest">new</a> | <a href=
            "newcomments">comments</a> | <a href="ask">ask</a> | <a href=
            "jobs">jobs</a> | <a href="submit">submit</a></span></td>`  

This makes the code harder to read and understand how it is structured, so the preferred method would be to put these styles in an alternate folder.  
2) What do you think of the HTML? Did the writers use IDs and Classes properly?   
	 I feel like the html was fairly good, but I thought that using a table made the elements much harder to read. The classes are pretty well named for the elements, but the id's are pretty hard to keep track of because they contain such specific numbers.  
* Did you like the way they used HTML tags?  Please use examples with your arguments.  
	 I felt like the html was pretty messy actually because there are a lot of different table elements to keep track of and there are a lot of various spans that are just slapped inside a lot of the table elements. This just makes the code harder to read.
 
3) How did the authors handle formatting? Did they include it in the HTML or 
separate it into a CSS file? Or did they do both?  Again, include examples.    
	 The authors used a combination of inline styling and a separate css file. Here's an example of the messy inline styles:    
	` <td style="width:18px;padding-right:4px"><a href=
            "http://ycombinator.com"><img height="18" src="y18.gif" style=
            "border:1px #ffffff solid;" width="18"></a></td> `  
   I feel like this would be better accomplished by putting it in the separate css file with the other css statements.
 
4) Did the authors include anything you didn't immediately understand? 
If so, what?  
Other than a few css properties that I hadn't worked with before, I understood most of the html and css that was on the site. 
 
5) How did the authors organize the CSS file? Was it DRY?  
The authors organized the css file mainly with the html selectors first, then the classes, and then the links. I feel like it was very repetitive at some points, especially when declaring the class properties, like so:  
`.default { font-family:Verdana; font-size: 10pt; color:#828282; }
.admin   { font-family:Verdana; font-size:8.5pt; color:#000000; }
.title   { font-family:Verdana; font-size: 10pt; color:#828282; }
.adtitle { font-family:Verdana; font-size:  9pt; color:#828282; }
.subtext { font-family:Verdana; font-size:  7pt; color:#828282; }
.yclinks { font-family:Verdana; font-size:  8pt; color:#828282; }
.pagetop { font-family:Verdana; font-size: 10pt; color:#222222; }
.comhead { font-family:Verdana; font-size:  8pt; color:#828282; }
.comment { font-family:Verdana; font-size:  9pt; }
.dead    { font-family:Verdana; font-size:  9pt; color:#dddddd; }`  

I feel like this could be done with less classes!  
 
6) Did the authors incorporate any responsive design into the site?  
The size of the body adjusts to screen size when I change the size of my screen, and I believe they perform some media queries and adjusts to rotate for mobile devices.   
`@media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2) {
  .votearrow { background-size: 10px; background-image: url("grayarrow2x.gif"); }
}`  

`.rotate180 {
  -webkit-transform: rotate(180deg);  /* Chrome and other webkit browsers */
  -moz-transform:    rotate(180deg);  /* FF */
  -o-transform:      rotate(180deg);  /* Opera */
  -ms-transform:     rotate(180deg);  /* IE9 */
  transform:         rotate(180deg);  /* W3C complaint browsers */`  

  `/* IE8 and below */
  filter: progid:DXImageTransform.Microsoft.Matrix(M11=-1, M12=0, M21=0, M22=-1, DX=0, DY=0, SizingMethod='auto expand');
}`  
7) What are your overall thoughts on the HTML/CSS from this website based on 
what you've read?  
I would say that while the website is functional and looks simple and uncomplicated, I think that there are still many improvements that could be made to the site. I think it does decently well at following good practices, except when it comes to the inline css and script.

###Reflection
* For this challenge it was really amazing to come back to doing some HTML and CSS and to review the best practices for writing them. I feel like it was a good exercise that definitely reinforced my knowledge. I had a little trouble reformatting the original source HTML from the site, but found a great tool thanks to Clark Hinchcliff! I found it very useful to go through and see exactly how the site was structured and how they used each element. I thought that the use of a table made it pretty hard to understand the html structure but I can see how they chose it because there are so many links to keep track of. Overall I feel pretty comfortable with the learning objectives for this challenge and am looking forward to starting the on-site program!