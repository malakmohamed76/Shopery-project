



// ============timer=============
function startTimer() {

    let days = parseInt(document.getElementById("days").textContent);
    let hours = parseInt(document.getElementById("hours").textContent);
    let minutes = parseInt(document.getElementById("minutes").textContent);
    let seconds = parseInt(document.getElementById("seconds").textContent);

    setInterval(() => {

        if (seconds > 0) {
            seconds--;
        } else {
            seconds = 59;

            if (minutes > 0) {
                minutes--;
            } else {
                minutes = 59;

                if (hours > 0) {
                    hours--;
                } else {
                    hours = 23;

                    if (days > 0) {
                        days--;
                    } else {
                        clearInterval();
                    }
                }
            }
        }

        document.getElementById("days").textContent = String(days).padStart(2, "0");
        document.getElementById("hours").textContent = String(hours).padStart(2, "0");
        document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
        document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");

    }, 1000);
}

startTimer();