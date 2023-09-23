import './App.css';

import gaiola from './assets/images/gaiola.png';
import passaro from './assets/images/passaro.png'
import porta from './assets/images/porta.png'

import { useState, useEffect } from 'react';

function App() {
  const [toogle, setToogle] = useState(true);
  const [marginLeft, setMarginLeft] = useState('1%');
  const [backNone, setBackNone] = useState('none');
  const [passaroHidden, setPassaroHidden] = useState('');
  const [portaTop, setPortaTop] = useState(0);
  const [portaLeft, setPortaLeft] = useState(0);
  const [portaDeg, setPortaDeg] = useState('rotate(90deg)');

  useEffect(() => {
    setMarginLeft((state) => toogle ? '1%' : '40%');
    setBackNone((state) => toogle ? 'none' : `url(${passaro})`);
    setPassaroHidden((state) => toogle ? '' : 'hidden');

    setPortaTop((state) => toogle ? 313 : 260);
    setPortaLeft((state) => toogle ? '23.5%' : '60%');
    setPortaDeg((state) => toogle ? '90deg' : '0deg');


  }, [toogle])

  return (
    <div className="App">
      <button onClick={e => setToogle(state => !state)}>Vem pra cá</button>
      <div className='container'>
        <img src={gaiola} style={{
          marginLeft: marginLeft,
          backgroundImage: backNone,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }} />
        <img src={passaro} style={{
          visibility: passaroHidden
        }} />
      </div>
      <img src={porta} style={{
        position: 'absolute',
        top: portaTop,
        left: portaLeft,
        rotate: portaDeg
      }} />
    </div>
  );
}

export default App;
