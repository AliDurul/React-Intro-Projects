
import { useState } from "react"
import { Users } from "../helper/users"
import Table from "./Table"

const Main = () => {

    const [query, setQuery] = useState("");
    // console.log(query);

    // console.log(Users[0]["email"]);

    /* search button long way */
    // const search = (data) => {
    //     return data.filter(item => item.first_name.toLowerCase().includes(query) || item.last_name.toLowerCase().includes(query) || item.email.toLowerCase().includes(query))
    // }
    
    const keys = ['first_name', 'last_name', 'email'];
    const search = (data) => {
        return data.filter(item => keys.some(key => item[key].toLowerCase().includes(query)))
    }




    // console.log(search(Users));
    return (
        <div className="app">
            <input type="text" className="search" onChange={(e) => setQuery(e.target.value)} />
            {/* <ul className="list">
            {
                Users.filter(user => user.first_name.toLowerCase().includes(query)).map(user => (
                <li className="listItem">{user.first_name}</li>

                ) )
            }
            </ul> */}

            <Table data={search(Users)} />

        </div>
    )
}

export default Main