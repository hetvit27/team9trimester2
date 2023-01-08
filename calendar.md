<h1>Calendar</h1>

<button onclick="isLeapYear()">Leap Year</button>
<button onclick="firstDayOfYear()">First Day of Year</button>

<div id="year">
</div>



<script>
 
  function isLeapYear() {

    <input type="number" id="yearInput"></input>
    <button onclick="firstDayOfYear(document.getElementById('yearInput').value)">Send</button>

    document.getElementById("year").innerHTML = "";

    let title = document.createElement("p");
    title.appendChild(document.createTextNode("Year:"));
    document.getElementById("yearCalendar").appendChild(title);

    let yearText = document.createElement("INPUT");
    yearText.setAttribute("id", "yearTextBoxId");
    yearText.setAttribute("type", "text"); 
    document.getElementById("yearCalendar").appendChild(yearText);

    let yearFactsButton = document.createElement("BUTTON");
    //yearFactsButton.setAttribute("id", "yearFactsButtonId");
    yearFactsButton.appendChild(document.createTextNode("Get facts")); 
    // API stuff
    yearFactsButton.onclick = function() {
      document.getElementById("yearCalendarHTMLInfo").innerHTML = "";

      let yearInput = document.getElementById("yearTextBoxId").value;

      const urlStart = "https://hetvitrivedi.tk/api/calendar/";
      let url = urlStart + "isLeapYear/" + yearInput;

      console.log(url); 

      fetch(url)
        .then(res => res.json())
        .then(data => {
          console.log(data);

          let yearInfo = document.createElement("p");
          yearInfo.appendChild(document.createTextNode("Leap Year? "));
          yearInfo.appendChild(document.createTextNode(data.isLeapYear));
          document.getElementById("yearCalendarHTMLInfo").appendChild(yearInfo);
        
        })

          // 2nd API endpoint
          url = urlStart + "firstDayOfYear/" + yearInput;

          console.log(url); 

          fetch(url)
            .then(res => res.json())
            .then(data => {
              console.log(data);
              
              let yearInfo = document.createElement("p");
              yearInfo.appendChild(document.createTextNode("First day of year: "));
              yearInfo.appendChild(document.createTextNode(data.firstDayOfYear));
              document.getElementById("yearCalendarHTMLInfo").appendChild(yearInfo);
            
            })
    };
    // add button to HTML
    document.getElementById("yearCalendar").appendChild(yearFactsButton);


    
  }    
  
</script>