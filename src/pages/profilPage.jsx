import React from "react";
import { Link } from "react-router-dom";
import "../styles/profilStyle.css";

const Headerprofil = ({ title, iconSrc }) => {
  return (
    <div className="container" id="head">
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

const ProfilPage = ({ anggotas, introduction }) => {
  console.log("Profile Page", anggotas, introduction);  
  return (
    <>
      <Headerprofil
        iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/1d320f8d89b47010171b3bb9d12cb64d2abb82d649b558d2cd6b02d5d9e50f18?apiKey=236d0a87b9ca46baa5b67a2b5a718b65&"
        title="Profil Singkat Kelurahan Ngaglik"
      />
          <div className="container" id="explanation">
      <img src={`http://localhost:1337${introduction.data.attributes.cover.data.attributes.url}`} alt="Gambar kelurahan" />
      <div className="container" id="explain">
        <p>
          <b>{introduction.data.attributes.text}</b>
        </p>
      </div>
    </div>
      <div className="container">
        <main>
          <section className="section">
            <div className="container">
              <h2 className="section-title">
                <b>Struktur Anggota Kelurahan Ngaglik</b>
              </h2>
              <div className="team-grid">
                {anggotas.data.map((anggota) => (
                  <div
                    key={anggota.attributes.id}
                    className="team-member"
                    id={anggota.attributes.id}
                  >
                    <img
                      loading="lazy"
                      src={`http://localhost:1337${anggota.attributes.fotoAnggota.data.attributes.url}`}
                      className="img"
                      alt={anggota.attributes.namaAnggota}
                    />
                    <div className="team-member-info">
                      <div className="team-member-name">
                        {anggota.attributes.namaAnggota}
                      </div>
                      <div className="team-member-position">
                        {anggota.attributes.jabatanAnggota}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default ProfilPage;
