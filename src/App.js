import { Image } from 'antd';

import { Button } from '@atomic';
import { log } from '@utils';

import pokemonLogoSrc from './assets/images/pokedex.png';

function App() {
  log('hello');
  return (
    <div className="App">
      Hello
      <Image width={200} src={pokemonLogoSrc} />
      <Button type="primary">Click me</Button>
    </div>
  );
}

export default App;
