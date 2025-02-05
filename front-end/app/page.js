import Image from "next/image";
import Signup from "./Signup/page";
import Header from "./Header/page";
import Sidebar from "./Sidebar/page";
import Dashboard from "./Dashboard/page";
import Fraud from "./Fraud/page";

export default function Home() {
  return (
    <div>
..      {/* <Dashboard /> */}
      <Fraud />
      {/* <Footer /> */}
    </div>
  );
}
