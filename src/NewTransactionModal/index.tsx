import { Container, TransatctionTypeContainer } from './styles';
import iconmeImg from '../assets/income.svg';
import outcomeImg from '../assets/outcome.svg';
import closeImg from '../assets/close.svg';
import Modal from "react-modal";

interface NewTransactionModalPops {
    isOpen: boolean;
    onRequestClose : () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalPops){


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
                <button 
                  type="button"
                  >
                    <img src={iconmeImg} alt="Entrada" />
                    <span>Entrada</span>
                </button>
                <button 
                  type="button"
                  >
                    <img src={outcomeImg} alt="Saida" />
                    <span>Saida</span>
                </button>
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