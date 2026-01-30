//

import { Outlet } from "react-router";
import NavBar from "../pages/Shared/NavBar";
import Footer from "../pages/Shared/Footer";

const RootLayout = () => {
  return (
    <div className=" mx-auto">
      <NavBar></NavBar>
      <div className="max-w-7xl mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
