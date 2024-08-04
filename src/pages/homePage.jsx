import React from "react";
import "../styles/homeStyle.css";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HomePage = ({ articles, wisatas, about, carousels }) => {
  console.log("Home Page", articles, wisatas, about, carousels);

  const homeSlideArticles = articles.data
    .slice(0, 4)
    .sort(
      (a, b) =>
        new Date(b.attributes.publishedAt) - new Date(a.attributes.publishedAt)
    );
  const homeWisatas = wisatas.data.slice(0, 2);

  return (
    <>
      <div className="HomeContent">

        <Carousel
          showThumbs={false}
          autoPlay
          useKeyboardArrows
          infiniteLoop
          showStatus={false}
          className="carousel"
        >
          {carousels.data.attributes.Carousels.data.map((carousel) => (
            <div className="slide">
              <img
                alt="sample"
                src={`http://localhost:1337${carousel.attributes.url}`}
                key={carousel.attributes.id}
              />
            </div>
          ))}
        </Carousel>
        
        <div class="container" id="tentang_kelurahan">
          <a href="#">
            <h4>
              <b>Tentang Kelurahan</b>
              <div class="polygon"></div>
            </h4>
          </a>
          <div class="separator-home"></div>
          <div class="deskripsi">
            <img
              src={`http://localhost:1337${about.data.attributes.aboutCover.data.attributes.url}`}
              alt="kantor kelurahan Ngaglik"
            />
            <p>{about.data.attributes.about} </p>
          </div>
        </div>

        <iframe
          src="https://www.youtube.com/embed/MvbnzVIKgmc?si=d1IuFXsCDToLy71t"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          className="profile-video"
        />

        <div className="container" id="berita">
          <h4 id="judul">
            <b>
              <Link to={"/berita"}>
                Berita Terkini <div class="polygon"></div>
              </Link>
            </b>
          </h4>
          <div class="separator-home" id="separator-berita" />
          <div class="card_news">
            {homeSlideArticles.map((homeslideArticle) => (
              <div className="card">
                <img
                  src={`http://localhost:1337${homeslideArticle.attributes.coverArtikel.data.attributes.url}`}
                  alt="berita"
                  class="card-img-top"
                />
                <p class="card-text">
                  {homeslideArticle.attributes.judulArtikel}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div id="wisata">
          <div className="container" id="wisata_kelurahan">
            <h4 id="wisata_title">
              <b>
                <Link to={"/wisata"}>
                  Wisata<div class="polygon"></div>
                </Link>
              </b>
            </h4>
            <div class="separator-home"></div>
            {homeWisatas.map((homeWisata) => (
              <div class="wisata">
                <img
                  src={`http://localhost:1337${homeWisata.attributes.fotoWisata.data.attributes.url}`}
                  alt="..."
                />
                <p>{homeWisata.attributes.namaWisata}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
