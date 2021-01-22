// kilometerToMeter
function kilometerToMeter(km) {
    var num = parseFloat(km);
    //length input can be a float number.
    var metere = num * 1000;
    if (num < 0) {
        return num = metere * -1;
        //Length always has the positive value
    } else {
        return metere;
    }
}

// budgetCalculator (watch=50)(phone=100)(laptop=500)
function budgetCalculator(num1, num2, num3) {
    watch = parseInt(num1) * 50;
    //somthing like watch or phone we buy in 1,2,3 pices etc. not in 0.12 or something.
    phone = parseInt(num2) * 100;
    laptop = parseInt(num3) * 500;
    var total = watch + phone + laptop;
    return total;
}

// hotelCost (1-10=100; 11-20=80; >=21=50)
function hotelCost(days) {
    var cost = 0;
    //declaring variables with initial value
    if (days <= 10) {
        cost = days * 100;
    } else if (days <= 20) {
        var first10Days = 10 * 100;
        // 1st 10 days calculations
        var second10Days = (days - 10) * 80;
        cost = first10Days + second10Days;
    } else if (days >= 21) {
        first10Days = 10 * 100, second10Days = 10 * 80;
        //1st 10 days + 2nd days calculations
        var moreThan20 = (days - 20) * 50;
        cost = first10Days + second10Days + moreThan20;
    } return cost;
}

// megaFriend [friendArray] (max length name)
function megaFriend(names) {
    if (names.length < 1) {
        //checking the empty array
        console.log("The Array is empty");
    }
    var mega = names[0];
    for (var i = 0; i < names.length; i++) {
        var element = names[i];
        if (mega.length < element.length) {
            // checking the positions and comparing with the previous names for length,
            mega = element;
            //  if true replacing the mega(tmp) value.
        }
    } return mega;
}
var friendNames = ["Naim", "Ogy", "Mr.Rizo", "Tanjim", "NaimulAlam", "Abul"];
var megaNames = megaFriend(friendNames);

console.log(kilometerToMeter(-0.11)) //delete it before submiting
console.log(budgetCalculator(2, 2, 2)) //delete it before submiting
console.log(hotelCost(21)); //delete it before submiting
console.log(megaNames); //delete it before submiting
