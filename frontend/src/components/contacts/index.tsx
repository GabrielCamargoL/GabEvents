import { ColLabelInput, ContactsContainer, Container, FormContainer, Row } from "./styles";

import phoneIcon from '../../assets/Contacts/phone.svg';
import mailIcon from '../../assets/Contacts/mail.svg';
import locationIcon from '../../assets/Contacts/location.svg';

export function Contacts() {
  return (
    <>
      <Container id='contact'>
        <ContactsContainer>

          <h2>Fale Conosco</h2>
          <h3>Precisa de um help? Podemos te ajudar</h3>

          <Row>
            <img src={phoneIcon} alt="" />
            <h5>(99) 99999 9999</h5>
          </Row>

          <Row>
            <img src={mailIcon} alt="" />
            <h5>gabevents@email.com</h5>
          </Row>

          <Row>
            <img src={locationIcon} alt="" />
            <h5>Rua endereço - Bairro - Cidade - SP</h5>
          </Row>

        </ContactsContainer>
        <FormContainer>
          <h3>Preencha os dados</h3>

          <ColLabelInput>
            <input id='name'
              placeholder="Gabriel da Silva"
              type='text'
            />
            <label htmlFor="name">Nome</label>
          </ColLabelInput>

          <ColLabelInput>
            <input id='email'
              placeholder="gabrielsilva@email.com"
              type='email'
            />
            <label htmlFor="email">E-mail</label>
          </ColLabelInput>

          <ColLabelInput>
            <textarea id='message'
              placeholder="Escreva aqui sua mensagem"

            />
            <label id='message-label' htmlFor="message">Mensagem</label>
          </ColLabelInput>

          <button type="submit">Enviar</button>
        </FormContainer>
      </Container>
    </>
  )
}