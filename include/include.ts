/**
 * Created by olli on 16.10.13.
 */

module person {
    export interface HasName {
        name: string;
    }

    export function doIt() {

    }
}

module person {
    export interface HasName {
        age: number;
    }
}