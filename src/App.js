import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Detail from "./pages/Detail.jsx";
import Search from "./pages/Search.jsx";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import PageContainer from "./containers/PageContainer.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <PageContainer>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/video/:id" element={<Detail />} />
            <Route path="/search/:keyword" element={<Search />} />
          </Routes>
        </PageContainer>
      </BrowserRouter>
    </>
  );
}

export default App;
