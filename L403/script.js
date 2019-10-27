let students = [
    {
        id: 1,
        name: 'bacho'
    },
    {
        id: 2,
        name: 'nodo'
    },
    {
        id: 3,
        name: 'bacho'
    },
    {
        id: 4,
        name: 'nodo'
    },
    {
        id: 5,
        name: 'murtazi'
    }
];

function myList(variable) {
    let myArray = [];
    for (let x of variable) {
        if (myArray.indexOf(x.name) == -1) {
            myArray.push(x.name);
        }
    }
    return myArray;
}
console.log(myList(students));