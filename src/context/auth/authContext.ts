import { createContext } from "react";

export const AuthContext = createContext<{
 user: string | null,
 logIn: (user: string, callback: () => void) => void,
 logOut: (callback: () => void) => void
}
 >({
  user: null,
  logIn: () => {},
  logOut: () => {}
 });