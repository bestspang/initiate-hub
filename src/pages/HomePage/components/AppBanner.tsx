
import { FC } from "react";

const AppBanner: FC = () => {
  return (
    <section className="banner-2">
      <div className="content">
        <div className="content-left">
          <img src="/images/application-mockup.svg" alt="application-mockup" />
        </div>
        <div className="content-right">
          <div className="content">
            <div className="chang-dee-application">
              <img src="/icon-app.svg" alt="icon-app" />
              CHANG D Application
            </div>
            <div className="description">
              <h1>ดาวน์โหลดแอปพลิเคชั่นช่างดี</h1>
              <p>
                ศูนย์รวมบริการ งานช่าง งานติดตั้งมีให้เลือกใช้บริการ
                ได้ง่ายและครบครัน
              </p>
            </div>
            <div className="download-now">
              <h6>ดาวน์โหลดเลย</h6>
              <div className="btn-group">
                <a href="https://ecomm.globalhouse.co.th/DirectlinkChd" target="_blank" rel="noopener noreferrer">
                  <img src="/images/app-store.svg" alt="app-store" />
                </a>
                <a href="https://apps.apple.com/us/app/ช-างด-บร-การงานช-างครบท-เด-ยว/id1668758616" target="_blank" rel="noopener noreferrer">
                  <img src="/images/google-play.svg" alt="google-play" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppBanner;
