import { useState, useCallback } from "react";
import "./main.css";
import { myProjects } from "./myProjects";
import { AnimatePresence, motion } from "framer-motion";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import SkeletonCard from "../../Skeltoen/SkeletonCard";

const PROJECTS_PER_LOAD = 8;

const Main = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(
    myProjects.slice(0, PROJECTS_PER_LOAD)
  );
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const filterProjects = (category) => {
    if (category === "all") return myProjects;
    return myProjects.filter((item) => item.category.includes(category));
  };

  const handleCategoryClick = async (category) => {
    setActiveCategory(category);
    setLoading(true);
    const filtered = filterProjects(category);
    await new Promise((res) => setTimeout(res, 200));
    setFilteredProjects(filtered.slice(0, PROJECTS_PER_LOAD));
    setHasMore(filtered.length > PROJECTS_PER_LOAD);
    setLoading(false);
  };

  const fetchMoreData = useCallback(async () => {
    const all = filterProjects(activeCategory);
    await new Promise((res) => setTimeout(res, 200));

    const next = all.slice(
      filteredProjects.length,
      filteredProjects.length + PROJECTS_PER_LOAD
    );
    setFilteredProjects((prev) => [...prev, ...next]);
    if (filteredProjects.length + next.length >= all.length) setHasMore(false);
  }, [filteredProjects, activeCategory]);

  return (
    <main className="flex">
      <section className="flex left-section" id="Projects">
        {["all", "css", "js", "react", "node"].map((cat) => (
          <button
            key={cat}
            className={activeCategory === cat ? "active" : ""}
            onClick={() => handleCategoryClick(cat)}
          >
            {cat === "all"
              ? "All Projects"
              : cat === "css"
              ? "HTML & CSS"
              : cat === "js"
              ? "JavaScript"
              : cat === "react"
              ? "React & MUI"
              : "Node & Express"}
          </button>
        ))}
      </section>

      <section className="Allsection">
        <InfiniteScroll
          className="flex right-section"
          dataLength={filteredProjects.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={
            <div style={{ display: "flex", flexWrap: "wrap", gap: "42px" }}>
              {[...Array(4)].map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          }
        >
          <AnimatePresence>
            {loading
              ? [...Array(6)].map((_, i) => <SkeletonCard key={i} />)
              : filteredProjects.map((item, i) => (
                  <Link to={item.link} target="_blank" key={i}>
                    <motion.article
                      layout
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      className="card"
                    >
                      <div className="imgCard-wrapper">
                        <img
                          className="imgCard"
                          src={item.img}
                          alt={item.title}
                          loading="lazy"
                          width="100%"
                          height="160px"
                          style={{ objectFit: "cover", borderRadius: "12px" }}
                        />
                      </div>
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
                  </Link>
                ))}
          </AnimatePresence>
        </InfiniteScroll>
      </section>
    </main>
  );
};

export default Main;
