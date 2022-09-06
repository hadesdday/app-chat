import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ChatRoom from "./components/ChatRoom";
import AppProvider from "./components/Context/AppProvider";
import AuthProvider from "./components/Context/AuthProvider";
import Login from "./components/Login";
import AddRoomModal from "./components/Modals/AddRoomModal";
import InviteMemberModal from "./components/Modals/InviteMemberModal";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<ChatRoom />} />
          </Routes>
          <AddRoomModal />
          <InviteMemberModal />
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
