import "./App.css";
import Home from "./pages/Home";
import Category from "./pages/Category";
import { Link, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="/category" element={<Category />}></Route>
            </Routes>
        </>
    );
}

export default App;
