
const BlogSection = () => {
  return (
    <section className="blog">
      <div className="content">
        <div className="header">
          <h1 className="title">บทความที่น่าสนใจ</h1>
          <p className="description">เกร็ดความรู้และเรื่องราวที่น่าสนใจ</p>
        </div>
        <div className="contents">
          <div className="blog-1">
            <img src="/images/blog/1.svg" alt="blog-1" />
            <h6>วิธีการดูแลแอร์เบื้องต้น</h6>
            <p>
              วิธีการดูแลแอร์เบื้องต้น
              เพื่อประหยัดค่าไฟและยืดอายุการใช้งานเครื่องปรับอากาศ
            </p>
          </div>
          <div className="blog-2">
            <img src="/images/blog/2.svg" alt="blog-2" />
            <h6>เลือกแอร์อย่างไรให้เหมาะกับห้อง</h6>
            <p>
              เลือกแอร์อย่างไรให้เหมาะกับห้อง BTU คืออะไร
              สำคัญแค่ไหนกับการเลือกแอร์
            </p>
          </div>
          <div className="blog-3">
            <img src="/images/blog/3.svg" alt="blog-3" />
            <h6>วิธีดูแลเครื่องทำน้ำอุ่น</h6>
            <p>
              วิธีดูแลเครื่องทำน้ำอุ่นเบื้องต้น ยืดอายุการใช้งาน
              ให้ได้นานยิ่งขึ้น
            </p>
          </div>
          <div className="blog-4">
            <img src="/images/blog/4.svg" alt="blog-4" />
            <h6>ล้างแอร์บ่อยแค่ไหนดี</h6>
            <p>
              ควรล้างแอร์บ่อยแค่ไหน มีวิธีสังเกตอย่างไรว่าแอร์ควรได้รับการล้าง
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
