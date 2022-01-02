setInterval(() => {
    const date = new Date();
    const htime = date.getHours();
    const mtime = date.getMinutes();
    const stime = date.getSeconds();

    const hrotation = 30*htime + mtime/2;
    const mrotation = 6*mtime;
    const srotation = 6*stime;

    const hours = document.getElementById('hour');
    const minutes = document.getElementById('minute');
    const seconds = document.getElementById('second');

    hours.style.transform = `rotate(${hrotation}deg)`;
    minutes.style.transform = `rotate(${mrotation}deg)`;
    seconds.style.transform = `rotate(${srotation}deg)`;
}, 1000)