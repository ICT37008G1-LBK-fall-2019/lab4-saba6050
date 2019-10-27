let students = [{
        id: 1,
        name: 'bacho'
},

    {
        id: 2,
        name: 'nodo'
    }]

function countName(s, n) {
    let nameCount = 0;
    for (let x of s) {
        if (x.name === n) {
            nameCount++;
        }
    }
    return nameCount;

}
let x = countName(students, 'bacho');
console.log(x)
console.log(countName(students, 'nodo'));
console.log(countName(students, 'murtazi'));