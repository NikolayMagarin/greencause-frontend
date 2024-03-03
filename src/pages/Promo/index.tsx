import { useParams } from 'react-router-dom';
import Header from '../../components/Header';

function Promo() {
  const { id } = useParams<'id'>();

  return (
    <>
      <Header />
      <div>Страница просмотра акции ("{id}")</div>
    </>
  );
}

export default Promo;
