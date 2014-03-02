// Generics in its least complicated form

interface Pair<T1, T2> {
    name: T1;
    singleLine?: T2;
}

function eatThis(conf:Pair<string, boolean>) {
    console.log(conf.name);
    if (conf.singleLine) {
        console.log('----');
    }

}

eatThis({
    name: 'Olli',
    singleLine: true
});

interface A {
    a: string;
}

interface B extends A {
    b: string;
}

interface C {
    c: string;
}

interface List<T> {
    add(T): void;
}

interface ListC {
    add(C): void;
}
interface ListB {
    add(B): void;
}

var a: A;
var b: B;

// sure
a = b;

// nope
//b = a;

var listA: List<A>;
var listB: ListB;
var listC: ListC;

listA = listB;

listB = listA;

listC = listA;

listC = listB;

