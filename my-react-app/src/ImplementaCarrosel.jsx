import Carousel from "./carrosel";
import CardCurso from './CardCurso.jsx'


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
