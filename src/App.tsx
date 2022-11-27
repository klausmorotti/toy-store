// HOOKS DE ROTA
import { Routes, Route } from 'react-router-dom';

// COMPONENTES
import { LoginPage } from './pages/LoginPage';
import { HomePage } from './pages/HomePage';
import { CartPage } from './pages/CartPage';
import { UserConfigPage } from './pages/UserConfigPage';

const App = () => {
  return (
    <div>

        <Routes>
            <Route path="/" element={ <LoginPage /> } />
            <Route path="/home" element={ <HomePage /> } />
            <Route path="/carrinho" element={ <CartPage /> } />
            <Route path="/meus-dados" element={ <UserConfigPage /> } />
        </Routes>

    </div>
  )
}

export default App;
