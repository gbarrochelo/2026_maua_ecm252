import './styles.css'
const App = () => {

  

  const textoDoRotulo = 'Nome:'

  const obterTextoDoBotao = () => 'Enviar'

  const aoClicar = () => alert('Clicou')

  return <div style={{margin: 'auto', width: 576, backgroundColor: '#EEE', padding: 12, borderRadius: 8}}>
    <label className= "rotulo" htmlFor="campoNome" style={{display: 'block', marginBottom: 8}}>
      {textoDoRotulo}
    </label>

  {/*input#campoNome */}
    <input type="text" id="campoNome" style={{paddingTop: 8, paddingBottom: 8, width: '100%', borderStyle: 'hidden', outiline:'none', borderRadius: 8}}/>

  {/*buttoon{Enviar} */}
    <button 
    onClick={() => aoClicar()}
    style={estilosBotao}>
     {obterTextoDoBotao}
    </button>

  </div>
}

export default App