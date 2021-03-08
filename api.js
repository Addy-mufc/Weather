async function loadAPI()
{
    var cityname=document.getElementById("city").value;
console.log(cityname);
const url="http://api.openweathermap.org/data/2.5/weather?q="+cityname+"&appid=0c83f1718794837c24a03ae40c8e8967&units=metric";

    const response = await fetch(url);
    const data = await response.json();
    const {temp_min,temp_max}=data.main;
    document.getElementById('max').textContent=temp_max;
    document.getElementById('min').textContent=temp_min;
}