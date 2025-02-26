import { FC, useEffect, useState } from "react";

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ className = "" }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${className} ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <a href="/" className="go-home">
          <img src="/logo.svg" alt="logo" />
          <img src="/logo-2.svg" alt="logo-2" />
        </a>
        <div className="menu">
          <a href="/">บริการ</a>
          <a href="/">ขั้นตอนการทำงาน</a>
          <a href="/">โปรโมชั่น</a>
          <a href="/">บทความ</a>
          <a href="/">เกี่ยวกับเรา</a>
        </div>
        <div className="menu-mobile">
          <button className="d-btn">
            <img src="/menu.svg" alt="menu" />
          </button>
        </div>
        <div className="chat-with-chang-dee">
          <img src="/chang-dee-logo.svg" alt="chat-logo" />
          <img src="/line.svg" alt="line" />
          <p>
            คุยกับ <span>ช่างดี</span>
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
