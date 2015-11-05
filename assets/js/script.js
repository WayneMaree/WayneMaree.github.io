var port = 400,
    skill = 150,
    i = 0,
    scrolldelay = "";

function Mail() {
    window.open('mailto:wayneericmaree@gmail.com');
}

function portScroll() {
    i = i + 50;
    if(i === port) {
        i = 0;
        window.clearInterval();
    } else {
        window.scrollBy(0,50); // horizontal and vertical scroll increments
        scrolldelay = setTimeout('portScroll()',10); // scrolls every 100 milliseconds
    }
}

function skillScroll() {
    i = i + 50;
    if(i === skill) {
        i = 0;
        window.clearInterval();
    } else {
        window.scrollBy(0,50); // horizontal and vertical scroll increments
        scrolldelay = setTimeout('skillScroll()',10); // scrolls every 100 milliseconds
    }
}
