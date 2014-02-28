// TypeScript supports declared types, allows for static analysis on types

function eatThis(conf: {name: string; singleLine?: boolean}) {
    console.log(conf.name);
    if (conf.singleLine) {
        console.log('----');
    }

}

eatThis({
    name: 'Olli',
    singleLine: true
});

eatThis({
   name: 'Olli',
    singleLine: 10
});
