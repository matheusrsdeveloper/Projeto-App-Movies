import { Link } from "react-router-dom";
import styles from "./Card.module.css";

function Card({ id }) {
  return (
    <div className={styles.card}>
      <Link to={`/watch/${id}`}
        href={`https://www.youtube.com/watch?v=${id}`}
      >
        <img
          src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
          alt="Capa"
        />
      </Link>
    </div>
  );
}

export default Card;