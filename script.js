// Challenge 1: Create an Array "myFavSuperheroes" and add all your favourite superhero names as an array element (Please note, you should add atleast 5 names).
var myFavSuperheros = [
  'Hanuman',
  'Iron man',
  'Captain America',
  'Hulk',
  'Thor',
];

// Challenge 2: Print (in console) the first superheroes name in your array "myFavSuperheroes".
console.log(myFavSuperheros[0]);

// Challenge 3: Print (in console) the length of the array "myFavSuperheroes".
console.log(myFavSuperheros.length);

// Challenge 4: Change the second last element in the Array "myFavSuperheroes" to your name and print the second last element in the array "myFavSuperheroes".
myFavSuperheros[myFavSuperheros.length - 2] = 'Surendher';

// Challenge 5: Add your friend's name (friend 1) to the array "myFavSuperheroes" at the start without using the splice method.
myFavSuperheros.splice(0, 0, 'friend1');

// Challenge 6: Add your friend's name (friend 2) to the array "myFavSuperheroes" at the end without using the splice method.
myFavSuperheros[myFavSuperheros.length + 0] = 'friend2'; //method1
myFavSuperheros.push('friend2'); //method2

// Challenge 7: Remove your friend's name (friend1) in the array "myFavSuperheroes" without using the splice method.
myFavSuperheros.shift();

// Challenge 8: Remove your friend's name (friend2) in the array "myFavSuperheroes" without using the splice method.
myFavSuperheros.pop();

// Challenge 9: Add your friend's name (friend 1) to the array "myFavSuperheroes" at the 3rd position without removing any element using the splice method.
myFavSuperheros.splice(3, 0, 'friend1');

// Challenge 10:  Remove the 4th and 5th element in the array "myFavSuperheroes",  and add your friend's name (friend 2) at the 4th position using the splice method.
myFavSuperheros.splice(3, 2, 'friend2');

// Challenge 11:  Create a nested array "superheroUniverse" and add 2 ararys to it, where first array should contain the name of the Marvel superheroes and second ararys should contain the name of the DC superhereoes.
var superheroUniverse = [
  ['Spiderman', 'Ironman', 'Captain', 'Doctorstrange'],
  ['Supeman', 'aquaman', 'Batman', 'Wonder woman'],
];

// Challenge 12: Print one of the Marvel superhero name from the array "superheroUniverse".
superheroUniverse[0][0];

// Challenge 13: Print one of the DC superhero name from the array "superheroUniverse".
superheroUniverse[1][0];
