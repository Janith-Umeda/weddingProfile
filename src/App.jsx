import SlideShow from './components/hearoSlideShow';
import MusicBtn from './components/music';
import NavigationBar from './components/navbar';
import Welcome from './components/welcome';
import './css/App.css';

function App() {

  const Images = ['s4.jpg','s6.jpg','sss.jpg'];
  const bgMusic = "/music/bgmusic.mp3";

  return (
    <>
      <SlideShow Images={Images}/>
      <MusicBtn musicSrc={bgMusic}/>
      <div className="" id="intro">
        <NavigationBar/>
        <div className="container">
          <Welcome/>
        </div>
      </div>
    </>
  );
}

export default App;
