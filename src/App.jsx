import CountDown from './components/countDown';
import GroomAndBride from './components/groomandbride';
import SlideShow from './components/hearoSlideShow';
import MusicBtn from './components/music';
import NavigationBar from './components/navbar';
import Welcome from './components/welcome';
import WhenWhere from './components/whenWhere';
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
  const DeadLine = '2023-07-22T21:14:00';
  const groomAndBride = {
    groom:{
      name:'Kusal Lakshan',
      image:'/images/dp1.jpg',
      about:`Sasani is my best friend, my human diary, and my other half. No one in my life 
            understands me the way she does. The best thing about her is that she has this way of 
            making life easy and relaxed. With her, I can share anything and everything! Her 
            understanding of life and love is what took us this far together. Not only to me, but 
            Sasani is a good friend, a good listener and a caretaker for almost everyone around her. 
            If you have ever met her, you would know that you can let your heart out with her because 
            she is this wonderful, non-judgemental, kind-hearted person. She and I are honestly best 
            buddies rather than a romantic couple who shares our entire lives together. Sasani, I 
            can’t wait to begin my forever life with you.`
    },
    bride:{
      name:'Sasani Jayasinghe',
      image:'/images/dp-4.jpg',
      about:`Kusal is the most gentle and kind-hearted man I’ve ever met. He has this very 
            special of making me loved, safe and happy and he is always there when I need him. He 
            understands me really well and he is always prepared to make me laugh. His humble 
            personality never fails to make me joyful. To be honest, he is everything I’ve always 
            wanted. We have the same taste in music, We love the same Cuisine, We love to travel and 
            we love to live a life full of adventures, memories, and good friends. These are the 
            things that brought us together. I really can’t wait to spend the rest of my life with him.`
    }
  };
  const whenWhereData = {
    regCards:[
      {
        image:'/images/reg.jpg',
        title:'Registration',
        desc:'We will be hosting an intimate registration for immediate family.',
        venue:'Saturday, 10 December, 2022 — 4.40 PM — Hilton Colombo.'
      },
      {
        image:'/images/poruwa.jpg',
        title:'Poruwa Ceremony',
        desc:`Poruwa - Saying our pledges to each other, promised to stay and work it 
              through, not just today but forever! Please be there at 5.30 Pm to share 
              this sacrament moment of our wedding.`,
        venue:'Saturday, 10 December, 2022 — 5.45 PM — Hilton Colombo.'
      }
    ],
    partyDesc:[
      {
        heading:'Poruwa Ceremony and Traditional Vows',
        subheading:'We invite you to be with us as we begin our new life together and will be united in the traditional poruwa ceremony'
      },
      {
        heading:'First dance',
        subheading:'The bride and groom will perform their first dance!'
      },
      {
        heading:'Dinner',
        subheading:'Enjoy our international buffet with a range of hot and cold desserts! Oh! Don’t forget to try our amazing wedding cake….'
      },
      {
        heading:'Going away Ceremony',
        subheading:'We welcome you to be with us for our joyful going away ceremony.'
      },
      {
        heading:'Entertainment',
        subheading:'Don’t forget to bring your dancing shoes! Can’t wait to see you there.'
      }
    ]
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
        <CountDown time={DeadLine} />
        <div className="container">
          <GroomAndBride data={groomAndBride}/>
        </div>
        <WhenWhere data={whenWhereData}/>
      </div>
    </>
  );
}

export default App;
