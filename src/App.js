
import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Anime from "./components/Anime"
import Movie from "./components/Movie"
import TVShow from "./components/TVShow"
import "./style/landingPage.css";


function App() {
  return (
    <div>
      <div className="myBG">
        <NavigationBar />
        <Intro />

      </div>
      <div className="anime">
        <Anime/>

      </div>
      <div className="movie">
        <Movie/>
      </div>
      <div className="tvshow">
        <TVShow/>

      </div>
    </div>
  )
}

export default App;
