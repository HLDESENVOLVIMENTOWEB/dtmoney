import { Container, TransatctionTypeContainer, RadioBox } from './styles';
import iconmeImg from '../assets/income.svg';
import outcomeImg from '../assets/outcome.svg';
import closeImg from '../assets/close.svg';
import Modal from "react-modal";
import { useState } from 'react';

interface NewTransactionModalPops {
    isOpen: boolean;
    onRequestClose : () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalPops){
    const [type, setType] = useState('ganhos')

  

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
            />

           <input
             placeholder="Valor"
            />

           <TransatctionTypeContainer>
                <RadioBox 
                  type="button"
                  onClick={() => {setType('ganhos');}}
                  isActive={type === 'ganhos'}
                  >
                    <img src={iconmeImg}  alt="Entrada" />
                    <span>Entrada</span>
                </RadioBox>
                <RadioBox 
                  type="button"
                  onClick={() => setType('perdas')} 
                  isActive={type === 'perdas'}
                  >
                    <img src={outcomeImg}  
                    alt="Saida" />
                    <span>Saida</span>
                </RadioBox>
            </TransatctionTypeContainer>

           <input
             placeholder="Categoria"
            />

        

            <button type="submit">
                Cadastrar
            </button>

          </Container>

        </Modal>
    )
}