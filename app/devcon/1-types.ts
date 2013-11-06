var name: string = "Olli";

function stuff(p1: number, p2: boolean, p3: string): string {
    if (p2) {
        return p3;
    } else {
        return "" + p1;
    }
}

stuff(1, true, "Aha");