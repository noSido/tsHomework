export class Job {
    private role: string;

    get salary(): number {
        return this._salary;
    }

    constructor(role: string, private _salary: number) {
        this.role = role;

    }

    public work(personName: string): void {
        console.log(`${personName} сейчас работает как ${this.role}.`)
    }
}

export class Person {
    private _job?: Job;
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    set job(job: Job) {
        this._job = job;
    }

    getSalary(): number | void {
        if (this._job) {
            console.log(`${this.job.salary} зарплата у ${this.name}`)
            return this.job.salary
        } else {
            console.log(`${this.name} ещё не устроился на работу и у него нет зарплаты`)
        }
    }

    work(): void {
        if (this.job) {
            this.job.work(this.name);
        } else {
            console.log(`${this.name} не имеет работы`);
        }
    }
}


const fireman = new Job('Пожарный', 40000);
const policeman = new Job('Полицейский', 50000);

const person1 = new Person('Алекс');
const person2 = new Person('Джон');
const person3 = new Person('Дэвид');

person1.job = fireman;
person1.work()
person1.getSalary()

person2.job = policeman;
person2.work()
person2.getSalary()

person3.job = policeman;
person3.work()
person3.getSalary()

person1.job = policeman
person1.work()
person1.getSalary()