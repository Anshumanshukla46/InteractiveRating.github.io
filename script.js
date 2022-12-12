
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');

function changeOne() {
    one.style.backgroundColor = "hsl(25, 97%, 53%)";
    one.style.color = "white";

    normal(two);
    normal(three);
    normal(four);
    normal(five);
}

function normal(x) {
    x.style.backgroundColor = "#263039";
    x.style.color = "#676f7a";
}

function changeTwo() {
    two.style.backgroundColor = "hsl(25, 97%, 53%)";
    two.style.color = "white";

    normal(three);
    normal(four);
    normal(five);
}

function changeThree() {
    three.style.backgroundColor = "hsl(25, 97%, 53%)";
    three.style.color = "white";

    normal(four);
    normal(five);
}


function changeFour() {
    four.style.backgroundColor = "hsl(25, 97%, 53%)";
    four.style.color = "white";
    normal(five);
}


function changeFive() {
    five.style.backgroundColor = "hsl(25, 97%, 53%)";
    five.style.color = "white";
}

one.addEventListener('click', function () {
    changeOne();
});

two.addEventListener('click', function () {
    changeOne();
    changeTwo();
});

three.addEventListener('click', function () {
    changeOne();
    changeTwo();
    changeThree();
});

four.addEventListener('click', function () {
    changeOne();
    changeTwo();
    changeThree();
    changeFour();
});

five.addEventListener('click', function () {
    changeOne();
    changeTwo();
    changeThree();
    changeFour();
    changeFive();
});
