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

function getDay(){
    let inputYear1 = document.getElementById("inputYear1").value;
    return inputYear1;
}

function firstDayOfYear(year1param) {
    
    result = document.getElementById("firstDayOfYerResult");

    // Fetch data from API
    fetch('https://akhilcodingsociety.tk/api/calendar/firstDayOfYear/' + year1param)
    .then(response => response.json())
    .then(data => {

        console.log(data);

        result.innerHTML = "First day of " + year1param + ":" + data.firstDayOfYear;

    })
}

</script>

### Is this year a leap year? Check now!
<input id="inputYear" placeholder="Input a Year">
<button onclick="isLeapYear(getYear())">Submit</button>
<p id="isLeapYearResult"></p>


### What is the first day of the year? Check now!
<input id="inputYear1" placeholder="Input a Year">
<button onclick="firstDayOfYear(getDay())">Submit</button>
<p id="firstDayOfYearResult"></p>