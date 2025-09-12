import Pedido from "./Pedido"
import Hippo from "./Hippo"
import Cartao from "./Cartao"

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Cartao
          cabecalho = "Familia de Hippos">
          <Hippo
            tamanho="3"
          />
          <Hippo
            tamanho="2"
            espelhamento="flip-horizontal"
          />
          <Hippo
            tamanho="1"
            espelhamento="flip-horizontal"
          />
          </Cartao>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-3">
          <Pedido
            data="11/09/2025"
            icone="car"
            titulo="Carro"
            descricao="Porsche Amarelo" />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3">
          <Pedido
            data="11/09/2025"
            icone="tractor"
            titulo="Trator"
            descricao="Trator Amarelo" />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3">
          <Pedido
            data="11/09/2025"
            icone="house"
            titulo="Casa"
            descricao="Casa Amarelo" />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3">
          <Pedido
            data="11/09/2025"
            icone="computer"
            titulo="Computador"
            descricao="Computador Amarelo" />
        </div>
      </div>

    </div>
  )
}

export default App