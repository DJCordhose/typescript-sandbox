// Down casts are possible if you ask for them

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

var eater: Object = new Eater('Olli');

(<Eater>eater).eatThis({
    singleLine: true
});

