import { useEffect, useState } from "react";
import { FrameScreen } from "./верстка";
import { Header } from "./верстка/Header";
import { ServicesPage } from "./верстка/ServicesPage";

function App() {
  const [hash, setHash] = useState(() => window.location.hash || "#/");

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash || "#/");
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const isServices = hash.startsWith("#/services");

  return (
    <>
      <Header />
      <div className="pt-[88px]">{isServices ? <ServicesPage /> : <FrameScreen />}</div>
    </>
  );
}

export default App;
