import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function Root() {
  return (
    <div>
        <div className="max-w-6xl mx-auto">
        <Header/>
        <Outlet />
        </div>
        <Footer/>
    </div>
  )
}
