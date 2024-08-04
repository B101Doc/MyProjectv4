import React from "react";
import "../styles/wisataStyle.css";
import { Link } from "react-router-dom";
import DateLogo from "../assets/dateLogo.png";

const WisataHeader = ({ judul }) => {
  return (
    <div class="container" id="headWisata">
      <div class="home">
        <Link to={"/"}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d320f8d89b47010171b3bb9d12cb64d2abb82d649b558d2cd6b02d5d9e50f18?apiKey=236d0a87b9ca46baa5b67a2b5a718b65&"
            alt="to-home"
          />
        </Link>
      </div>
      <div class="slash">
        <h4>/</h4>
      </div>
      <h4>
        <b>{judul}</b>
      </h4>
    </div>
  );
};
const WisataPage = ({ wisatas, articles }) => {
  console.log("Wisata Page", wisatas, articles);
  const sideNews = articles.data.slice(0, 4).sort((a, b) => new Date(b.attributes.publishedAt) - new Date(a.attributes.publishedAt))
  
  return (
    <>
      <WisataHeader judul="Wisata Kelurahan Ngaglik"></WisataHeader>
      <div className="main">
        <div className="container" id="main_content">
          <p>
            Selamat datang di Daringan Kelurahan Ngaglik, sebuah destinasi yang
            memadukan potensi seni dan budaya untuk menghadirkan kearifan lokal
            sebagai Wilayah Layak Wisata. Terletak di jantung Kota Wisata Batu,
            Daringan Ngaglik menawarkan berbagai pengalaman yang kaya akan
            nilai-nilai tradisional dan keindahan budaya. Mari jelajahi berbagai
            program dan kegiatan kami:
          </p>

          {wisatas.data.map((wisata) => (
            <div class="wisata_1">
              <h6>
                <b>
                  {wisata.id}. {wisata.attributes.namaWisata}
                </b>
              </h6>
              <div class="container" id="desc">
                <img src={`http://localhost:1337${wisata.attributes.fotoWisata.data.attributes.url}`} />
                <p>{wisata.attributes.descWisata}</p>
              </div>
              <a href={wisata.attributes.linkAlamatWisata}>Alamat</a>
            </div>
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

export default WisataPage;
