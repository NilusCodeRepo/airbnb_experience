import './App.css';
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Card from './Components/Card' 
import Contact from './Contact'
import Joke from './Components/Joke'
import jokesData from './Components/jokesData';
import cardsData from './Components/cardsData';

function App() {
  
  const cardElements=cardsData.map(card=>{
    return <Card 
    key={card.id}
    {...card}
    // img={card.img}
    // rating={card.ratings}
    // views={card.views}
    // city={card.city}
    // heading={card.heading}
    // price={card.price}
    // openSpot={card.openSpot}
    // location={card.location}
    />
  })

  return (
    <div className="contacts">
      <Navbar/>
      <Hero/>
      {cardElements}
      {/* <card/>
      <Card
      img="cooking_class.jpeg"
      rating={4.98}
      views={1035}
      city="Mexico"
      heading="Traditional Oaxacan Cooking Class"
      price="4,280"

      />

      <Card 
      img="horse_riding.jpg"
      rating={4.99 }
      views={564}
      city="Portugal"
      heading="Horseback Riding & Tequilla Tasting"
      price="5,694"
      />

       <Card 
      img="sailboat_relax.jpg"
      rating={4.98 }
      views={896}
      city="Spain"
      heading="View of Lisbon relaxing on a Sailboat"
      price="2,513"
      />

      <Card 
      img="wine_testing.jpg"
      rating={3.98 }
      views={889}
      city="Ukraine"
      heading="Ukrainian Wine Tasting"
      price="722"
      />  



 */}

      {
      /*<Joke
      setup="I got my daughter a fridge for her birthday."
      punch="I can't wait to see her face light up when she opens it."
      upvotes={5}
      comments={[{id:101,name:"xyz"},{id:102,name:"abc"}]}
      ispun={true}
      />

      <Joke
      setup="How did the hacker escape the police."
      punch="He just ransomware"
      />

      <Joke
      punch="scurvy"
      />
      */}
     {
     /* <Contact
     img="./Images/meow1.jpg"
     name="Mr. Whiskerson"
     phone="(122) 521 4587"
     email="mr.whiskerson@catnap.meow"
     />

     <Contact
     img="./Images/airbnb.png"
     name="Fluffy-kins"
     phone="(+121) 859 3365"
     email="fluffykins@catnap.meow"
     />

     <Contact
     img="./Images/swimmer1.jpg"
     name="Felix"
     phone="(+121) 555 3365"
     email="fellix@catnap.meow"
     />

     
     <Contact
     img="./Images/hero2.png"
     name="Pumpkin"
     phone="(+121) 356 4458"
     email="pumpkin@catnap.meow"
     />
     */ }
     
    </div>
  );
}

export default App;
