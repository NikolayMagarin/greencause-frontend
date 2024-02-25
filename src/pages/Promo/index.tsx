import { useParams } from 'react-router-dom';

function Promo() {
  const { id } = useParams<'id'>();

  return <div>Страница просмотра акции ("{id}")</div>;
}

export default Promo;
