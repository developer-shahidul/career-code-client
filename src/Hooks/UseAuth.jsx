import { use } from "react";
import { AuthContext } from "../Contexts/AuthContexts/AuthContext";

const UseAuth = () => {
  const authInfo = use(AuthContext);
  return authInfo;
};

export default UseAuth;
