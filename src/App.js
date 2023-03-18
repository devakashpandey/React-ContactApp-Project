import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddEditPage from "./pages/AddEditPage";
import ViewDetail from "./pages/ViewDetail";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="contact-app">
        <ToastContainer position="top-center" />

        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddEditPage />} />
          <Route path="/update/:id" element={<AddEditPage />} />
          <Route path="/detail/:id" element={<ViewDetail />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
