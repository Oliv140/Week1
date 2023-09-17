//--- filter, map and foreach ---//

//--- Opgave 1 ---//
const names = ['mikkel', "louis", 'philip', 'oliver', 'alexander', 'ib', 'bo'];

/* const newNames = names.filter(function(name) {
    return name.length <=3;
});

newNames.forEach(name => {
    console.log(name)
}); */

//------------------------------------------------------------------------------------------------------

//--- Opgave 2 ---//
/* const caps = names.map(function(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
});

console.log(caps) */


//--- Opgave 3 ---//
function generateList(names){
  const namesList = names.map(name => `<li>${name}</li>`);
  const unOrderedList = `<ul>${namesList.join('')}</ul>`;
  return unOrderedList;
};

const htmlList = generateList(names);
console.log(htmlList);