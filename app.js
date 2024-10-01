const countDate = new Date("Jan 01, 2025 00:00:00").getTime();

var x = setInterval(() => {
    var now = new Date().getTime();
    var distance = countDate - now;
    if (distance != 0 && distance > 0) {
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('day').textContent = days;
        document.getElementById('hour').textContent = hours;
        document.getElementById('min').textContent = minutes;
        document.getElementById('sec').textContent = seconds;
    }
    else {
        document.getElementById('soon').textContent = 'NOW !!';
        clearInterval(x);
        alert('Happy New Year !!!');
    }
}, 1000);