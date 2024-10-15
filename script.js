const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')


const formatNum = num => num < 10 && num > -10 ? `0${num}` : num;



setInterval(()=>{
    let date = new Date()
    let bekislam = new Date(2024, 9, 16, 0, 0)
    let difference = bekislam.getTime() - date.getTime()

    if (difference <= 0) {
        document.body.innerHTML = '<h1 style="text-align: center; margin-top:250px; font-size: 100px; color: white;">С Днём Рождения!</h1>';
        return;
    }

    days.textContent = formatNum(Math.floor(difference  / 1000 / 60 / 60 / 24))
    hours.textContent = formatNum(Math.floor((difference / 1000 / 60 / 60 ) % 24));
    minutes.textContent = formatNum(Math.floor((difference / 1000 / 60 ) % 60));
    seconds.textContent = formatNum(Math.floor((difference  / 1000) % 60))
}, 1000)


 