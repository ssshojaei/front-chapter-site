import React from "react";
import Head from "next/head";

const Home = () => {
  return (
    <>
        <Head>
          <title>FrontChapter | فرانت چپتر</title>
        </Head>
        <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="d-flex flex-column align-items-center">
          <h2 className="text-primary">فرانت چپتر</h2>
          <h4 className="text-secondary">به زودی سایتمون راه می‌افته</h4>
          <div className="text-center">
            <h5 className="text-info">
              <a href="https://t.me/frontChapter">T.me/FrontChapter</a>
            </h5>
            <h5 className="text-danger">
              <a href="https://instagram.com/frontChapter">instagram.com/FrontChapter</a>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
