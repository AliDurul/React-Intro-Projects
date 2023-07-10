import Card from "./Card"
import { data } from "../helpers/data"

const CardContainer = () => {
    console.log(data);
    return (
        <div className="bg p-4 d-flex flex-wrap gap-5 container justify-content-center ">
            {data.map((player) => <Card data={player} />)}

        </div>
    )
}

export default CardContainer