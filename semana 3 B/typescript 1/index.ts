type Roles = "admin" | "user"

type Person = {
    name: unknown;
    age?: unknown; // el signo ? es que no es necesario
    role: Roles;
    addAge: (age: number) => number;
};

const persona : Person = {
    name: "asda",
    role: "admin",
    addAge(age) {
        return age;
    },
}

type Auto = Record<string, number>; // es un template

const auto: Auto = {"puertas": 4}

