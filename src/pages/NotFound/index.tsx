import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <div>Похоже, страницы, которую вы ищете, не существует(</div>
      <Link to={'/'}>Вернутьсья на главную</Link>
    </div>
  );
}

export default NotFound;
