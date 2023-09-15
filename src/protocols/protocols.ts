
export type ErrorObject = {
    type:string,
    message: string[]|string,
    status: number
}

export type People = {
    id:number,
    firstName: string,
    lastName: string
}

export type IdPeople = {
    id:number
}