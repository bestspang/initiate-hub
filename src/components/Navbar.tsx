
import { FC, useState, useEffect } from "react";
import { cn } from "@/utils";

const Navbar: FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn("navbar", scrolled && "scrolled")}>
      <div className="container">
        <a href="/" className="go-home">
          <img src="/logo.svg" alt="logo" />
          <img src="/logo-2.svg" alt="logo-2" />
        </a>
        <ul className="menu">
          <li><a href="#">เลือกบริการ</a></li>
          <li><a href="#">บริการภาคธุรกิจ</a></li>
          <li><a href="#">มาเป็นช่างกับเรา</a></li>
          <li><a href="#">พื้นที่ให้บริการ</a></li>
        </ul>
        <div className="menu-mobile">
          <button className="d-btn d-btn-link">
            <img src="/images/icon/menu.svg" alt="menu" />
          </button>
        </div>
        <a href="https://lin.ee/26m956C" className="chat-with-chang-dee">
          <img src="/chat-logo.svg" alt="chat-logo" />
          <p>แชทกับ<span>ช่างดี</span></p>
          <img src="/images/social-media/line.svg" alt="line" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
