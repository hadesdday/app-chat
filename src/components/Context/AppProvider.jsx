import React, { createContext, useContext, useMemo, useState } from "react";
import useFirestore from "../../hooks/useFirestore";
import { AuthContext } from "./AuthProvider";

export const AppContext = createContext();
function AppProvider({ children }) {
  const {
    user: { uid },
  } = useContext(AuthContext);

  const roomsCondition = useMemo(() => {
    return {
      fieldName: "members",
      operator: "array-contains",
      compareValue: uid,
    };
  }, [uid]);

  const rooms = useFirestore("rooms", roomsCondition);

  const [isAddRoomVisible, setIsAddRoomVisible] = useState(false);

  return (
    <AppContext.Provider
      value={{ rooms, isAddRoomVisible, setIsAddRoomVisible }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
