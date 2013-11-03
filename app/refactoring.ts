interface HasName {
    name: string;
    age?: number;
}

var olli: HasName = {alter: 42, name: "Huhu"};

var sorted = sortByName([olli, {name: 'Oma'}]);
console.log(sorted);


function sortByName(a: HasName[]) {
    var result = a.slice(0);
    result.sort(function (x,y) {
        return x.name.localeCompare(y.name);
    });
    return result;
}
