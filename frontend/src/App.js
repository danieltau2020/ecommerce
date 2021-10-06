import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import GlobalStyle from './globalStyle'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import Product from './pages/Product'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'

const App = () => {
  const user = true

  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/products/:category' exact component={ProductList} />
        <Route path='/product/:id' exact component={Product} />
        <Route path='/cart' exact component={Cart} />
        <Route path='/login' exact>
          {user ? <Redirect to='/' /> : <Login />}
        </Route>
        <Route path='/register' exact>
          {user ? <Redirect to='/' /> : <Register />}
        </Route>
      </Switch>
    </Router>
  )
}

export default App
