const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')


const formatNum = num => num < 10 && num > -10 ? `0${num}` : num;



const interval = setInterval(()=>{
    let date = new Date()
    let bekislam = new Date(2024, 9, 16, 16, 5)
    let difference = bekislam.getTime() - date.getTime()

    if (difference <= 0){
        clearInterval(interval)
        days.textContent = '00'
        hours.textContent = '00'
        minutes.textContent = '00'
        seconds.textContent = '00'

        const birthday = document.createElement('h1');
        birthday.textContent = 'С Днём Рождения!';
        document.body.appendChild(birthday);
        
        return
        
    }

    days.textContent = formatNum(Math.floor(difference  / 1000 / 60 / 60 / 24))
    hours.textContent = formatNum(Math.floor((difference / 1000 / 60 / 60 ) % 24));
    minutes.textContent = formatNum(Math.floor((difference / 1000 / 60 ) % 60));
    seconds.textContent = formatNum(Math.floor((difference  / 1000) % 60))
}, 1000)


 