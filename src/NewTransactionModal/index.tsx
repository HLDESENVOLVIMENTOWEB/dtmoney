import { Container } from './styles';
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