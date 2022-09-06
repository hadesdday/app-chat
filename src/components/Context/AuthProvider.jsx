import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/config";
import LoadingModal from "../Modals/LoadingModal";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  //use effect nay se lang nghe su kien khi dang nhap
  useEffect(() => {
    //huy theo doi su kien
    const unsubscribed = auth.onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        const { displayName, email, uid, photoURL } = user;
        setUser({ displayName, email, uid, photoURL });
        setIsLoading(false);
        navigate("/");
        return;
      } else {
        setIsLoading(false);
        navigate("/login");
      }
    });

    //clean up function sau moi lan rerender hoac component duoc unmount
    return () => {
      unsubscribed();
    };
  }, [navigate]);
  return (
    //value ben duoi se giup cac component con co the truy xuat duoc du lieu tu provider thong qua hook useContext
    <AuthContext.Provider value={{ user }}>
      {isLoading ? <LoadingModal /> : children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
