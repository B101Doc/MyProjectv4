import React from 'react'

const sideNews = ({articles}) => {
    console.log("Side News:", articles)

  return (
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
  )
}

export default sideNews
