import { useSearchParams } from 'react-router-dom';

const PokemonInfoPage = (props) => {
  let [searchParams] = useSearchParams();

  const id = searchParams.get('id');

  return <div>pokemon Id : {id}</div>;
};

export default PokemonInfoPage;
