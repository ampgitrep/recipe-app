import { Container, Columns } from "react-bulma-components";
import { useState } from "react";

const SlideShow = ({ recipeList }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const imageList = (recipeList) => {
    recipeList.map((image, id) => {
      return (
        <li key={id}>
          {image}
        </li>
      )
    })
  }
  const prevSlide = () => {
    console.log(currentSlide)
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(recipeList[recipeList.length - 1].id);
    }
  }

  const nextSlide = () => {
    console.log(currentSlide)
    if (currentSlide < recipeList.length - 1) {
      setCurrentSlide(currentSlide + 1)
    } else {
      setCurrentSlide(recipeList[0].id);
    }
  }

  return (
    <Container class="tile is-primary">
      <nav class="level">
          <div class=" card is-primary level-item has-text-centered">
            <div>
              <button class="button is-primary is-outlined" onClick={prevSlide} >
                {`<`}
              </button>
            </div>
            <figure class="image">
              <img src={recipeList[currentSlide].image} />
            </figure>
            <div>
              <button class="button is-primary is-outlined" onClick={nextSlide} >
                {`>`}
              </button>
            </div>
          </div>
      </nav>
    </Container>
  )
}

export default SlideShow;