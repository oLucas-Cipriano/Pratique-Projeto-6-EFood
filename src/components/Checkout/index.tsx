import { useEffect, useState } from 'react'
import InputMask from 'react-input-mask'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import { useFormik } from 'formik'

import { RootReducer } from '../../store'
import { usePurchaseMutation } from '../../services/api'
import { open, clear } from '../../store/reducers/cart'
import { close } from '../../store/reducers/checkout'
import { getTotalPrice, parseToBrl } from '../../utils'

import * as S from './styles'

const Checkout = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const { isOpen } = useSelector((state: RootReducer) => state.checkout)
  const [purchase, { data, isSuccess, isLoading, reset }] =
    usePurchaseMutation()

  const [visualizandoEntrega, setVisualizandoEntrega] = useState(true)

  const dispatch = useDispatch()

  const closeCheckout = () => {
    setVisualizandoEntrega(true)
    dispatch(close())
    if (isSuccess) {
      reset()
    }
  }

  const backToCart = () => {
    dispatch(open())
    dispatch(close())
  }

  const form = useFormik({
    initialValues: {
      fullName: '',
      adress: '',
      city: '',
      cep: '',
      adressNumber: '',
      complement: '',
      cardOwner: '',
      cardNumber: '',
      expiresMonth: '',
      expiresYear: '',
      cardCode: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      adress: Yup.string()
        .min(5, 'O endereço precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(5, 'A cidade precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cep: Yup.string()
        .min(9, 'O campo precisa ter 9 caracteres')
        .max(9, 'O campo precisa ter 9 caracteres')
        .required('O campo é obrigatório'),
      adressNumber: Yup.string().required('O campo é obrigatório'),
      complement: Yup.string(),

      cardOwner: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string()
        .min(19, 'O campo precisa ter 19 caracteres')
        .max(19, 'O campo precisa ter 19 caracteres')
        .required('O campo é obrigatório'),
      expiresMonth: Yup.string()
        .min(2, 'O campo precisa ter 2 caracteres')
        .max(2, 'O campo precisa ter 2 caracteres')
        .required('O campo é obrigatório'),
      expiresYear: Yup.string()
        .min(2, 'O campo precisa ter 2 caracteres')
        .max(2, 'O campo precisa ter 2 caracteres')
        .required('O campo é obrigatório'),
      cardCode: Yup.string()
        .min(3, 'O campo precisa ter 3 caracteres')
        .max(3, 'O campo precisa ter 3 caracteres')
        .required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.price
        })),
        delivery: {
          reciever: values.fullName,
          adress: {
            adress: values.adress,
            city: values.city,
            zipCode: values.cep,
            adressNumber: values.adressNumber,
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardOwner,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        }
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isValid = fieldName in form.errors
    const hasError = isTouched && isValid

    return hasError
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCheckout}></S.Overlay>
      <S.SideBar>
        {isSuccess && data ? (
          <S.Completion>
            <h3>Pedido realizado - {data.orderId}</h3>
            <p className="margin-top">
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
              <br />
              <br />
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
              <br />
              <br />
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
              <br />
              <br />
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <S.Button
              onClick={closeCheckout}
              type="button"
              title="Clique aqui para concluir"
            >
              Concluir
            </S.Button>
          </S.Completion>
        ) : (
          <>
            <form onSubmit={form.handleSubmit}>
              {visualizandoEntrega ? (
                <>
                  <h2>Entrega</h2>
                  <S.Row>
                    <S.InputGroup>
                      <label htmlFor="fullName">Quem irá receber</label>
                      <input
                        id="fullName"
                        type="text"
                        name="fullName"
                        value={form.values.fullName}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('fullName') ? 'error' : ''
                        }
                      />
                    </S.InputGroup>
                  </S.Row>
                  <S.Row>
                    <S.InputGroup>
                      <label htmlFor="adress">Endereço</label>
                      <input
                        id="adress"
                        type="text"
                        name="adress"
                        value={form.values.adress}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('adress') ? 'error' : ''}
                      />
                    </S.InputGroup>
                  </S.Row>
                  <S.Row>
                    <S.InputGroup>
                      <label htmlFor="city">Cidade</label>
                      <input
                        id="city"
                        type="text"
                        name="city"
                        value={form.values.city}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('city') ? 'error' : ''}
                      />
                    </S.InputGroup>
                  </S.Row>
                  <S.Row>
                    <S.InputGroup>
                      <label htmlFor="cep">CEP</label>
                      <InputMask
                        id="cep"
                        type="text"
                        name="cep"
                        value={form.values.cep}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('cep') ? 'error' : ''}
                        mask="99999-999"
                      />
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="adressNumber">Número</label>
                      <input
                        id="adressNumber"
                        type="text"
                        name="adressNumber"
                        value={form.values.adressNumber}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('adressNumber') ? 'error' : ''
                        }
                      />
                    </S.InputGroup>
                  </S.Row>
                  <S.Row>
                    <S.InputGroup>
                      <label htmlFor="complement">Complemento (opcional)</label>
                      <input
                        id="complement"
                        type="text"
                        name="complement"
                        value={form.values.complement}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('complement') ? 'error' : ''
                        }
                      />
                    </S.InputGroup>
                  </S.Row>
                  <S.Button
                    onClick={() => setVisualizandoEntrega(false)}
                    type="button"
                    title="Clique aqui para continuar com o pagamento"
                    className="margin-top-24"
                  >
                    Continuar com o pagamento
                  </S.Button>
                  <S.Button
                    onClick={backToCart}
                    type="button"
                    title="Clique aqui para voltar opara o carrinho"
                  >
                    Voltar para o carrinho
                  </S.Button>
                </>
              ) : (
                <>
                  <h2>
                    Pagamento - Valor a pagar {parseToBrl(getTotalPrice(items))}
                  </h2>
                  <S.Row>
                    <S.InputGroup>
                      <label htmlFor="cardOwner">Nome no cartão</label>
                      <input
                        id="cardOwner"
                        type="text"
                        name="cardOwner"
                        value={form.values.cardOwner}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('cardOwner') ? 'error' : ''
                        }
                      />
                    </S.InputGroup>
                  </S.Row>
                  <S.Row>
                    <S.InputGroup>
                      <label htmlFor="cardNumber">Número do cartão</label>
                      <InputMask
                        id="cardNumber"
                        type="text"
                        name="cardNumber"
                        value={form.values.cardNumber}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('cardNumber') ? 'error' : ''
                        }
                        mask="9999 9999 9999 9999"
                      />
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="cardCode">CVV</label>
                      <InputMask
                        id="cardCode"
                        type="text"
                        name="cardCode"
                        value={form.values.cardCode}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('cardCode') ? 'error' : ''
                        }
                        mask="999"
                      />
                    </S.InputGroup>
                  </S.Row>
                  <S.Row>
                    <S.InputGroup>
                      <label htmlFor="expiresMonth">Mês de vencimento</label>
                      <InputMask
                        id="expiresMonth"
                        type="text"
                        name="expiresMonth"
                        value={form.values.expiresMonth}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('expiresMonth') ? 'error' : ''
                        }
                        mask="99"
                      />
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="expiresYear">Ano de vencimento</label>
                      <InputMask
                        id="expiresYear"
                        type="text"
                        name="expiresYear"
                        value={form.values.expiresYear}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('expiresYear') ? 'error' : ''
                        }
                        mask="99"
                      />
                    </S.InputGroup>
                  </S.Row>
                  <S.Button
                    type="submit"
                    title="Clique aqui para finalizar pagamento"
                    className="margin-top-24"
                  >
                    {isLoading
                      ? 'Finalizando Pagamento...'
                      : 'Finalizar Pagamento'}
                  </S.Button>
                  <S.Button
                    onClick={() => setVisualizandoEntrega(true)}
                    type="button"
                    title="Clique aqui para voltar para a edição de endereço"
                  >
                    Voltar para a edição de endereço
                  </S.Button>
                </>
              )}
            </form>
          </>
        )}
      </S.SideBar>
    </S.CartContainer>
  )
}
export default Checkout
