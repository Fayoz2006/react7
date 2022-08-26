import "./CSS/production/App.css";
// import Register from "./Components/Register/Register";
import Layout from "./Layout/Jayout";
import { BrowserRouter as Br } from "react-router-dom";
import { Views } from "./Components/Views/Views";

function App() {
  return (
    <>
      <Br>
        <Layout></Layout>
        <Views />
      </Br>
    </>
  );
}

export default App;
