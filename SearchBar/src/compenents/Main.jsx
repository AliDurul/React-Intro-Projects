
import { useState } from "react"
import { Users } from "../helper/users"

const Main = () => {

    const [query, setQuery] = useState("")

    // console.log(Users);

    let nameArr = []
    nameArr = Users.filter((user) => user.first_name.toLowerCase().includes(query))
console.log(nameArr);



    const handleSearch = (e) => {
        // setQuery(e.target.value)
        setQuery(e.target.value)
console.log(query);
    }

    return (
        <div>
            <input type="text" className="search" onChange={handleSearch} />

            <ul className="list">
                {
                    Users.map((user) => <li className="listItem">{user.first_name}</li>)
                }
            </ul>

        </div>
    )
}

export default Main