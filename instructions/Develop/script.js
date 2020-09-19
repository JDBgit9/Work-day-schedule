// Display current time using Moment.js
var timeDisplay = $("#currentDay");
// Two. – Click event to save text area content to local storage
var currentTime = moment().format("dddd, MMMM Do");


var nine = $
// Click event to save text area content to local storage

//  When app opens, display content for each time block from local storage.
    // It can be done with a loop (more efficient) or by targeting  time block separately.
   

    // Change time black background color depending on the current our past, present, and future.
console.log(moment().hour());










hourRow.addClass("row hour form")
hourCol.addClass("col-1")
textArea.addClass("col-10")
ServiceUIFrameContext.addClass("col-1 saveBtn")

// give each hour row an attr. called "hour-data". with value equal to "hours[i]"
textArea.attr("hour-data", parseInt(i + 9));
saveText.attr("hour-data", parseIntl(i + 9));

// add hour to variable to proper row
hourCol.text(hours[i])

// Add the Road to inner container then add each column to row
$("innerContainer").append(hourRow);
hourRow.append($(hourCol));
hourRow.append($(textArea));
hourRow.append($(saveText));
saveText.text("");

if (parseInt(textArea.attr("hour-data"))> currentHour) {
     textArea.addClass("future")
}

if (textArea.attr("hour-data") === currentHour) {
    textArea.addClass("present");
}

if (parseInt(textArea.attr("hour-data")) < currentHour) {
    textArea.addClass("past");
}




Turbo();