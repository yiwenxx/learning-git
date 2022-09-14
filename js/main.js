/* 1.--------
 Write the JavaScript to display the current day and time in the following format and output it to the html page to the span with an id of "question-1"
*/
var currentdate = new Date();
var day = currentdate.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
var time = currentdate.toLocaleTimeString();

var dateFormated = `Today is ${daylist[day]}. <br/> Current Time: ${time}`

document.getElementById("answer1").innerHTML = dateFormated;

//adapt from https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date; https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat



/* 2.--------
*/
var date2 = new Date();
var month = String(date2.getMonth() + 1).padStart(2, '0');
var date = String(date2.getDate()).padStart(2, '0');
var year = date2.getFullYear();

var format = `${month}-${date}-${year}<br/> ${month}/${date}/${year}<br/> ${date}/${month}/${year}`

document.getElementById("answer2").innerHTML = format;

// adapt from https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date


/* 3.--------
*/
var htmlpage = document.documentElement.innerHTML;

function myFunction() {
    document.getElementById("answer3").innerText = htmlpage;
}


//adapt from https://stackoverflow.com/questions/817218/how-to-get-the-entire-document-html-as-a-string#answer-35917295



/* 4.--------
*/

$(document).ready(function() { 
    'use strict'; console.log('main.js loaded');

paper.install(window);
paper.setup(document.getElementById('main-canvas'));

var tool = new Tool();

var c = Shape.Circle(200, 200, 80); 
c.fillColor = 'black';

var text = new PointText(200, 200); 
text.justification = 'center'; 
text.fillColor = 'white'; 
text.fontSize = 20;
text.content = 'hello world';

tool.onMouseDown = function(event) {
    var c = Shape.Circle(event.point, 20); c.fillColor = 'green';
};


paper.view.draw(); 

});






// adapt from Learning Javascript Ethan Brown Chapter 1
