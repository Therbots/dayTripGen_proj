let entertainment = ['Comedy Club', 'Concert', 'Monster Truck Rally', 'Sports Game', 'Spa'];
let destination = ['Dallas', 'Austin', 'San Antonio', 'Houston', 'El Paso'];
let transportation = ['Bus', 'Car', 'Train', 'Plane'];
let restaurant =  ['Mexican Restaurant', 'Asian Restaurant', 'American Restaurant', 'Italian Restaurant', 'Steak House'];
function getRandomElement(array){
    return array[Math.floor(Math.random() * array.length)];
}
let chosenDestination = getRandomElement(destination);
let chosenTransportation = getRandomElement(transportation);
let chosenRestaurant = getRandomElement(restaurant);
let chosenEntertainment = getRandomElement(entertainment);
console.log('You will be going to ' + chosenDestination + ', using a ' + chosenTransportation + ', eating at a ' + chosenRestaurant + ' and enjoying a ' + chosenEntertainment + '!');
function confirmTrip (array) {
    let result;
    let confirm = prompt('Are you happy with your choice? Please answer "yes" or "no"!');
    while (confirm !== 'yes') {
        result = getRandomElement(array);
        console.log(result);
        confirm = prompt('Are you happy with your choice? Please answer "yes" or "no"!');   
    }
    return result;
}
let newDestination = confirmTrip(destination) || chosenDestination;
let newTransportation = confirmTrip(transportation) || chosenTransportation;
let newRestaurant = confirmTrip(restaurant) || chosenRestaurant;
let newEntertainment = confirmTrip(entertainment) || chosenEntertainment;
console.log('Your trip is confirmed to ' + newDestination + ', using a ' + newTransportation + ', eating at a ' + newRestaurant + ' and enjoying a ' + newEntertainment + '!');