import { useEffect } from "react";
import "../styles/Home.css";
import DishCard from "../components/DishCard";
import Newsletter from "../components/Newsletter";
import PorkRibs from "../images/pork-ribs.jpeg";
import PorkBelly from "../images/pork-belly.jpeg";
import PorkChops from "../images/pork-chops.jpeg";

const dishes = [
  {
    title: "Spicy Pork Ribs",
    description:
      "Fall-off-the-bone ribs, dry-rubbed and marinated overnight in our house hot sauce.",
    price: "Ksh 600",
    imgSrc: PorkRibs,
  },
  {
    title: "Crispy Pork Belly",
    description:
      "Slow-roasted until the skin shatters, finished with a tangy citrus glaze.",
    price: "Ksh 750",
    imgSrc: PorkBelly,
  },
  {
    title: "Pork Chops",
    description:
      "Char-grilled over open flame and seasoned to perfection, every single time.",
    price: "Ksh 900",
    imgSrc: PorkChops,
  },
];

const process = [
  {
    step: "01",
    title: "Marinate",
    text: "Cuts rest overnight in our dry rub and citrus marinade, soaking in flavor before they see any heat.",
  },
  {
    step: "02",
    title: "Slow-Smoke",
    text: "Hours over low coals until the meat turns tender enough to fall off the bone.",
  },
  {
    step: "03",
    title: "Glaze & Char",
    text: "One last pass over open flame locks in a sticky glaze and that signature char.",
  },
  {
    step: "04",
    title: "Served Hot",
    text: "Plated fresh off the grill and straight to your table — no reheats, no shortcuts.",
  },
];

const testimonials = [
  {
    quote:
      "Best pork ribs I've had in Nairobi, hands down. That sauce is unreal.",
    name: "Kevin M.",
  },
  {
    quote:
      "The pork belly with that tangy glaze is what I think about all week.",
    name: "Achieng O.",
  },
  {
    quote: "Never once disappointed. It's become my go-to after work.",
    name: "Brian K.",
  },
];

const Home = () => {
  useEffect(() => {
    const revealEls = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      revealEls.forEach((el) => el.classList.add("in-view"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home">
      <div className="hero">
        <div className="hero-smoke" aria-hidden="true" />
        <div className="overlay">
          <span className="tag tag-light">Hand-Cut &middot; Slow-Smoked</span>
          <h1>Porky Delights</h1>
          <p>Indulge in the juiciest, most flavorful pork dishes around.</p>
          <div className="hero-actions">
            <button className="cta-btn" onClick={() => scrollTo("featured")}>
              View Our Favorites
            </button>
            <button
              className="cta-btn cta-btn--ghost"
              onClick={() => scrollTo("story")}
            >
              Our Story
            </button>
          </div>
        </div>
        <button
          className="scroll-cue"
          onClick={() => scrollTo("featured")}
          aria-label="Scroll to the menu"
        >
          <span />
        </button>
      </div>

      <section className="featured" id="featured">
        <div className="section-head reveal">
          <span className="tag">On The Grill Today</span>
          <h2>Our Favorites</h2>
          <p>Hand-picked crowd favorites, made fresh every day.</p>
        </div>
        <div className="dishes">
          {dishes.map((dish) => (
            <div className="reveal" key={dish.title}>
              <DishCard
                title={dish.title}
                description={dish.description}
                price={dish.price}
                imgSrc={dish.imgSrc}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="process">
        <div className="section-head reveal">
          <span className="tag tag-light">How We Cook It</span>
          <h2>From Fire To Fork</h2>
        </div>
        <div className="process-steps">
          {process.map((p) => (
            <div className="process-step reveal" key={p.step}>
              <span className="process-number">{p.step}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="story" id="story">
        <div className="story-content reveal">
          <span className="tag">Our Story</span>
          <h2>Started On A Backyard Grill</h2>
          <p>
            Porky Delights began with one grill, one family recipe, and a
            Saturday afternoon that never really ended. What started as
            weekend cooking for friends turned into a marinade worth
            queueing for, and a house sauce nobody would give up the recipe
            to.
          </p>
          <p>
            Today the grill is bigger, but nothing about the process has
            changed — cuts are still marinated by hand, still smoked low and
            slow, still served the moment they come off the fire.
          </p>
          <button className="cta-btn" onClick={() => scrollTo("featured")}>
            Explore The Menu
          </button>
        </div>
      </section>

      <section className="testimonials">
        <div className="section-head reveal">
          <span className="tag">Happy Customers</span>
          <h2>What People Are Saying</h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((t) => (
            <div className="testimonial-card reveal" key={t.name}>
              <span className="quote-mark" aria-hidden="true">
                &ldquo;
              </span>
              <p>{t.quote}</p>
              <span className="testimonial-name">{t.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-banner reveal">
        <h2>Hungry Yet?</h2>
        <p>Your next favorite meal is waiting on the grill.</p>
        <button className="cta-btn" onClick={() => scrollTo("featured")}>
          View Our Favorites
        </button>
      </section>

      <Newsletter />
    </div>
  );
};

export default Home;
