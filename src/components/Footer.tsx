
import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer>
      <div className="container">
        <div className="content-left">
          <div className="information">
            <h1>"ช่างดี"</h1>
            <p>{`บริการครบ\nจบเรื่องบ้าน`}</p>
          </div>
          <div className="download-now">
            <h6>ดาวน์โหลดเลย</h6>
            <div className="btn-group">
              <a href="https://ecomm.globalhouse.co.th/DirectlinkChd" target="_blank" rel="noopener noreferrer">
                <img src="/images/app-store.svg" alt="app-store" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="/images/google-play.svg" alt="google-play" />
              </a>
            </div>
          </div>
          <p className="copyright">© 2025 Global House Public Company Limited. (Thailand)</p>
        </div>
        <div className="content-right">
          <ul className="menu">
            <li><a href="#">เลือกบริการ</a></li>
            <li><a href="#">บริการภาคธุรกิจ</a></li>
            <li><a href="#">มาเป็นช่างกับเรา</a></li>
            <li><a href="#">โปรโมชั่น</a></li>
            <li><a href="#">ผลงานที่ผ่านมา</a></li>
            <li><a href="#">พื้นที่ให้บริการ</a></li>
          </ul>
          <div className="contract">
            <a href="#">
              <img src="/images/social-media/facebook.svg" alt="facebook" />
            </a>
            <a href="#">
              <img src="/images/social-media/line-new.svg" alt="line-new" />
            </a>
            <a href="#">
              <img src="/images/social-media/mail.svg" alt="mail" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
