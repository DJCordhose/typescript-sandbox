/**
 * Created with IntelliJ IDEA.
 * User: person
 * Date: 06.07.13
 * Time: 10:53
 * To change this template use File | Settings | File Templates.
 */

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
