import Carousel from "./carrosel";
import CardCurso from './CardCurso.jsx'

//fonte: https://codesandbox.io/p/sandbox/array-infinite-carousel-react-js-forked-vyjccw?file=%2Fsrc%2FCarousel2.js%3A2%2C21-2%2C38

export default function ImplementaCarrosel({visivel, item, nItens}) {
  return (
    <div className="carrosel">
      <Carousel visibleItemsCount={visivel} withIndicator isInfinite>
        {
        nItens.map((i, k) => (
          <div style={{margin: '5px'}} key={k}>
            {item[i]}
          </div>
        ))}
      </Carousel>
    </div>
  );
}
