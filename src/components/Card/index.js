import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import iconFavorite from "./favorite.png";
import iconUnfavorite from "./unfavorite.png";

function Card({ id }) {
  return (
    <div className={styles.card}>

      <Link to={`/watch/${id}`}
        href={`https://www.youtube.com/watch?v=${id}`}
      >
        <img
          src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
          alt="Capa"
          className={styles.capa}
        />
      </Link>

    <figure className={styles.icon}>
      <img src={iconFavorite} alt="Icone"/>
    </figure>

    </div>
  );
}

export default Card;