type User = {
    name: string;
    age: number;
    occupation: string;
    messagesCount: number;
    registrationDate: Date;
    warningsCount: number;
};

export const users: User[] = [
    {
        name: "Calvin Klein",
        age: 38,
        occupation: "Artist",
        messagesCount: 0,
        registrationDate: new Date("12/7/2021"),
        warningsCount: 0,
    },
    {
        name: "Max Mustermann",
        age: 25,
        occupation: "Chimney sweep",
        messagesCount: 16,
        registrationDate: new Date("12/7/2018"),
        warningsCount: 3,
    },
    {
        name: "Kate Müller",
        age: 23,
        occupation: "Astronaut",
        messagesCount: 243,
        registrationDate: new Date("1/7/2020"),
        warningsCount: 12,
    },
    {
        name: "Kate Müller",
        age: 23,
        occupation: "Developer",
        messagesCount: 434,
        registrationDate: new Date("5/11/2021"),
        warningsCount: 14,
    },
    {
        name: "Chloe Price",
        age: 19,
        occupation: "Student",
        messagesCount: 167,
        registrationDate: new Date("6/3/2019"),
        warningsCount: 67,
    },
];

export class TrustedUser {
    private user: User;

    constructor(user: User) {
        this.user = user;
    }

    getConfidenceRatio(): number {
        const date1 = new Date();
        const date2 = this.user.registrationDate;
        const avgDate = (date1.getTime() - date2.getTime()) / (60 * 60 * 24 * 1000);
        return this.user.messagesCount * 2 - this.user.warningsCount * 100 + avgDate;
    }
}

export class ConfidenceHelper {
    static checkConfidenceRatio(ratio: number): boolean {
        return ratio >= 0;
    }
}

export function checkUsersConfidence(users: User[]): User[] {
    const newArray: User[] = [];
    users.forEach((user) => {
        const newUser = new TrustedUser(user);
        const ratedUser = newUser.getConfidenceRatio();
        const filteredUser = ConfidenceHelper.checkConfidenceRatio(ratedUser);
        if (!filteredUser) {
            newArray.push(user);
        }
    });
    return newArray;
}

console.log(checkUsersConfidence(users));



