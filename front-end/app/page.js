import Image from "next/image";
import Signup from "./Signup/page";
import Header from "./Header/page";
import Sidebar from "./Sidebar/page";
import Dashboard from "./Dashboard/page";
import Footer from "./Footer/Page";

export default function Home() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Dashboard />
      {/* <Footer /> */}
    </div>
  );
}
