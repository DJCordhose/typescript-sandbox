// Even if not declared the TypeScript compiler can infer types

interface EatThisConfig {
    singleLine?: boolean;
}

class Eater {
    constructor(private name: string) {
    }
    eatThis(conf: EatThisConfig) {
        console.log(this.name);
        if (conf.singleLine) {
            console.log('----');
        }
    }
}

var eater = new Eater('Olli');
eater.noWay();

