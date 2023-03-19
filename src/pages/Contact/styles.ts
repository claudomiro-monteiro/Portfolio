import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const FormContainer = styled(Dialog.Content)`
  width: 100%;
  max-width: 500px;
  border-radius: 0.375rem;
  padding: 2.5rem 3rem;
  /* background: ${(props) => props.theme['green-700']}; */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h1 {
    padding: 1rem 0;
  }

  form {
    width: 100%;
    background: ${(props) => props.theme['gray-800']};
    padding: 2rem 3rem;
    border-radius: 0.5rem;
    gap: 1rem;

    span {
      margin-bottom: 1.2rem;
      color: ${(props) => props.theme['red-500']};
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      background: ${(props) => props.theme['green-500']};
      margin-top: 2rem;
      padding: 0.8rem 3rem;
      border: 0;
      border-radius: 0.5rem;
      font-size: 0.875rem;
      font-family: 'Roboto Mono', sans-serif;
      cursor: pointer;

      transition: 0.3s ease-in-out;

      &:hover {
        filter: brightness(0.8);
        color: ${(props) => props.theme['gray-100']};
      }
    }
  }
`

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  margin-bottom: 0.5rem;
  margin-top: 1.8rem;

  label {
    position: absolute;
    left: 0;
    bottom: 5px;
    transition: 0.3s ease-in-out;
  }

  input {
    width: 100%;
    padding: 0.5rem 0;
    background: transparent;
    border: 0;
    border-bottom: 2px solid ${(props) => props.theme['gray-100']};
    font-size: 1rem;
    transition: 0.3s ease-in-out;

    &:focus ~ label {
      transform: translateY(-30px);
      font-size: 0.8rem;
      color: ${(props) => props.theme['green-300']};
    }

    &:focus {
      border-bottom: 2px solid ${(props) => props.theme['green-300']};
    }

    &:not(:placeholder-shown):not(:focus) + label {
      transform: translateY(-30px);
      font-size: 0.8rem;
      color: ${(props) => props.theme['green-300']};
    }

    &:not(:placeholder-shown):not(:focus) {
      border-bottom: 2px solid ${(props) => props.theme['green-300']};
    }
  }

  textarea {
    width: 100%;
    padding: 0.5rem 0;
    background: transparent;
    border: 0;
    border-bottom: 2px solid ${(props) => props.theme['gray-100']};
    font-size: 1rem;
    transition: 0.3s ease-in-out;

    &:focus ~ label {
      transform: translateY(-47px);
      font-size: 0.8rem;
      color: ${(props) => props.theme['green-300']};
    }

    &:focus {
      border-bottom: 2px solid ${(props) => props.theme['green-300']};
    }

    &:not(:placeholder-shown):not(:focus) + label {
      transform: translateY(-47px);
      font-size: 0.8rem;
      color: ${(props) => props.theme['green-300']};
    }

    &:not(:placeholder-shown):not(:focus) {
      border-bottom: 2px solid ${(props) => props.theme['green-300']};
    }
  }
`
export const ClosedButton = styled(Dialog.Close)`
  position: absolute;
  border: 0;
  top: 8rem;
  right: 4rem;
  background: transparent;
  color: ${(props) => props.theme['gray-500']};
  cursor: pointer;

  @media (max-width: 360px) {
    top: 10rem;
    right: 3.5rem;
  }
`
