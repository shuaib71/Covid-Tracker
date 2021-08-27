fetch('https://api.covid19api.com/summary')
.then((res) => res.json())
.then((data) => {
    // console.log(res.Global);


document.getElementById("c1").innerText = "+" + data.Global.NewConfirmed;
document.getElementById("c2").innerText = "+" + data.Global.NewRecovered;
document.getElementById("c3").innerText = "+" + data.Global.NewDeaths;
document.getElementById("c4").innerText = new Date(
    data.Global.Date
).toDateString();
 
document.getElementById("t1").innerText = "+" + data.Global.TotalConfirmed;
document.getElementById("t2").innerText = "+" + data.Global.TotalRecovered;
document.getElementById("t3").innerText = "+" + data.Global.TotalDeaths;
document.getElementById("t4").innerText = new Date(
    data.Global.Date
).toDateString();
});