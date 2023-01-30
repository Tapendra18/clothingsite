import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Blog = () => {
  return (
    <div>
           <Header />
      <main className="main">
        <div className="page-header mt-30 mb-75">
          <div className="container">
            <div className="archive-header">
              <div className="row align-items-center">
                <div className="col-xl-3">
                  <h1 className="mb-15">Blog & News</h1>
                  <div className="breadcrumb">
                    <a href="../index.html" rel="nofollow">
                      <i className="fi-rs-home mr-5"></i>Home
                    </a>
                    <span></span> Blog & News
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-content mb-50">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="loop-grid">
                  <div className="row">
                    <article className="col-xl-3 col-lg-4 col-md-6 text-center hover-up mb-30 animated">
                      <div className="post-thumb">
                        <a href="../detail/best-smartwatch-2022-the-top-wearables-you-can-buy-today/index.html">
                          <img
                            className="border-radius-15"
                            src="../media/blog/posts/blog-1_Zx8UVMs.png"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="entry-content-2">
                        <h6 className="mb-10 font-sm">
                          <a
                            className="entry-meta text-muted"
                            href="../category/food-beverage/index.html"
                          >
                            Food &amp; Beverage
                          </a>
                        </h6>
                        <h4 className="post-title mb-15">
                          <a href="../detail/best-smartwatch-2022-the-top-wearables-you-can-buy-today/index.html">
                            Best smartwatch 2022: the top wearables…
                          </a>
                        </h4>
                        <div className="entry-meta font-xs color-grey mt-10 pb-10">
                          <div>
                            <span className="post-on mr-10"> 5 May 2022</span>
                            <span className="hit-count has-dot mr-10">
                              12 Views
                            </span>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
          <Footer />
    </div>
  );
};

export default Blog;
