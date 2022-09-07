import { FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";
import { Card, Container, FormBuyContainer, Row } from "./styles";

export interface IShow {
  _id?: string;
  title?: string;
  description?: string;
  hashtags?: Array<string>;
  price?: number;
  imgSrc?: string;
  created_at?: Date;
}

export function DetailsTicket() {
  const [show, setShow] = useState<IShow>();
  const [nameOnCard, setNameOnCard] = useState('');
  const [cardNumber, setCardNumber] = useState<string>('');
  const [expirationDate, setExpirationDate] = useState('');
  const [securityCode, setSecurityCode] = useState<string>('');

  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const fetchShow = async () => {
      if (!token) {
        alert('faça login para continuar');
        navigate('/', { replace: true })
      }

      const { data } = await api.get(`shows/${params.id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setShow(data);
    }
    fetchShow();
  }, [token, navigate, params]);

  async function handleBuyTicket(event: FormEvent) {
    event.preventDefault();
    alert('Compra Realizada com sucesso.')
    navigate('/', { replace: true });
  }

  return (
    <>
      <Container>
        <div>
          <h2 id='searchCategory'>Informações do Ingresso</h2>
          {show ? (
            <Card>
              <img src={show?.imgSrc} alt="" />

              <div className='card-texts-container'>
                <p className='title'>{show?.title}</p>
                <p className='description'>{show?.description}</p>
                <p className='price'>
                  {show.price ? (new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(show.price)) : (<></>)}
                </p>
                <p className='hashtags'>{show?.hashtags?.map((hashtag) => {
                  return hashtag + ' ';
                })}</p>
              </div>
            </Card>
          ) : (<></>)}
        </div>

        <FormBuyContainer onSubmit={(e) => handleBuyTicket(e)}>
          <h2>Finalizar de Compra</h2>

          <input
            placeholder='Email'
            type='text'
            value={nameOnCard}
            onChange={(event) => { setNameOnCard(event.target.value) }}
          />

          <input
            placeholder='9999 9999 9999 9999'
            type='text'
            value={cardNumber}
            onChange={(event) => { setCardNumber(event.target.value) }}
          />


          <Row>
            <input className="half-input"
              placeholder='11/28'
              type='text'
              value={expirationDate}
              onChange={(event) => { setExpirationDate(event.target.value) }}
            />

            <input className="half-input"
              placeholder='Senha do Cartão'
              type='password'
              value={securityCode}
              onChange={(event) => { setSecurityCode(event.target.value) }}
            />
          </Row>

          <button type="submit">Comprar</button>
        </FormBuyContainer>
      </Container >
    </>
  )
}