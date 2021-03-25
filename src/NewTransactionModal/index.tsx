import { Container } from './styles';
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
        >
            <h2>Cadastrar Transação</h2>
        </Modal>
    )
}