import CountDown from './components/countDown';
import SlideShow from './components/hearoSlideShow';
import MusicBtn from './components/music';
import NavigationBar from './components/navbar';
import Welcome from './components/welcome';
import './css/App.css';

function App() {

  const Images = ['s4.jpg','s6.jpg','sss.jpg'];
  const bgMusic = "/music/bgmusic.mp3";
  const welcomeData = {
    heading:'Welcome to our wedding website.',
    description:`we can’t wait to celebrate our special day with you. 
                We’ve created this website as a convenient and interactive way to 
                share all of the important details with you in the lead up to our 
                wedding. Thank you for your ongoing love and support. We are so 
                excited to share this day with you!`,
    groom:{
      image:'/images/p1.jpg',
      name:'KUSAL LAKSHAN'
    },
    bride:{
      image:'/images/p2.jpg',
      name:'SASANI JAYASINGHE'
    },
    date:'10 December,2022',
    venue:'Hilton.Colombo'
  }

  return (
    <>
      <SlideShow Images={Images}/>
      <MusicBtn musicSrc={bgMusic}/>
      <div className="" id="intro">
        <NavigationBar/>
        <div className="container">
          <Welcome data={welcomeData}/>
        </div>
        <CountDown />
      </div>
    </>
  );
}

export default App;
