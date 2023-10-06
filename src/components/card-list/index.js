import "./card-list.styles.css";
import Card from "../card";

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        const { name, email, id } = monster;
        return <Card monster={monster}></Card>;
      })}
    </div>
  );
};

export default CardList;
