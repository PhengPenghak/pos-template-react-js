import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Auth, Orders, Table } from "./pages";
import Header from "./components/shared/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/table" element={<Table />} />
      </Routes>
    </Router>
  );
}

export default App;
