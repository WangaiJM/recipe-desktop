import Hero from "./../assets/images/image-omelette.jpeg";
import "./main.scss";

const Main = () => {
  return (
    <>
      <div className="container">
        <header>
          <img src={Hero} alt="Omelette" />
          <h1 className="title">Simple Omelette Recipe</h1>
          <p>
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
        </header>
        <main>
          <article className="time">
            <h2 className="sub-title">Preparation time</h2>
            <ul className="bullets">
              <li>
                <span className="strong">Total: </span>Approximately 10 minutes
              </li>
              <li>
                <span className="strong">Preparation: </span>5 minutes
              </li>
              <li>
                <span className="strong">Cooking: </span>5 minutes
              </li>
            </ul>
          </article>
          <section className="ingredients">
            <h2 className="sub-title">Ingredients</h2>
            <ul className="bullets">
              <li>2 - 3 large eggs</li>
              <li>salt to taste</li>
              <li>Pepper to taste</li>
              <li>1 tablespoon of butter or oil</li>
              <li>
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </li>
            </ul>
          </section>
          <section className="instructions">
            <h2 className="sub-title">Instructions</h2>
            <ol>
              <li>
                <span className="strong">Beat the eggs: </span>In a bowl, beat
                the eggs with a pinch of salt and pepper until they are well
                mixed. You can add a tablespoon of water or milk for a fluffier
                texture.
              </li>
              <li>
                <span className="strong">Heat the pan: </span>Place a non-stick
                frying pan over medium heat and add butter or oil.
              </li>
              <li>
                <span className="strong">Cook the omelette: </span>Once the
                butter is melted and bubbling, pour in the eggs. Tilt the pan to
                ensure the eggs evenly coat the surface.
              </li>
              <li>
                <span className="strong">Add fillings (optional): </span>When
                the eggs begin to set at the edges but are still slightly runny
                in the middle, sprinkle your chosen fillings over one half of
                the omelette.
              </li>
              <li>
                <span className="strong">Fold and serve: </span>As the omelette
                continues to cook, carefully lift one edge and fold it over the
                fillings. Let it cook for another minute, then slide it onto a
                plate.
              </li>
              <li>
                <span className="strong">Enjoy: </span>Serve hot, with
                additional salt and pepper if needed.
              </li>
            </ol>
          </section>
          <section className="nutrition">
            <h2 className="sub-title">Nutrition</h2>
            <p>
              The table below shows nutritional values per serving without the
              additional fillings.
            </p>
            <table>
              <tr>
                <td>Calories</td>
                <td>277kcal</td>
              </tr>
              <tr>
                <td>Carbs</td>
                <td>0g</td>
              </tr>
              <tr>
                <td>Protein</td>
                <td>20g</td>
              </tr>
              <tr>
                <td>Fat</td>

                <td>22g</td>
              </tr>
            </table>
          </section>
        </main>
      </div>
    </>
  );
};

export default Main;
