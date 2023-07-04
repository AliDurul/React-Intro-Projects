import cardStyle from "./card.module.scss";

const Card = ({ id, title, desc, date, image }) => {
  return (
    <div className={cardStyle["container"]} key={id}>
      <div className={cardStyle['Cards']}>
        <div className={cardStyle["title"]}>
          <h1>{title}</h1>
        </div>
        <img className={cardStyle["img"]} src={image} alt="" />
        <h2 className={cardStyle['date']} >{date}</h2>
        <p className={cardStyle['desc']} >{desc}</p>
      </div>
    </div>
  );
};

export default Card;
