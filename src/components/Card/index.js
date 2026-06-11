import styles from "./Card.module.css";

function Card({ id }) {
  return (
    <div className={styles.card}>
      <a
        href={`https://www.youtube.com/watch?v=${id}`}
        title="Paisagens"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
          alt="Capa"
        />
      </a>
    </div>
  );
}

export default Card;