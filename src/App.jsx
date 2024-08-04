import HomePage from './pages/homePage'
import WisataPage from './pages/wisataPage'
import MapPage from './pages/mapPage'
import ProfilPage from './pages/profilPage'
import BeritaPage from './pages/beritaPages'
import ArtikelPage from './pages/artikelPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import useFetch from '../hooks/useFetch'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'




const App = () => {    
        const { data: articles, loading: articlesLoading, error: articlesError } = useFetch('http://localhost:1337/api/articles?populate=*')
        const { data: anggotas, loading: anggotasLoading, error: anggotasError } = useFetch('http://localhost:1337/api/anggotas?populate=*')
        const { data: wisatas, loading: wisatasLoading, error: wisatasError } = useFetch('http://localhost:1337/api/wisatas?populate=*')
        const { data: about, loading: aboutLoading, error: aboutError } = useFetch('http://localhost:1337/api/about?populate=*')
        const { data: introduction, loading: kataPengantarLoading, error: kataPengantarError } = useFetch('http://localhost:1337/api/introduction?populate=*')
        const { data: carousels, loading: carouselsLoading, error: carouselsError } = useFetch('http://localhost:1337/api/carousel?populate=*')
        
        if(articlesLoading || anggotasLoading || wisatasLoading || aboutLoading || kataPengantarLoading || carouselsLoading) return <p>Loading...</p>
        if(articlesError || anggotasError || wisatasError || aboutError || kataPengantarError || carouselsError) return <p>Error!</p>

        console.log('Articles: ', articles)
        console.log('Anggotas: ', anggotas)
        console.log('Wisatas: ', wisatas )
        console.log('About: ', about)
        console.log('Introduction: ', introduction)
        console.log('Carousels: ', carousels)

    return(
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<HomePage articles={articles} wisatas={wisatas} about={about} carousels={carousels} />} />
                <Route path='/wisata' element={<WisataPage wisatas={wisatas} articles={articles}/>} />                
                <Route path='/peta' element={<MapPage />} />
                <Route path='/profil' element={<ProfilPage anggotas={anggotas} introduction={introduction}/>} />
                <Route path='/berita' element={<BeritaPage articles={articles} />} /> 
                <Route path='/berita/artikel/:id'element={<ArtikelPage articles={articles} />} />                                
            </Routes>
            <Footer />                            
        </Router>
    )
}
export default App