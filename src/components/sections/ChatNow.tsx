
import { FC } from "react";
import LabelHouse from "../LabelHouse";

const ChatNow: FC = () => {
  return (
    <section className="chat-now">
      <div className="content">
        <LabelHouse label="บริการภาพธุรกิจ" />
        <h1>ให้เราช่วยดูแล</h1>
        <h6>งานซ่อมในธุรกิจของคุณ</h6>
        <div className="chat-group">
          <a href="#">
            <button className="d-btn btn-messenger">
              <img src="/images/social-media/messenger.svg" alt="messenger" />
              แชทเลย
            </button>
          </a>
          <a href="#">
            <button className="d-btn btn-line">
              <img src="/images/social-media/line.svg" alt="line" />
              แชทกับช่างดี
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ChatNow;
