import { Routes, Route } from 'react-router-dom'
import './App.scss';
import { Header } from './components/Layouts/Header/Header';
import { Footer } from './components/Layouts/Footer/Footer';


/*======================  V I E W S    C O M P O N E N T S  =========================*/ 

import { PageHome } from './components/Pages/PageHome/PageHome'
import { PageProfileT } from './components/Pages/PageProfileT/PageProfileT';
import { PageProfileU } from './components/Pages/PageProfileU/PageProfileU';
import { PageQuotes } from './components/Pages/PageQuotes/PageQuotes';
import { PageTattooists } from './components/Pages/PageTattooists/PageTattooists';
import { Page404 } from './components/Pages/Page404/Page404';

import { PageFormSe } from './components/Pages/PageFormSe/PageFormSe';
import { PageRegistroT } from './components/Pages/PageRegistroT/PageRegistroT.jsx';
import { PageRegistroU } from './components/Pages/PageRegistroU/PageRegistroU.jsx';
import { PageTattos } from './components/Pages/___PageTattos/PageTattos';
import { PagePiercings } from './components/Pages/___PagePiercings/PagePiercings';
import { PageConsejos } from './components/Pages/__PageConsejos/PageConsejos';








function App() {
  return (
    <div className="App">
      <Header/>
          <Routes>
              <Route path='*' exact element= {<Page404/>} />
              <Route path='/' exact element= {<PageHome />} />
              <Route path='/perfilUsuarios' exact element= {<PageProfileU/>}/>
              <Route path='/perfilTatuadores' exact element= {<PageProfileT/>}/>
              <Route path='/citas' exact element= {<PageQuotes/>}/>
              <Route path='/artistas' exact element= {<PageTattooists/>}/>

              <Route path='/IngresarSesion' exact element= {<PageFormSe/>}/>
              <Route path='/RegistroUsuario' exact element= {<PageRegistroU/>}/>
              <Route path='/RegistroArtista' exact element= {<PageRegistroT/>}/>

              <Route path='/infoTatuajes' exact element= {<PageTattos/>}/>
              <Route path='/infoPiercings' exact element= {<PagePiercings/>}/>
              <Route path='/consejos' exact element= {<PageConsejos/>}/>

          </Routes>
      <Footer/>
    </div>
  );
}

export default App;
