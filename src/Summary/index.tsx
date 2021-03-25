import iconeImg from '../assets/income.svg'
import outcomeImg from '../assets/outcome.svg'
import total from '../assets/total.svg'

import { Container } from "./styles";

export function Summary(){
    return (
        <Container>
           <div>
               <header>
                   <p>Entradas</p>
                   <img src={iconeImg} alt="Entradas" />
               </header>
               <strong>R$ 100000,00</strong>
           </div>
           <div>
               <header>
                   <p>Entradas</p>
                   <img src={outcomeImg} alt="Saídas" />
               </header>
               <strong>R$ -10000,00</strong>
           </div>
           <div>
               <header>
                   <p>Entradas</p>
                   <img src={total} alt="Total" />
               </header>
               <strong>R$ 90000,00</strong>
           </div>
        </Container>
    )
}