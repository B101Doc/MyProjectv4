import React from "react";
import { Link, useParams } from "react-router-dom";
import './Article.css'
import sideNews from "./sideNews";
import DateLogo from "../assets/dateLogo.png";

const HeaderArtikel = ({ title, iconSrc }) => {
    return (
      <div className="container" id="headArtikel">
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
}

const Article = ({articles}) => {        
    const {id}=useParams()

    let article={}
    if(article){
        let arr = articles.data.filter(article=> article.id == id)
        article=arr[0]
    }else{
        article={}
    }

    const sideNews = articles.data.slice(0, 3).sort((a, b) => new Date(b.attributes.publishedAt) - new Date(a.attributes.publishedAt))
         
    console.log('Article Object: ', article, sideNews)
  return (    
    <>      
        <HeaderArtikel 
        iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/1d320f8d89b47010171b3bb9d12cb64d2abb82d649b558d2cd6b02d5d9e50f18?apiKey=236d0a87b9ca46baa5b67a2b5a718b65&"
        title='Artikel Kelurahan Ngaglik'
        />
        <div className="article-page-content">
       <div className="article-container">
            <img 
            className="article-cover"
            src={`http://localhost:1337${article.attributes.coverArtikel.data.attributes.url}`}/>
            <div className="article-content">
            <h1 className="article-title">{article.attributes.judulArtikel}</h1>
            <div className="article-text"><p>{article.attributes.teksArtikel}</p></div>
            </div>
        </div>
        <div className="side-news">
        <div class="title">
            <h5>
              <b>BERITA TERKINI KELURAHAN NGAGLIK</b>
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
 
export default Article;
