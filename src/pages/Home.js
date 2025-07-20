import "../styles/Home.css";
import DishCard from "../components/DishCard";
import Newsletter from "../components/Newsletter";

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
                name="Spicy Pork Ribs"
                description="Tender ribs marinated in a spicy blend of herbs and spices."
                price="$15.99"
                imageUrl="/images/spicy-pork-ribs.jpg"
            />
            <DishCard
                name="Crispy Pork Belly"
                description="Crispy on the outside, juicy on the inside, served with a tangy sauce."
                price="$12.99"
                imageUrl="/images/crispy-pork-belly.jpg"
            />
            <DishCard
                name="Pork Schnitzel"
                description="Breaded pork cutlet served with a side of mashed potatoes."
                price="$10.99"
                imageUrl="/images/pork-schnitzel.jpg"
            />
        </div>
      </section>
      <Newsletter />
    </div>
  );
};

export default Home;
