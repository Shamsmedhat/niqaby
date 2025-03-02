import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/not-found";
import Home from "./pages/home";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}


function App() {
  return <Router />;
}
export default App;
