import Phone from '../../Assets/imgs/phone.png';
import { useModal } from '../../Context/ModalProvider';
import './style.scss';
import { useState } from 'react';

export default function CardModal() {
  const [quantity, setQuantity] = useState(1);
  const {closeModal} = useModal();

  const handleClose = () => {
    closeModal()
  };

  const increment = () => setQuantity(q => q + 1);
  const decrement = () => setQuantity(q => (q > 1 ? q - 1 : 1));

  return (
    <div className='card-modal'>
      <span className='close-btn' onClick={handleClose}>×</span>
      <div>
        <img src={Phone} alt="Produto" />
      </div>
      <div>
        <h1>LOREM IPSUM DOLOR SIT AMET</h1>
        <span className='price'>R$ 1.499,90</span>
        <span className='description'>
          Many desktop publishing packages and web page editors now many desktop publishing
        </span>
        <a className='details' href='#'>Veja mais detalhes do produto →</a>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="quantity-input">
            <button className='action-button' type="button" onClick={decrement}>-</button>
            <input
              type="number"
              value={quantity}
              min={1}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
            <button className='action-button' type="button" onClick={increment}>+</button>
          </div>
          <button className="buy" onClick={handleClose}>COMPRAR</button>
        </form>
      </div>
    </div>
  );
}
