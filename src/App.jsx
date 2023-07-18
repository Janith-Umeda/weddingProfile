import SlideShow from './components/hearoSlideShow';
import MusicBtn from './components/music';
import NavigationBar from './components/navbar';
import './css/App.css';

function App() {

  const Images = ['s4.jpg','s6.jpg','sss.jpg'];

  return (
    <>
      <SlideShow Images={Images}/>
      <MusicBtn/>
      <div className="" id="intro">
        <NavigationBar/>
        <div className="App">
          Welcome to the Chathuska's Wedding.
        </div>
      </div>
    </>
  );
}

export default App;
