import { useState } from "react"
import { AuthContext } from "./authContext"

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
 const [user, setUser] = useState<string | null>(null)
 const logOut = (callback: () => void) => {
  setUser(null)
  callback()
 }

 const logIn = (user: string, callback: () => void) => {
  setUser(user)
  callback()
 }
 return (
		<AuthContext.Provider
			value={{
    user,
    logIn,
		logOut
			}}
  >
   {children}
  </AuthContext.Provider>
	)
}