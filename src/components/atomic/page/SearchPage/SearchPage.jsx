import { Logo } from '@atomic';
import pokemonLogo from '@/assets/images/pokedex.png';

const SearchPage = () => {
  return (
    <div>
      <Logo src={pokemonLogo} width={300} />
    </div>
  );
};

export default SearchPage;
