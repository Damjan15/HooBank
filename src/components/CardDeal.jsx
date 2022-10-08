import { card } from "../assets";
import styles, { layout } from "../styles";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal <br className="hidden sm:block" /> in few easy steps</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dicta placeat, soluta nihil, ratione molestias libero excepturi aperiam aliquid quo et. Illo debitis placeat fugit dolorem labore corporis aliquam atque?</p>

        <Button styles="mt-10" />
      </div>

      <div className={layout.sectionImg}>
        <img src={card} className="w-full h-full" alt="card" />
      </div>
    </section>
  );
};

export default CardDeal;
