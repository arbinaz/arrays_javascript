// array concepts
// Array Declaration
var animals=['Lion','Monkey','Tiger','Elephant','Deer','Wolf','Iglu','Dog','cat']
// To Know the length of the aray
console.log(animals.length);
console.log(animals[5])
// To add an element in the end of an array
animals.push('Snakes');
console.log(animals)
// To remove an element from the end of an array
animals.pop();
console.log(animals);
// To remove an element from the begining of an array
animals.shift();
console.log(animals);
// To add an element in the begining of an array 
animals.unshift('Lion');
console.log(animals);
// To add an element at any position in an array
animals.splice(2,0,'Snakes')
console.log(animals);
// To fring the elements of an array using for loop
for(i=0;i<=animals.length-1;i++)
{
    console.log(animals[i]);
}
// To reverse an array
var colors=['Black','Red','Yellow','Blue']
colors.reverse();
console.log(colors)
// To merge two arrays
var cars=['Suzuki','Merscedes','Nano','Scorpio']
var merge=colors.concat(cars);
console.log(merge);