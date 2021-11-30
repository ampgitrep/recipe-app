import { Container, Columns } from "react-bulma-components";
import { useState } from "react";

const SlideShow = ({ recipeList }) => {
  const [currentSlide, setCurrentSlide] = useState(1);

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
    if (currentSlide > 1) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(recipeList[recipeList.length-1].id);
    }
  }

  const nextSlide = () => {
    console.log(currentSlide)
    if (currentSlide < recipeList.length -1) {
      setCurrentSlide(currentSlide + 1)
    } else {
      setCurrentSlide(recipeList[1].id);
    }
  }

  return (
    <Container>
      <div class="tile">
        <Columns>
          <Columns.Column>
            <button onClick={prevSlide}>
              {`<`}
            </button>
          </Columns.Column>
          <img src={recipeList[currentSlide].image}/>
          <Columns.Column>
            <button onClick={nextSlide}>
              {`>`}
            </button>
          </Columns.Column>
        </Columns>
      </div>
    </Container>
  )
}

export default SlideShow;