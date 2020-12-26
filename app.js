var userBirthday = document.querySelector("#birthday-input");
var userClick = document.querySelector("#user-click");
var userLuckyNumber = document.querySelector("#lucky-number");
var outputDiv = document.querySelector("#output-div");

var number = 0;
var result = [];
var userBirthdayValue = 0;
var userLuckNumber = 0;


function arrayBirthday(number) {

    while (number > 0) {
        result.push(number % 10);
        number = parseInt(number / 10)
    }

};

function arrayAdder(result) {

    for (i = 0; i < result.length; i++) {
        userBirthdayValue = userBirthdayValue + result[i]


    }
};


function clickHandler() {
    number = userBirthday.value
    arrayBirthday(number)
    arrayAdder(result)
    userLuckNumber = userLuckyNumber.value;
    if (userBirthdayValue % userLuckNumber === 0) {
        outputDiv.innerHTML = "<h4>You have a lucky Birthday</h4>"
    } else {
        outputDiv.innerHTML = "<h4>You do not  have a lucky Birthday</h4>"

    }


};





userClick.addEventListener("click", clickHandler);