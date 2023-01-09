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

function firstDayOfYear(yearparam) {
    
    result1 = document.getElementById("firstDayOfYerResult");

    // Fetch data from API
    fetch('https://akhilcodingsociety.tk/api/calendar/firstDayOfYear/' + yearparam)
    .then(response => response.json())
    .then(data => {

        console.log(data);

        result1.innerHTML = "First day of " + yearparam + ":" + data.firstDayOfYear;

    })
}

</script>

### Is this year a leap year? Check now!
<input id="inputYear" placeholder="Input a Year">
<button onclick="isLeapYear(getYear())">Submit</button>
<button onclick="firstDayOfYear(getYear())">Submit</button>
<p id="isLeapYearResult"></p>
<p id="firstDayOfYearResult"></p>
