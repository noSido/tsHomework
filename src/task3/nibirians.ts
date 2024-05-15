import {AbstractHuman} from "./task3";
class Nibirians extends AbstractHuman{
    override run(human: string) {
        console.log(`${human} can run`)
    }
}

const nibirians = new Nibirians()

nibirians.run("Nibearians");