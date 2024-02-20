import "./styles/fontAwesomeIcons";

import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/login/Login";
import { UserStorage } from "./context/userContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <Header />

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login/*" element={<Login />}></Route>
          </Routes>

          <Footer />
          <GlobalStyle />
        </UserStorage>
      </BrowserRouter>
    </>
  );
}

export default App;
