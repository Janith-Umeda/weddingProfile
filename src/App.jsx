import SlideShow from './components/hearoSlideShow';
import './css/App.css';

function App() {

  const Images = ['s4.jpg','s6.jpg','sss.jpg'];

  return (
    <>
      <SlideShow Images={Images}/>
      <div className="App">
        Welcome to the Chathuska's Wedding.
      </div>
    </>
  );
}

export default App;
