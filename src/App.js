import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateTemplate from "./CreateTemplate";
import Register from "./Register";
import { Home } from "./components/screens/Home";
// import PrivateRoute, { useAuth } from "./routes/privateroute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/home" element={
          // <PrivateRoute>
          <Home />
          // </PrivateRoute>
        } />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="Create-Template" element={<CreateTemplate />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
