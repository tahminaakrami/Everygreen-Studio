

const text =
    "We create beautiful digital experiences with creativity and passion.";

let textIndex = 0;


function typeWriter() {

    if (textIndex < text.length) {

        document.getElementById("typing-text").innerHTML +=
            text.charAt(textIndex);

        textIndex++;

        setTimeout(typeWriter, 60);

    }

}


typeWriter();

/*
   Countdown will finish on:
   January 1, 2027
*/

const targetDate =
    new Date("January 1, 2027 00:00:00").getTime();


function updateCountdown() {


    const now =
        new Date().getTime();


    const difference =
        targetDate - now;



    if (difference <= 0) {

        document.getElementById("days").innerHTML = "00";

        document.getElementById("hours").innerHTML = "00";

        document.getElementById("minutes").innerHTML = "00";

        document.getElementById("seconds").innerHTML = "00";

        return;

    }



    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference %
                (1000 * 60 * 60 * 24))
            /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (difference %
                (1000 * 60 * 60))
            /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (difference %
                (1000 * 60))
            /
            1000
        );



    document.getElementById("days").innerHTML =
        String(days).padStart(2, "0");


    document.getElementById("hours").innerHTML =
        String(hours).padStart(2, "0");


    document.getElementById("minutes").innerHTML =
        String(minutes).padStart(2, "0");


    document.getElementById("seconds").innerHTML =
        String(seconds).padStart(2, "0");

}


updateCountdown();


setInterval(updateCountdown, 1000);