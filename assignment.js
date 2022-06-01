/* // Problem 1 : anaToVori

function anaToVori(vori) {
    if (typeof vori != 'number') {
        return 'Please give number';
    }
    if (vori <= 0) {
        return 'Please diel positive number';
    }
    const ana = vori / 16;
    return ana;
}
const myAna = anaToVori(32);
console.log(myAna);


// Problem 2 : pandaCost

function pandaCost(singaraQuantity, somuchaQuantity, jilapeQuantity) {
    if (typeof singaraQuantity != 'number' && typeof somuchaQuantity != 'number' && typeof jilapeQuantity != 'number') {
        return 'Please diel only number';
    }
    if (singaraQuantity < 0 && somuchaQuantity < 0 && jilapeQuantity < 0) {
        return 'Please diel positive number';
    }
    const perSingaraPrice = 7;
    const perSomuchaPrice = 10;
    const perJilapePrice = 15;
    const costForSingaras = perSingaraPrice * singaraQuantity;
    const costForSomucha = perSomuchaPrice * somuchaQuantity;
    const costForJilape = perJilapePrice * jilapeQuantity;
    const totalCostForOrder = costForSingaras + costForSomucha + costForJilape;
    return totalCostForOrder;

}
const resultOfPandaCost = pandaCost(1, 1, 1);
console.log(resultOfPandaCost);


// Problem 3 : picnicBudget


function picnicBudget(howManyPeopleGoPicnic) {
    if (typeof howManyPeopleGoPicnic != 'number') {
        return 'Please give number';
    }
    if (howManyPeopleGoPicnic < 0) {
        return 'Please diel positive number';
    }
    const costForFrist100People = 5000;
    const costForSecond100People = 4000;
    const costForAfter200PlusePeople = 3000;
    if (howManyPeopleGoPicnic <= 100) {
        const costFrist100People = howManyPeopleGoPicnic * costForFrist100People;
        return costFrist100People;
    }
    else if (howManyPeopleGoPicnic <= 200) {
        const costFrist100People = 100 * costForFrist100People;
        const costForAfert100PlusePeople = howManyPeopleGoPicnic - 100;
        const costFor200People = costForAfert100PlusePeople * costForSecond100People;
        const totalCostFor200People = costFrist100People + costFor200People;
        return totalCostFor200People;
    }
    else {
        const costFrist100People = 100 * costForFrist100People;
        const costSecod100People = 100 * costForSecond100People;
        const costForAfert200Pluse = howManyPeopleGoPicnic - 200;
        const totalCostMoreThan200People = costForAfert200Pluse * costForAfter200PlusePeople;
        const totalCostForPeople = costFrist100People + costSecod100People + totalCostMoreThan200People;
        return totalCostForPeople;
    }
}

const myPicnicPeople = picnicBudget(201);
console.log(myPicnicPeople); */


// Problem 4 : oddFriend
/*
const friendArray = ["agdum", "bagdum", "chagdum", "lagdum", "jagdum", "magdum"];

function oddFriend(friendArray) {
    for (let i = 0; i < friendArray.length; i++) {
        if (friendArray[i].length % 2 != 0) {
            return friendArray[i];
        }
    }
}
const myFriend = oddFriend(friendArray);
console.log(myFriend);
 */

// const friendArray = ["agdum", "bagdum", "chagdum", "lagdum", "jagdum", "magdum",];

// function oddFriend(friendArray) {
//     for (let i = 0; i < friendArray.length; i++) {
//         if (friendArray[i].length % 2 != 0) {
//             return friendArray[i];
//         }
//     }
// }
// const myFriend = oddFriend(friendArray);
// console.log(myFriend);

// const friendArray = ["agdum", "bagdum", "chagdum", "lagdum", "jagdum", "magdum",];

function oddFriend(friendArray) {
    if (friendArray.length % 2 != 0) {
        return friendArray;
    }
}
const myFriend = friendArray.filter(oddFriend);
console.log(myFriend);



