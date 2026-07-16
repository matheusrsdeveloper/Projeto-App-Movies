import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import styles from "./Favorites.module.css";

function Favorites() {
    return (
        <div>
            <Header/>
            <Container>
                
                <section className={styles.favorites}>
                    <h2>Meus Favoritos</h2>
                    Lista de Favoritos
                </section>
            </Container>
            <Footer/>
        </div>
    );
}

export default Favorites;