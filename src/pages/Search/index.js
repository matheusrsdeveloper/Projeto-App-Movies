import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import VideoList from "../../components/VideoList";
import style from "./Search.module.css";
import videos from "../../json/videos.json";

function Search() {
    return (
       <div>
           <Header/>
           <Container>
                <section className={style.search}>
                    <h2>Pesquisar</h2>
                    <VideoList videos={videos} />
                </section>
           </Container>
           <Footer/>
       </div>
    );
}

export default Search