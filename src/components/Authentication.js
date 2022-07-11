
import {useState,createContext, useContext} from "react";
const AuthContext=createContext(null);


 export const AuthProvider=({Children})=>{

const [admin, setAdmin] = useState(null)

const login=(admin)=>{
    setAdmin(admin)
}
const logout=()=>{
    setAdmin(null)
}

return <AuthContext.Provider value={{admin,login,logout}}>{Children}</AuthContext.Provider>
 }

 export const useAuth=()=>{
    return useContext(AuthContext)
 }