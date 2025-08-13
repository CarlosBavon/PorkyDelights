import "../styles/Home.css";
import DishCard from "../components/DishCard";
import Newsletter from "../components/Newsletter";
import PorkRibs from '../images/pork-ribs.jpeg'
import PorkBelly from '../images/pork-belly.jpeg'
import PorkChops from '../images/pork-chops.jpeg'

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <div className="overlay">
            <h1>Porky Delights</h1>
            <p>Indulge in the Juiciest Pork Dishes Around</p>
            <button className="cta-btn" onClick={() => {
                document.getElementById("featured").scrollIntoView({ behavior: "smooth" });
            }}>
                View Our Favorites
            </button>

        </div>
      </div>

      <section className="featured" id="featured">
        <h2>Our Favorites</h2>
        <div className="dishes">
            <DishCard
                title="Spicy Pork Ribs"
                description="Tender ribs marinated with sause."
                price="Ksh 600"
                imgSrc={PorkRibs}
            />
            <DishCard
                title="Crispy Pork Belly"
                description="Served with a tangy sauce."
                price="Ksh 750"
                imgSrc={PorkBelly}
            />
            <DishCard
                title="Pork Chops"
                description="Seasoned to great perfection."
                price="Ksh 900"
                imgSrc={PorkChops}
            />
        </div>
      </section>
      <Newsletter />
    </div>
  );
};

export default Home;
