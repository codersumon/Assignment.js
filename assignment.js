/******************************
 * feetToMile
 *******************************/

function feetToMile(mile) {
    var feet = mile * 0.000189394;
    return feet;
}
// var result = feetToMile(5280);
// console.log(result);


/******************************
 * woodCalculator
 *******************************/

function woodCalculator(chair, table, cot) {
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var cotCount = cot * 5;
    var totalItem = chairCount + tableCount + cotCount;
    return totalItem;
}
// var totalQbikWood = woodCalculator(5, 1, 3);
// console.log(totalQbikWood);



/**
 * brickCalculator
 * */


// tinyFriend
function tinyFriend(name) {
    var smallest = name[0];
    for (var i = 0; i < name.length; i++) {
        var element = Math.min.name[i];
        if (element < smallest) {
            smallest = element;
        }
    }
    return smallest;
}

// var smallestName = tinyFriend(['Elen', 'Jack Ma', 'Mark Jukarbarg', 'Bil gates']);
// console.log(smallestName);