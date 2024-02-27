import Feedback from "./components/Feedback"
import Products from "./components/Products"
import './assets/css/styles.scss'

function App() {
  return (
    <div className="container">
      <div className="header">
        <div className="head-left">Products</div>
        <div className="head-right">Feedback</div>
      </div>
      <div className="main">
        <Products />
        <Feedback />
      </div>
    </div>
  )
}

export default App
