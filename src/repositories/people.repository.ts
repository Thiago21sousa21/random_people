import { db } from "../database/database"
import { People } from "../protocols/protocols";
import { IdPeople } from "../protocols/protocols";
const getIds = async()=>{
    const array = await db.query<IdPeople>(`
        SELECT id FROM people;
    `);
    console.log(array)
    return array.rows;
}

const getPeople = async(id:number)=>{
    const people = await db.query<People>(`
        SELECT * FROM people WHERE id = $1;
    `,[id]);
    return people.rows[0];
}


const peopleRepository = {
    getIds,
    getPeople
}

export default peopleRepository;