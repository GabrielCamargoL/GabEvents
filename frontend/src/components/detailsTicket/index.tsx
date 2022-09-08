import { FormEvent, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import lottie from "lottie-web";
import success_lottie from '../../assets/lottieSuccess.json';

import api from "../../services/api";
import { Card, Col, Container, FormBuyContainer, Row, SuccessAnimation } from "./styles";


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
  const [success, setSuccess] = useState<boolean>(false);

  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const params = useParams();

  const container = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (success && container.current) {
      lottie.loadAnimation({
        container: container.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: success_lottie,
      });
    }
  }, [success]);


  async function handleBuyTicket(event: FormEvent) {
    event.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      navigate('/', { replace: true })
    }, 5000);
  }

  return (
    <>
      {success ?
        <SuccessAnimation>
          <div id="loading_container">
            <div ref={container} className="loading_lottie" />
            <h2>Compra Realizada com sucesso!</h2>
            <h3>Você será redirecionado para a Home.</h3>
          </div>

        </SuccessAnimation>
        :
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

            <label htmlFor="name">Nome no cartão</label>
            <input
              id="name"
              placeholder='Gabriel da Silva'
              type='text'
              value={nameOnCard}
              onChange={(event) => { setNameOnCard(event.target.value) }}
            />

            <label htmlFor="cardNumber">Número do Cartão</label>
            <input
              id='cardNumber'
              placeholder='9999 9999 9999 9999'
              type='text'
              value={cardNumber}
              onChange={(event) => { setCardNumber(event.target.value) }}
            />


            <Row>
              <Col>
                <label htmlFor="expirationDate">Data de Expiração</label>
                <input
                  id='expirationDate'
                  placeholder='11/28'
                  type='text'
                  value={expirationDate}
                  onChange={(event) => { setExpirationDate(event.target.value) }}
                />
              </Col>
              <Col>
                <label htmlFor="securityCode">CVV</label>
                <input
                  id='securityCode'
                  placeholder='Senha do Cartão'
                  type='password'
                  value={securityCode}
                  onChange={(event) => { setSecurityCode(event.target.value) }}
                />
              </Col>
            </Row>

            <button type="submit">Comprar</button>
          </FormBuyContainer>
        </Container >
      }
    </>
  )
}