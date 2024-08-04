import React from "react";
import './Footer.css';
import { Link } from "react-router-dom";
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/instagram'
import 'react-social-icons/youtube'

const Footer = () => {
    return(
        <footer>
        <div className="footer">
            <div className="container" id="profil_kontak">
                <div className="profil">
                <h5><b><Link to={"/profil"}>Profil</Link></b></h5>
                <p>Kelurahan Ngaglik - Kecamatan Batu <br />Kota Batu - Provinsi Jawa Timur, Indonesia</p>
                <br />
                <p>Desa Ngaglik adalah salah satu desa yang terletak di Kecamatan Batu, Kota Batu, Jawa Timur. Desa ini memiliki luas wilayah sekitar 436,95 hektar dan terletak pada ketinggian sekitar 800-1000 meter di atas permukaan laut. Desa Ngaglik dikenal sebagai daerah pegunungan dengan udara yang sejuk dan pemandangan alam yang indah.</p>
                </div>
                <div className="kontak">
                <h5><b><Link to={"/profil"}>Kontak Kami</Link></b></h5>
                <p>Kelurahan Ngaglik - Kecamatan Batu <br /> 
                Kota Batu - Provinsi Jawa Timur, Indonesia <br />
                <br />
            <SocialIcon url='https://www.instagram.com/ngaglik_official?igsh=MnI1aDNpcmNkd3Bo'/> <SocialIcon url="https://youtube.com/@daringanngagliktvdesa1477?si=5xiG_4P0Z_pfbKMR" /></p>
                <a href=""></a>
                </div>
            </div>            
        </div>
        <div className="watermark">
        <div className="container" id="wm">
            <div className="webDesa">
                <p>WebsiteDesa</p>
            </div>
            <div className="uniBraw">
                <p><b>2024 © Universitas Brawijaya</b></p>
            </div>
        </div>
    </div>
    </footer>
    );
};

export default Footer;