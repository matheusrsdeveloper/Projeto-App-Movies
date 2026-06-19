import Header from "../../components/Header"
import Container from "../../components/Container"
import Footer from "../../components/Footer"
import Styles from "./Watch.module.css";

function Watch() {
    return (
       <div>
            <Header />
            <Container >
                <section className={Styles.watch}>
                   
                    <iframe width="854" height="480" src="https://www.youtube.com/embed/2y1qW_aH0gQ?si=xEqcBxKQT6QKtG9u" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </section>
            </Container>
            <Footer/>
            
       </div>
    );
}

export default Watch;