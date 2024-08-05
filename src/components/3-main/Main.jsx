import { useState, useCallback } from "react";
import "./main.css";
import { myProjects } from "./myProjects";
import { AnimatePresence, motion } from "framer-motion";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";

const Main = () => {
  const [Active, setActive] = useState(false);
  const [currentActive, setCurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects.slice(0, 8)); // عرض 8 مشاريع عند البداية
  const [hasMore, setHasMore] = useState(true);

  const handleClick = useCallback(async (buttonCategory) => {
    setCurrentActive(buttonCategory);

    // محاكاة تأخير تحميل البيانات
    await new Promise((resolve) => setTimeout(resolve, 500)); // تأخير 500 مللي ثانية

    const newArr = myProjects.filter((item) =>
      item.category.includes(buttonCategory)
    );

    setArr(newArr.slice(0, 8)); // عرض 8 مشاريع عند البداية
    setHasMore(newArr.length > 8); // التحقق من وجود المزيد من المشاريع للتحميل
  }, []);

  const fetchMoreData = useCallback(async () => {
    if (arr.length >= myProjects.length) {
      setHasMore(false); // لا توجد مشاريع إضافية للتحميل
      return;
    }

    // محاكاة تأخير تحميل البيانات
    await new Promise((resolve) => setTimeout(resolve, 500)); // تأخير 500 مللي ثانية

    // تحميل 8 مشاريع إضافية
    setArr((prevArr) => [
      ...prevArr,
      ...myProjects.slice(prevArr.length, prevArr.length + 8),
    ]);
  }, [arr]);

  return (
    <main className="flex">
      <section className="flex left-section" id="Projects">
        <button
          onClick={() => {
            setActive(false);
            setCurrentActive("all");
            setArr(myProjects.slice(0, 6)); // عرض 6 مشاريع عند البداية
            setHasMore(myProjects.length > 6);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          all projects
        </button>

        <button
          onClick={() => {
            setActive(true);
            handleClick("css");
          }}
          className={currentActive === "css" ? "active" : null}
        >
          HTML & CSS
        </button>

        <button
          onClick={() => {
            setActive(true);
            handleClick("js");
          }}
          className={currentActive === "js" ? "active" : null}
        >
          JavaScript
        </button>
        <button
          onClick={() => {
            setActive(true);
            handleClick("react");
          }}
          className={currentActive === "react" ? "active" : null}
        >
          React & MUI
        </button>
        <button
          onClick={() => {
            setActive(true);
            handleClick("node");
          }}
          className={currentActive === "node" ? "active" : null}
        >
          Node & Express
        </button>
        <h1 className={!Active ? "NumerArr" : "NumerArrinActiv"}>
          {arr.length} Projects
        </h1>
      </section>
      <section className="Allsection">
        <InfiniteScroll
          className="flex right-section"
          dataLength={arr.length} // عدد المشاريع المعروضة
          next={fetchMoreData} // دالة لجلب المزيد من المشاريع
          hasMore={hasMore} // التحقق من وجود المزيد من المشاريع
          loader={<h4>Loading...</h4>} // رسالة تحميل أثناء جلب المزيد
        >
          <AnimatePresence>
            {arr.map((item, inx) => (
              <Link to={item.link} target="_blank">
                <div key={inx}>
                  <motion.article
                    layout
                    initial={{ scale: 0.4 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 8, stiffness: 50 }}
                    className="card"
                  >
                    <LazyLoad height={300} offset={100}>
                      <img className="imgCard" src={item.img} alt="" />
                    </LazyLoad>

                    <div style={{ width: "266px" }} className="box">
                      <h1 className="title">{item.title}</h1>
                      <p className="sub-title">{item.title2}</p>

                      <div className="flex icons">
                        <div style={{ gap: "11px" }} className="flex">
                          <Link
                            to={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className="icon-link"></div>
                          </Link>

                          <Link
                            to="https://github.com/MOHAMMED2207"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className="icon-github"></div>
                          </Link>
                        </div>
                        <Link className="link flex" to="">
                          more
                          <span
                            style={{ alignSelf: "center" }}
                            className="icon-arrow-right"
                          ></span>
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                </div>
              </Link>
            ))}
          </AnimatePresence>
        </InfiniteScroll>
      </section>
    </main>
  );
};

export default Main;
