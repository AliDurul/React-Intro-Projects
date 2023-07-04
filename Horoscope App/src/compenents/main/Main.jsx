import { data } from "../../helpers/data";
import Card from "./Card";

import "./Main.scss";

const Main = () => {
    return (
        <div className="card-container">
            {
                data.map((item) => (
                    <Card key={item.id} {...item} />
                ))
            }
        </div>
    )
}

export default Main