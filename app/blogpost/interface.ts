interface EatThisConfig {
    name?: string;
    singleLine: boolean;
}

eatThis({
    name: 'Olli',
    singleLine: true
});


function eatThis(conf: EatThisConfig) {
    // ...
}
