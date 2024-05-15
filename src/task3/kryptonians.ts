import {AbstractHuman} from "./task3";
class Kryptonians extends AbstractHuman{
    override run(human: string) {
        console.log(`${human} can run`)
    }
    override fly(human: string) {
        console.log(`${human} can fly`)
    }
    override swim(human: string) {
        console.log(`${human} can swim`)
    }
}

const kryptonians = new Kryptonians()

kryptonians.swim("Kryptonians");
kryptonians.run("Kryptonians");
kryptonians.fly("Kryptonians");