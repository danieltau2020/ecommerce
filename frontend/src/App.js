import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GlobalStyle from './globalStyle'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import Product from './pages/Product'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/productlist' exact component={ProductList} />
        <Route path='/product' exact component={Product} />
        <Route path='/cart' exact component={Cart} />
        <Route path='/register' exact component={Register} />
        <Route path='/login' exact component={Login} />
      </Switch>
    </Router>
  )
}

export default App
