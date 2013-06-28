class Greeter {
    private greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet():string {
        return "Hello, " + this.greeting;
    }
}

var greeter = new Greeter("world");

var button = document.createElement('button');
button.innerText = "Say Hello";
button.onclick = function() {
    alert(greeter.greet());
}

document.body.appendChild(button);
