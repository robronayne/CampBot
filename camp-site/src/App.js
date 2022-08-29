import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'



import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/sign-in" exact element={<SignIn/>}/>
          <Route path="/sign-up" exact element={<SignUp/>}/>
          <Route path="/forgot-password" exact element={<ForgotPassword/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
