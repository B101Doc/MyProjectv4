import React from "react";
import { Link } from "react-router-dom";
import "../styles/beritaStyle.css";
import axios from "axios";
import DateLogo from "../assets/dateLogo.png";

const Headerberita = ({ title, iconSrc }) => {
  return (
    <div className="container" id="headBerita">
      <div class="home">
        <Link to={"/"}>
          <img src={iconSrc} alt="to-home" />
        </Link>
      </div>
      <div class="slash">
        <h4>/</h4>
      </div>
      <h4>
        <b>{title}</b>
      </h4>
    </div>
  );
};

const BeritaPage = ({ articles }) => {
  console.log("Berita Page");
  console.log(articles);

  const articless = articles.data.sort((a, b) => new Date(b.attributes.publishedAt) - new Date(a.attributes.publishedAt))
  const sideNews = articles.data.slice(0, 4).sort((a, b) => new Date(b.attributes.publishedAt) - new Date(a.attributes.publishedAt)
);
  return (
    <>
      <Headerberita
        iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/1d320f8d89b47010171b3bb9d12cb64d2abb82d649b558d2cd6b02d5d9e50f18?apiKey=236d0a87b9ca46baa5b67a2b5a718b65&"
        title="Berita Kelurahan Ngaglik"
      />
      <div className="container" id="NewsMain">
        <div className="NewsList">
          {articles.data.map((article) => (
            <Link to={`/berita/artikel/${article.id}`} key={article.id}>
              <div className="container" id="news">
                <div className="newscontent">
                  <img
                    src={`http://localhost:1337${article.attributes.coverArtikel.data.attributes.url}`}
                    className="news-thumbnail"
                  />
                  <p>
                    <b>
                      <p>{article.attributes.judulArtikel}</p>
                    </b>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="container" id="SideNews">
          <div class="title">
            <h5>
              <b>BERITA TERKINI</b>
            </h5>
          </div>
          <div className="SideNewsContent">
            {sideNews.map((sideNew) => (
              <div className="beritaTerkini">
                <div class="container" id="sideBerita">
                  <Link to={"/berita"}>
                    <img src={`http://localhost:1337${sideNew.attributes.coverArtikel.data.attributes.url}`} alt="berita" />
                  </Link>
                  <Link to={`/berita/artikel/${sideNew.id}`} key={sideNew.id}>
                    <p>
                      {sideNew.attributes.judulArtikel} <br />
                      <div className="date">
                        <img src={DateLogo} alt="..." id="logo_date" />
                        <p>{sideNew.attributes.publishedAt}</p>
                      </div>
                    </p>
                  </Link>
                </div>
                <div class="separator"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BeritaPage;
