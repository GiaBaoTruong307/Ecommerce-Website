import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import BlogIndex from "./components/Blog/Index.jsx";
import BlogDetail from "./components/Blog/Detail.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/blog/list" element={<BlogIndex />} />
          <Route path="/blog/detail/:id" element={<BlogDetail />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
