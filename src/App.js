import { Routes, Route } from "react-router-dom";
import Home from './components/LoginPageHome';
import Success from './components/LoginPageSuccess';
import NoMatch from './components/ErrorPage';
import "./css/app.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route>
          <Route path='/input' index element={<Home />} />
          <Route path="/success" element={<Success />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
