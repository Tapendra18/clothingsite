import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import axios from "axios";
import { BiLike, BiDislike } from "react-icons/bi";

const Blog = () => {

  const [data, setData] = useState();
  const [comments, setComment] = useState({
    comment: ""
  });
  const [showcomment, setShowComment] = useState();
  console.log(showcomment, "showwwww");

  const [like, setlike] = useState();
  const [unlike, setunlike] = useState();

  const onlike = () => {
    axios.post("http://127.0.0.1:8000/api/v1/like")
      .then(response => setlike(response))
      .catch(err => console.log(err));
  };

  const onunlike = () => {
    axios.post("http://127.0.0.1:8000/api/v1/unlike")
      .then(response => setunlike(response))
      .catch(err => console.log(err));
  }


  const commentGet = (e) => {
    axios.get("http://127.0.0.1:8000/api/v1/comment")
      .then(response => setShowComment(response.data.data))
      .catch(err => console.log(err))
  }
  console.log(comments, "sdfas")

  const handleChange = (e) => {
    const { name, value } = e.target;
    setComment({ ...comments, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post("http://127.0.0.1:8000/api/v1/comment", comments)
      .then(response => setComment(response))
      .catch(err => console.log(err));

  }
  const API_URL = "http://127.0.0.1:8000/";

  const getblog = () => {
    axios.get("http://127.0.0.1:8000/api/v1/blog")
      .then(response => setData(response))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getblog();
    commentGet();
  }, []);

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
                    <a href="/" rel="nofollow">
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
                    {
                      data && data.data.data.map((item) => (
                        <article className="col-xl-3 col-lg-4 col-md-6 text-center hover-up mb-30 animated">
                          <div className="post-thumb">
                            <a href="../detail/best-smartwatch-2022-the-top-wearables-you-can-buy-today/index.html">
                              <img
                                className="border-radius-15"
                                src={`${API_URL + item.image}`}
                                alt=""
                              />
                            </a>
                            <div style={{display:"flex"}}>
                              <h1 style={{ cursor: "pointer" }} onClick={onlike}>
                                <BiLike />
                              </h1>
                              <h2 style={{ cursor: "pointer" }} onClick={onunlike}>
                                <BiDislike />
                              </h2>
                            </div>

                          </div>
                          <div className="entry-content-2">
                            <h6 className="mb-10 font-sm">
                              <a
                                className="entry-meta text-muted"
                                href="../category/food-beverage/index.html"
                              >
                                {item.title}
                              </a>
                            </h6>
                            <h4 className="post-title mb-15">
                              <a href="../detail/best-smartwatch-2022-the-top-wearables-you-can-buy-today/index.html">
                                {item.content}
                              </a>
                            </h4>
                            <div className="entry-meta font-xs color-grey mt-10 pb-10">
                              <div>
                                <span className="post-on mr-10"> {item.createdAt}</span>
                              </div>
                              {showcomment && showcomment.map((data2) => (
                                <h1>{data2.comment}</h1>
                              ))}

                              {/* <h1>{showcomment}</h1> */}
                              <form onSubmit={handleSubmit}>
                                <div>
                                  <input type="text" name="comment" className="textinput textInput" id="id_username" onChange={handleChange} />
                                </div>
                                <div>
                                  <button className="btn btn-heading btn-block hover-up">comment</button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </article>
                      ))
                    }

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
