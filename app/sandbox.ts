var array = [1,2,3];

array.forEach(function(e) {
    console.log(e);
});

var filtered = array.filter(function(e) {
    return e > 3;
});
console.log(filtered);
