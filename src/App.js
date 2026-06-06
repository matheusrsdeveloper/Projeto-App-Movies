import Banner from "./components/Banner";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
   
   <div>
    <Header/>
   <Banner image="home"/>
    <Container>
      <h1>Olá, mundo!</h1>
      <p>Meu nome é Matheus, estou aprendendo React</p>
    </Container>
    <Footer/>
   </div>
  );  
}

export default App;
