import { useForm } from 'react-hook-form'
import * as Dialog from '@radix-ui/react-dialog'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { ClosedButton, FormContainer, InputContainer, Overlay } from './styles'
import { PaperPlaneRight, X } from 'phosphor-react'

const newFormValidationSchema = z.object({
  name: z
    .string()
    .nonempty({ message: 'Digite seu nome.' })
    .min(3, 'Digite um nome válido.'),
  email: z
    .string()
    .nonempty({ message: 'Digite seu email.' })
    .email({ message: 'Digite um email válido.' }),
  message: z
    .string()
    .nonempty({ message: 'Deixe sua mensagem.' })
    .min(10, 'Sua mensagem deve ter no mínimo 10 caracteres.'),
})

const newFormValidationRequired = newFormValidationSchema.required()

type newFormValidation = z.infer<typeof newFormValidationRequired>

export function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<newFormValidation>({
    resolver: zodResolver(newFormValidationSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  function handleNewContactForm(data: any) {
    console.log(data)
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <FormContainer>
        <h1>Entre em contato conosco!</h1>

        <form onSubmit={handleSubmit(handleNewContactForm)}>
          <ClosedButton asChild>
            <X size={24} />
          </ClosedButton>
          <InputContainer>
            <input
              type="text"
              placeholder=" "
              autoComplete=""
              {...register('name')}
            />
            <label htmlFor="name">Nome</label>
          </InputContainer>
          {errors.name?.message && <span>{errors.name.message}</span>}

          <InputContainer>
            <input type="text" placeholder=" " {...register('email')} />
            <label htmlFor="email">Email</label>
          </InputContainer>
          {errors.email?.message && <span>{errors.email.message}</span>}

          <InputContainer>
            <textarea rows={2} placeholder=" " {...register('message')} />
            <label htmlFor="message">Deixe sua mensagem</label>
          </InputContainer>
          {errors.message?.message && <span>{errors.message.message}</span>}

          <button type="submit">
            <PaperPlaneRight size={26} />
            Enviar
          </button>
        </form>
      </FormContainer>
    </Dialog.Portal>
  )
}
