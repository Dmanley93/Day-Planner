var eventArea = $('#eventArea')
var saveArea = $('.button')
var textArea = $('.textArea')
var timeBlock = $('.hour')
var hour9 = $('#9')
var hour10 = $('#10')
var hour11 = $('#11')
var hour12 = $('#12')
var hour13 = $('#13')
var hour14 = $('#14')
var hour15 = $('#15')
var hour16 = $('#16')
var hour17 = $('#17')
var today = moment();

$("#currentDay").text(today.format("[Today is ] dddd, MMMM Do, YYYY"));
// you can manually add $('#hour-1').click(function() {}); for each of the 8 hrs of the day. You would need to add an id for each timeblock that is unique.
//  $('#hour-1').click(function(event) {
//      event.preventDefault();
//      // Get typed in value. Lots of ways to do this.
//      event.target.value, text Content etc
//      const eventInfo = {
//          description: ???,
//          timeOfDay: ???
//      }
//      // Save in localStorage
//      localStorage.setItem('???', ???);
//      don't forget about JSON.stringify and JSON.parse. Should you store all events in an array?
//  });


// $('#9').click(function(event) {
//          event.preventDefault();
//          // Get typed in value. Lots of ways to do this.
//          event.target.value
//          const eventInfo = {
//              description: ???,
//              timeOfDay: 9
//          }
//          // Save in localStorage
//          localStorage.setItem('???', ???);
//          don't forget about JSON.stringify and JSON.parse. Should you store all events in an array?
//      });

function changeTime(){
    if (moment().format('LT') > 9) {
        $('9').css({ 'background-color': '#d9e9e8', color: '#1a1a1a' });
    } else {
        $('9').css({ 'background-color': '#d3d3d3', color: '#1a1a1a' });
    }
}

//half finished code I got from cody after class for looping a function and retrieving it from local storage.
function retrieveEvent (){
    for (var i=9; i <= 17; i++){
        localStorage.getItem(i);

    }
}

retrieveEvent();
// ## Acceptance Criteria​
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// ​
// ---EXTRA REFERENCES---
// https://momentjs.com/docs/#/displaying/
// https://api.jquery.com/each/
// https://api.jquery.com/addclass/
// https://api.jquery.com/removeclass/
// ​
// --- HTML Elements NEEDED ---
// <div> that acts as a container for all the events
// <div>'s for each hours of the day
// ​
// --- JS Needed ---
// Function that gets ALL events in localStorage
// ​
// ​
// --- CSS Needed ---
// Style the schedule so that it appears on screen in nice, neat ROWS with the content inside taking up the appropriate amount of COLUMN space.
// ​
// 3 classes that have a specific color attached to that class. (past, present, future)
// ​
// ex: .past {
//     background-color: red
// }
// ​
// ​
// ​
// ​
// ​
// ​
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// ---EXTRA REFERENCES---
// https://stackoverflow.com/questions/18966222/jquery-each-and-attaching-click-event
// ^^ Check out this link to see how to attach one click event to multiple html elements based on their class.
// ​
// --- HTML ELEMENT ---
// <div> with a common class for all timeblocks. maybe <div class="timeblock">
// ex: <div class="timeblock"> 
// <div> EVENT INFORMATION </div>
// </div>
// ​
// --- JS NEEDED ===
// you can manually add $('#hour-1').click(function() {}); for each of the 8 hrs of the day. You would need to add an id for each timeblock that is unique.
//  $('#hour-1').click(function(event) {
//      event.preventDefault();
//      // Get typed in value. Lots of ways to do this.
//      event.target.value, text Content etc
//      const eventInfo = {
//          description: ???,
//          timeOfDay: ???
//      }
//      // Save in localStorage
//      localStorage.setItem('???', ???);
//      don't forget about JSON.stringify and JSON.parse. Should you store all events in an array?
//  });
// ​
// ​
// ​
// ​
// ​
// WHEN I refresh the page
// THEN the saved events persist
// a function that runs when the page loads can look like this
// --- JS NEEDED ===
// function init() {
//     let allEvents = [];
// ​
//     if (???SOMETHING IS IN LOCALSTORAGE AND I PARSE IT SINCE I PROBABLY STRINGIFIED IT???) {
//         ??????
//     
// }
