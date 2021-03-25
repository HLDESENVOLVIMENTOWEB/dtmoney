import { useEffect } from "react";
import { api } from '../services/api';
import { Container } from "./styles";

export function TransactionsTable(){

    useEffect(() => {
          api('/transactions')
          .then(response => console.log(response.data))
    }, [])


    return (
        <Container>
              <table>
                  <thead>
                      <tr>
                          <th>Titulo</th>
                          <th>Valor</th>
                          <th>Categoria</th>
                          <th>Data</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>Desenvolvimento de website</td>
                          <td>R$ 12.000</td>
                          <td className="ganhos">site</td>
                          <td>12/12/2020</td>
                      </tr>
                      <tr>
                          <td>Desenvolvimento de website</td>
                          <td>R$ 12.000</td>
                          <td className="perdas">site</td>
                          <td>12/12/2020</td>
                      </tr>
                      <tr>
                          <td>Desenvolvimento de website</td>
                          <td>R$ 12.000</td>
                          <td className="perdas">site</td>
                          <td>12/12/2020</td>
                      </tr>
                      <tr>
                          <td>Desenvolvimento de website</td>
                          <td>R$ 12.000</td>
                          <td className="ganhos">site</td>
                          <td>12/12/2020</td>
                      </tr>
                  </tbody>
              </table>
        </Container>
    )
}