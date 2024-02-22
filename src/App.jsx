import './App.css';
import Row from './Row';
import requests from './request';
import Bannerimg from "./Bannerimg";
import Nav from "./Nav"
function App() {
  return (
    <div className="App">
          <Nav/>

      <Bannerimg fetchUrl={requests.fetchNetflixOriginals}/>
      <Row isPoster={true}
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
            <Row
        title="Trending"
        fetchUrl={requests.fetchTrending}
      />
            <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
      />
            <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
      />
            <Row
        title="Comedy movies"
        fetchUrl={requests.fetchComedyMovies}
      />
            <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
      />
            <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
      />
            <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
      />
      
      
    </div>
  );
}

export default App;
