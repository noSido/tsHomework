import {AbstractHuman} from "./task3";

class Earthlings extends AbstractHuman{
    override run(human: string) {
        console.log(`${human} can run`)
    }
    override swim(human: string) {
        console.log(`${human} can swim`)
    }
}

const earthlings = new Earthlings()

earthlings.run("Earthling");
earthlings.swim("Earthling");
earthlings.fly("Earthling");