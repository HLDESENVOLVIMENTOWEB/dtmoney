import { useState } from 'react';
import logoImg from '../assets/logo.svg'
import Modal from 'react-modal';
import { Container, Content } from '../header/styles'


interface HeaderPops{
   onOpenTransactionModal : () => void;
}

export function Header({ onOpenTransactionModal } : HeaderPops){


    return (
        <Container>
           <Content> 
            <img src={logoImg} alt="dt money" />
           <button type="button" onClick={ onOpenTransactionModal }>
              Nova Transação
           </button>

           </Content>
        </Container>
    )
}