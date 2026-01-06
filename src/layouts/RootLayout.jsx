//

import { Outlet } from "react-router";
import NavBar from "../pages/Shared/NavBar";
import Footer from "../../../../sports-store-client/src/Component/Footers/Footer";

const RootLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
