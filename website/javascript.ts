function Greeter(greeting) {
    this.greeting = greeting;
}

Greeter.prototype.greet = function(): string {
    return "Hello, " + this.greeting;
}

var greeter = new Greeter({message: "world"});


document.createElement('oma');
var button = document.createElement('button');
button.innerText = "Say Hello";
button.onclick = function() {
    alert(greeter.greet());
};

document.body.appendChild(button);
