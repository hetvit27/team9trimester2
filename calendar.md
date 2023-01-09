## FRQ 1
<p id="test"></p>

<script>

function getYear(){
    let inputYear = document.getElementById("inputYear").value;
    return inputYear;
}

function isLeapYear(yearparam) {
    
    result = document.getElementById("isLeapYearResult");

    // Fetch data from API
    fetch('https://hetvitrivedi.tk/api/calendar/isLeapYear/' + yearparam)
    .then(response => response.json())
    .then(data => {

        console.log(data);

        result.innerHTML = "Is " + yearparam + " a leap year: " + data.isLeapYear;

    })
}

function getYear2(){
    let inputYear1 = document.getElementById("inputYear1").value;
    return inputYear1;
}

function firstDayOfYear(year1param) {
    
    result = document.getElementById("firstDayOfYearResult");

    // Fetch data from API
    fetch('https://hetvitrivedi.tk/api/calendar/firstDayOfYear/' + year1param)
    .then(response => response.json())
    .then(data => {

        console.log(data);

        result.innerHTML = "The first day of " + year1param is + data.firstDayOfYear;

    })
}

</script>

### Check if a Year is a Leap Year
<input id="inputYear" placeholder="Input a Year">
<button onclick="isLeapYear(getYear())">Submit</button>
<p id="isLeapYearResult"></p>

### Check what the first day of the year is
<input id="inputYear1" placeholder="Input a Year">
<button onclick="firstDayOfYear(getYear2())">Submit</button>
<p id="firstDayOfYearResult"></p>