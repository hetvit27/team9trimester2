<html>
  <head>
    <meta charset="utf-8" />
    <title>F1 Races</title>
    <meta name="description" content="F1 Races and their Information." />
    <style>
      table.center {
        margin-left: auto;
        margin-right: auto;
      }
    </style>
  </head>
    <h1 style="text-align: center; font-size: 50px">
      F1 Races
    </h1>
    <table id= "raceTable" class="races" border="1" style="position: absolute; top: 100%;left: -15%;">
      <tr>
        <th>Date (year,month,day)</th>
        <th>Round</th>
        <th>Season</th>
        <th>Race Name</th>
        <th>Circuit Name</th>
        <th>Country</th>
        <th>Locality</th>
      </tr>
    </table>
    <script type="text/javascript">
      const races = document.querySelector(".races");
      // https://f1-backend.aadit.dev/api/race/races?year=2021
      fetch("https://f1-backend.aadit.dev/api/race/races/" + year)
        .then((data) => data.json())
        .then((data) => {
          console.log(data);
          data.MRData.RaceTable.Races.forEach((data) => {
            races.innerHTML += `
        <tr>
          <td>${data.date}</td>
            <td>${data.round}</td>
            <td>${data.season}</td>
            <td>${data.raceName}</td>
            <td>${data.Circuit.circuitName}</td>
            <td>${data.Circuit.Location.country}</td>
            <td>${data.Circuit.Location.locality}</td>
        </tr>`;
          });
        });
    </script>
    <style type="text/css">
      @import url("https://rsms.me/inter/inter.css");
      @import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap");
      * {
        font-family: "Inter", sans-serif !important;
      }
      .races {
        margin-right: auto;
        margin-left: auto;
        padding: 0;
        columns: 3;
        font-size: 20px;
      }
      img {
        width: 800px;
      }
      ul {
        -webkit-column-count: 3;
        -moz-column-count: 3;
        column-count: 3;
      }
      table {
        color: black
        margin-left: auto;
        margin-right: auto;
        width: 90%;
        text-align: center;
      }
      table.center {
  margin-left: auto;
  margin-right: auto;
      }
    </style>

  <style>
  .table {
  color: red;
  padding: 16px;
  font-size: 16px;
  border: 1px solid black;
  cursor: pointer;
  background-repeat: no-repeat;
  width: 9.5em;
  height: 15%;
}
</style>
</html>