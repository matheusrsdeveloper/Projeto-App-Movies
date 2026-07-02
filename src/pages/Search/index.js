import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import style from "./Search.module.css";
import videos from "../../json/videos.json";
import SearchVideoList from "../../components/SearchVideoList";

function Search() {
    return (
       <div>
           <Header/>
           <Container>
                <section className={style.search}>
                    <h2>Pesquisar</h2>

                    <SearchVideoList videos={videos} />
                </section>
           </Container>
           <Footer/>
       </div>
    );
}

export default Search