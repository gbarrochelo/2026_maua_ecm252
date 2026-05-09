import { useState, useEffect } from 'react'
import EstacaoClimatica from './EstacaoClimatica'
import Loading from './Loading'
function App() {
  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)
  const [estacao, setEstacao] = useState(null)
  const [icone, setIcone] = useState(null)
  const [mensagemDeErro, setMensagemDeErro] = useState(null)
  const obterEstacao = (dataAtual, lat) => {
    const ano = dataAtual.getFullYear()
    const d1 = new Date(ano, 5, 21)
    const d2 = new Date(ano, 8, 24)
    const d3 = new Date(ano, 11, 22)
    const d4 = new Date(ano, 2, 21)
    const sul = lat < 0
    if (dataAtual >= d1 && dataAtual < d2)
      return sul ? 'Inverno' : 'Verão'
    if (dataAtual >= d2 && dataAtual < d3)
      return sul ? 'Primavera' : 'Outono'
    if (dataAtual >= d3 || dataAtual < d4)
      return sul ? 'Verão' : 'Inverno'
    return sul ? 'Outono' : 'Primavera'
  }
  const icones = {
    'Primavera': 'fa-seedling',
    'Verão': 'fa-umbrella-beach',
    'Outono': 'fa-tree',
    'Inverno': 'fa-snowman'
  }
  const obterLocalizacao = () => {
    window.navigator.geolocation.getCurrentPosition(
      (posicao) => {
        const dataAtual = new Date()
        const est = obterEstacao(dataAtual, posicao.coords.latitude)
        setLatitude(posicao.coords.latitude)
        setLongitude(posicao.coords.longitude)
        setEstacao(est)
        setIcone(icones[est])
      },
      (erro) => {
        console.log(erro)
        setMensagemDeErro('Tente novamente mais tarde')
      }
    )
  }
  useEffect(() => {
    obterLocalizacao()
  }, [])
  return (
    <div className="container mt-2">
      <div className="row justify-content-center">
        <div className="col-md-8">
          {
            (!latitude && !mensagemDeErro)
              ? <Loading mensagem="Por favor, responda à solicitação de localização" />
              : mensagemDeErro
                ? <p className="border rounded p-2 fs-4 text-center">É preciso dar permissão para acesso à localização. Atualize a página e tente novamente.</p>
                : <EstacaoClimatica
                  icone={icone}
                  estacao={estacao}
                  latitude={latitude}
                  longitude={longitude}
                  obterLocalizacao={obterLocalizacao}
                />
          }
        </div>
      </div>
    </div>
  )
}
export default App