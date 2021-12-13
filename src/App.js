import Home from "./pages/home/Home";
import Tools1 from "./pages/herramientas/subpages/Tools1"
import Tools2 from "./pages/herramientas/subpages/Tools2"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Herramientas from "./pages/herramientas/Herramientas";
import History from "./pages/about/subpages/history/History";
import Mission from "./pages/about/subpages/mission/Mission";
import Values from "./pages/about/subpages/values/Values";
import Policy from "./pages/about/subpages/policy/Policy";
import Footer from "./components/footer/Footer";
import Service1 from "./pages/services/subpages/Service1";
import Service2 from "./pages/services/subpages/Service2";
import Service3 from "./pages/services/subpages/Service3";
import 'aos/dist/aos.css';
import PageNotFound from "./pages/notFound/PageNotFound";

function App() {
  return (
    <>
      <img className="blogBg" src="/img/bg.png" alt="" />
      <Router>
        <Topbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/sobre-nosotros">
            <About />
          </Route>
          <Route path="/historia">
            <History />
          </Route>
          <Route path="/mision-vision">
            <Mission />
          </Route>
          <Route path="/valores-medulares">
            <Values />
          </Route>
          <Route path="/politica-integrada">
            <Policy />
          </Route>
          <Route path="/contacto">
            <Contact />
          </Route>
          <Route path="/servicios">
            <Services />
          </Route>
          <Route path="/desarrollo-productos-quimicos">
            <Service1 />
          </Route>
          <Route path="/diseno-ejecucion-tratamientos">
            <Service2 />
          </Route>
          <Route path="/provision-equipos-cementacion">
            <Service3 />
          </Route>
          <Route path="/herramientas">
            <Herramientas />
          </Route>
          <Route path="/herramientas-completacion">
            <Tools1 />
          </Route>
          <Route path="/herramientas-pesca">
            <Tools2 />
          </Route>
          <Route component={PageNotFound} />
        </Switch>
        <Footer></Footer>
      </Router>

    </>
  );
}
export default App;
