module person {
    export interface HasName {
        name: string;
    }

    export function doIt(): void {
        console.log("Hello, world!");
    }
}

module person {
    export interface HasName {
        age: number;
    }
}