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

function myList(array) {
    let myArray = [];
    let map = {};
    let num = 0;
    for (let x of array) {


        if (map[x.name] == null) {
            map[x.name] = 0;

        }
        map[x.name] += 1;
    }


    return map;
}

console.log(myList(students));
