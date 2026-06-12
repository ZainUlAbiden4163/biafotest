import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";
import ProgressBar from "./ProgressBar";

function Header() {
  return (
    <>
      <header className="bg-(--primary-dark) w-full flex justify-center fixed top-0 z-50 border-b border-(--color-gray)/20  max-lg:flex-col">
        <Navbar />
        <NavbarMobile />
      </header>
      <ProgressBar />
    </>
  );
}

export default Header;
