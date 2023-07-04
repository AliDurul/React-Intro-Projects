import Card from "./Card";
import data from "../../helper/data";

const Main = () => {
  return (
    <div>
      Main
      {data.map((item) => {
        const { id, image, desc, title, date } = item;
        return (
          <Card id={id} image={image} desc={desc} title={title} data={date} />
        );
      })}
    </div>
  );
};

export default Main;
