let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');

// one.addEventListener('mouseover', changeOne());
function changeOne() {
    one.style.backgroundColor = "hsl(25, 97%, 53%)";
    one.style.color = "white";
}

// one.addEventListener('mouseout', function () {
//     normal(one);
// })

// function normal(x) {
//     x.style.backgroundColor = "rgba(38, 47, 56, 255)";
//     x.style.color = "#6c737c";
// }

// two.addEventListener('mouseover', function () {
//     changeOne();
//     changeTwo();
// });

// two.addEventListener('mouseout', function () {
//     normal(one);
//     normal(two);

// });

function changeTwo() {
    two.style.backgroundColor = "hsl(25, 97%, 53%)";
    two.style.color = "white";
}

// three.addEventListener('mouseover', function () {
//     changeOne();
//     changeTwo();
//     changeThree();
// });

// three.addEventListener('mouseout', function () {
//     normal(one);
//     normal(two);
//     normal(three);

// });


function changeThree() {
    three.style.backgroundColor = "hsl(25, 97%, 53%)";
    three.style.color = "white";
}

// four.addEventListener('mouseover', function () {
//     changeOne();
//     changeTwo();
//     changeThree();
//     changeFour();
// });


// four.addEventListener('mouseout', function () {
//     normal(one);
//     normal(two);
//     normal(three);
//     normal(four);
// });

function changeFour() {
    four.style.backgroundColor = "hsl(25, 97%, 53%)";
    four.style.color = "white";
}

// five.addEventListener('mouseover', function () {
//     changeOne();
//     changeTwo();
//     changeThree();
//     changeFour();
//     changeFive();
// });

// five.addEventListener('mouseout', function () {
//     normal(one);
//     normal(two);
//     normal(three);
//     normal(four);
//     normal(five);
// });


function changeFive() {
    five.style.backgroundColor = "hsl(25, 97%, 53%)";
    five.style.color = "white";
}

let num = 0;
one.addEventListener('click', function () {
    changeOne();
    num = 1;
});

two.addEventListener('click', function () {
    changeOne();
    changeTwo();
    num = 2;
});

three.addEventListener('click', function () {
    changeOne();
    changeTwo();
    changeThree();
    num = 3;
});

four.addEventListener('click', function () {
    changeOne();
    changeTwo();
    changeThree();
    changeFour();
    num = 4;
});

five.addEventListener('click', function () {
    changeOne();
    changeTwo();
    changeThree();
    changeFour();
    changeFive();
    num = 5;
});

