import { Container, TransatctionTypeContainer, RadioBox } from './styles';
import iconmeImg from '../assets/income.svg';
import outcomeImg from '../assets/outcome.svg';
import closeImg from '../assets/close.svg';
import Modal from "react-modal";
import { FormEvent, useState } from 'react';
import { api } from '../services/api';

interface NewTransactionModalPops {
    isOpen: boolean;
    onRequestClose : () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalPops){
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');  
  const [type, setType] = useState('ganhos');

   function handleCreateNewTransactionModal(event: FormEvent){
       event.preventDefault();

       const data = {
         title,
         value,
         category,
         type
       };

       api.post('/transactions', data)
  
    }

    return(
        <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >

          <button
          type="button" 
          onClick={onRequestClose} 
          className="react-modal-close">
            <img src={closeImg} alt="Fechamendo modal" />
          </button>

          <Container>
           <h2>Cadastar</h2>
            <input
             placeholder="Titulo"
             value={title}
             onChange={event=>setTitle(event.target.value)}
            />

           <input
             type="number"
             placeholder="Valor"
             value={value}
             onChange={event=>setValue(Number(event.target.value))}
            />

           <TransatctionTypeContainer>
                <RadioBox 
                  type="button"
                  onClick={() => {setType('ganhos');}}
                  isActive={type === 'ganhos'}
                  activeColor="green"
                  >
                    <img src={iconmeImg}  alt="Entrada" />
                    <span>Entrada</span>
                </RadioBox>
                <RadioBox 
                  type="button"
                  onClick={() => setType('perdas')} 
                  isActive={type === 'perdas'}
                  activeColor="red"
                  >
                    <img src={outcomeImg}  
                    alt="Saida" />
                    <span>Saida</span>
                </RadioBox>
            </TransatctionTypeContainer>

           <input
             placeholder="Categoria"
             value={category}
             onChange={event=>setCategory(event.target.value)}
            />

        

            <button type="submit">
                Cadastrar
            </button>

          </Container>

        </Modal>
    )
}