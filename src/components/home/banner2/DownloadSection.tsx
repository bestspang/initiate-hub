
import { FC } from "react";

const DownloadSection: FC = () => {
  return (
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
  );
};

export default DownloadSection;
