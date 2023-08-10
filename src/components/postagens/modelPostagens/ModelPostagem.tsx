
import FormularioPostagem from '../formularioPostagem/FormularioPostagem';

import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

import './ModelPostagem.css'

function ModelPostagem() {
  return (
    <>
      <Popup 
      trigger={<button className='border rounded px-4 hover:bg-white hover:text-blue-800'>Nova postagem</button>} modal>
        <div>
          <FormularioPostagem />
        </div>
      </Popup>
    </>
  );
}

export default ModelPostagem;