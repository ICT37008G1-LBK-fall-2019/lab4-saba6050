let students = [
    {
        id: 1,
        name: 'bacho',
        gpa: 2.8
    },
    {
        id: 2,
        name: 'nodo',
        gpa: 1.1
    },
    {
        id: 3,
        name: 'bondo',
        gpa: 2.3
    },
    {
        id: 4,
        name: 'jumberi',
        gpa: 1.5
    },
    {
        id: 5,
        name: 'murtazi',
        gpa: 2.1
    }
];

function myList(array, mingpa = 2) {
    let myArray = array.filter(x => x.gpa > mingpa).map((x) => x.gpa);
    let sum = 0;
    for (var i = 0; i < myArray.length; i++) {
        sum += myArray[i];

    }
    let avg = sum / (myArray.length > 0 ? myArray.length : 1);

    return avg;
}

console.log(myList(students, 1));
