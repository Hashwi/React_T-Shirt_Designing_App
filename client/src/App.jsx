import Canvas from "./canvas";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";

const App = () => (
  <>
    <main className="app transition-all ease-in">
      <div>
        <Home />
        <Canvas />
        <Customizer />
      </div>
    </main>
  </>
);

export default App;
