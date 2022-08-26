import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import ChatRoom from "./components/ChatRoom";
import AuthProvider from "./components/Context/AuthProvider";
import AppProvider from "./components/Context/AppProvider";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<ChatRoom />} />
          </Routes>
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
