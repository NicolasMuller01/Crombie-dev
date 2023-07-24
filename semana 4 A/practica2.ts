type User = {
    id: number,
    name: string,
    age: number,
    email: string
}

type Post = {
    id: number,
    desc: string
}

type Category = {
    id: number
    name: string
}


const users = [
    {
      id: 1,
      name: "John Doe",
      age: 28,
      email: "john.doe@example.com",
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 32,
      email: "jane.smith@example.com",
    }
]

function paginasRetorno<T>(arr: T[], n: number, mp: number){

    const p = {
        items: arr,
        page: n,
        maxPages: mp
    }

    return p
}

const pa = paginasRetorno(users, 1, 2)


