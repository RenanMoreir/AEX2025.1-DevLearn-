import Carousel from "./carrosel";
import CardCurso from './CardCurso.jsx'


//import "./styles.css";

const item = [<CardCurso/>, <CardCurso/>, <CardCurso/>, <CardCurso/>, <CardCurso/>];
//const item = ["renan", "matheus", "pedro"];


export default function ImplementaCarrosel() {
  return (
    <div className="carrosel">
      <Carousel visibleItemsCount={3} withIndicator isInfinite>
        {[0, 1, 2, 3, 4].map((i, k) => (
          <div style={{margin: '5px'}} key={k}>
            {item[i]}
          </div>
        ))}
      </Carousel>
    </div>
  );
}
