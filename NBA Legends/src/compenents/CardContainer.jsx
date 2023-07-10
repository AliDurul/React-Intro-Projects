import Card from "./Card"
import { data } from "../helpers/data"

const CardContainer = ({ query }) => {
    const filteredData = data.filter((player)=>player.name.toLowerCase().includes(query.trim()))
    return (
        <div className="bg p-4 d-flex flex-wrap gap-5 container justify-content-center ">
            {filteredData.map((player, i) => <Card key={i} data={player} />)}

        </div>
    )
}

export default CardContainer