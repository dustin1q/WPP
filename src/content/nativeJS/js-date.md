---

title: Javascript Date Object
cat: native-js
image: image
desc: Lets take a MOMENT to leard the native Javascript Date object. The Date() constructor can be called with two or more arguments, in which case they are interpreted as the year, month, day, hour, minute, second, and millisecond, respectively, in local time. Date.UTC() works similarly, but it interprets the components as UTC time and also accepts a single argument representing the year. The example below demonstrated how you have perform operations with the date object and how to format it. 
---


<html-code>
<label>Todays date:</label>
<span id="todaysDate"></span>
<label>Days To add:</label>
<span id="days"></span>
<label>New date:</label>
<span id="newDate"></span>
</html-code>
<css-code>
body{
    display: flex;
    flex-direction: column;
}
label{
    font-weight: bold;
}
</css-code>

<js-code>
// Get page elements for display. 
const elTodaysDate = document.querySelector("#todaysDate");
const elDays = document.querySelector("#days");
const elNewDate = document.querySelector("#newDate");

// Function to Add days to current date
function addDays(date, days) {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + days);
    return newDate;
}

// Get the current date
const todayDate = new Date();
// Number of days that we want to add to the current date
const days = 7;
// Function call to add days
const newDate = addDays(todayDate, days);
elTodaysDate.textContent = todayDate;
elDays.textContent = days;
elNewDate.textContent = newDate;

//format Date
let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
//elNewDate.textContent = newDate.toLocaleDateString("en-US"); // 9/17/2016
//elNewDate.textContent = newDate.toLocaleDateString("en-US", options); // Saturday, September 17, 2016
//elNewDate.textContent = newDate.toLocaleDateString("hi-IN", options); // शनिवार, 17 सितंबर 2016

</js-code>

There are many ways to format a date as a string. The JavaScript specification only specifies one format to be universally supported: the date time string format, a simplification of the ISO 8601 calendar date extended format. 

1. YYYY is the year, with four digits (0000 to 9999), or as an expanded year of + or - followed by six digits. The sign is required for expanded years. -000000 is explicitly disallowed as a valid year.
1. MM is the month, with two digits (01 to 12). Defaults to 01.
DD is the day of the month, with two digits (01 to 31). Defaults to 01.
1. T is a literal character, which indicates the beginning of the time part of the string. The T is required when specifying the time part.
1. HH is the hour, with two digits (00 to 23). As a special case, 24:00:00 is allowed, and is interpreted as midnight at the beginning of the next day. Defaults to 00.
1. mm is the minute, with two digits (00 to 59). Defaults to 00.
1. ss is the second, with two digits (00 to 59). Defaults to 00.
1. sss is the millisecond, with three digits (000 to 999). Defaults to 000.
1. Z is the timezone offset, which can either be the literal character Z (indicating UTC), or + or - followed by HH:mm, the offset in hours and minutes from UTC.

## Various components can be omitted, so the following are all valid:

Date-only form: YYYY, YYYY-MM, YYYY-MM-DD
Date-time form: one of the above date-only forms, followed by T, followed by HH:mm, HH:mm:ss, or HH:mm:ss.sss. Each combination can be followed by a time zone offset.

For More on Dates[ see ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date "JavaScript Date objects")