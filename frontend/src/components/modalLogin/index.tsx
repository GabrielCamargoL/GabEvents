import { FormEvent, useState, useContext } from 'react';
import Modal from 'react-modal';

import closeImg from '../../assets/ModalLogin/close.svg';

import { Container } from './styles';


interface ModalLoginProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
export function ModalLogin({ isOpen, onRequestClose }: ModalLoginProps) {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [isSignIn, setIsSignIn] = useState<boolean>(true);

  async function handleLogin(event: FormEvent) {
    event.preventDefault();
    onRequestClose();
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName='react-modal-overlay'
        className='react-modal-content'
      >
        <button
          type="button"
          onClick={onRequestClose}
          className='react-modal-close'
        >
          <img src={closeImg} alt="fechar modal" />
        </button>

        <Container onSubmit={(event) => handleLogin(event)}>
          <h2>{isSignIn ? 'Login' : 'Cadastro'}</h2>

          {isSignIn ? (<></>) : (
            <>
              <input
                placeholder='Nome de Usuário'
                type='text'
                value={username}
                onChange={(event) => { setUsername(event.target.value) }}
              />
            </>
          )}

          <input
            placeholder='Email'
            type='email'
            value={email}
            onChange={(event) => { setEmail(event.target.value) }}
          />

          <input
            placeholder='Senha'
            type='password'
            value={password}
            onChange={(event) => { setPassword(event.target.value) }}
          />

          {isSignIn ? (
            <p onClick={() => setIsSignIn(!isSignIn)}>Ainda não tem uma conta? Crie agora mesmo</p>
          ) : (
            <p onClick={() => setIsSignIn(!isSignIn)}>Já tem uma conta? Entre clicando aqui</p>
          )}

          <button type="submit">{isSignIn ? 'Entrar' : 'Cadastrar'}</button>
        </Container>
      </Modal>
    </>
  )
}