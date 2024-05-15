export interface CanRun {
    run(el: string): void;
}

export interface CanSwim {
    swim(el: string): void;
}

export interface CanFly {
    fly(el: string): void;
}

export abstract class AbstractHuman implements CanRun, CanSwim, CanFly {
    fly(human: string): void {
        console.log(`${human} can't fly`) ;
    }

    run(human: string): void {
        console.log(`${human} can't run`) ;
    }

    swim(human: string): void {
        console.log(`${human} can't swim`) ;
    }
}



