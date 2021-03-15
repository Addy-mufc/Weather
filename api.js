var cityname;
async function loadAPI()
{
    cityname=document.getElementById("city").value;
const url="http://api.openweathermap.org/data/2.5/weather?q="+cityname+"&appid=0c83f1718794837c24a03ae40c8e8967&units=metric";

    const response = await fetch(url);
    const data = await response.json();
    const {temp_min,temp_max}=data.main;
    document.getElementById('max').textContent=temp_max;
    document.getElementById('min').textContent=temp_min;
}

async function graph()
{
    
    const api="http://api.openweathermap.org/data/2.5/forecast?q="+cityname+"&appid=0c83f1718794837c24a03ae40c8e8967&units=metric"
    let res = await fetch(api);
    let data1 = await res.json();
    let x=data1.list[1];
        var tem1=x.main.temp;
        var dt1=x.dt_txt;
         x=data1.list[9];
        var tem2=x.main.temp;
        var dt2=x.dt_txt;
         x=data1.list[17];
        var tem3=x.main.temp;
        var dt3=x.dt_txt;
         x=data1.list[25];
        var tem4=x.main.temp;
        var dt4=x.dt_txt;
         x=data1.list[33];
        var tem5=x.main.temp;
        var dt5=x.dt_txt;
     console.log(tem1);
    // console.log(x.main.temp);
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [dt1,dt2,dt3,dt4,dt5],
            datasets: [{
                label: 'Temperature in '+cityname,
                data: [tem1,tem2,tem3,tem4,tem5],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

