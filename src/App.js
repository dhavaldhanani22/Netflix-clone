import './App.css';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import Content from './components/Content/Content'; 
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: '002b3f73bcc31897c1e1524e4c48acbd',
};

const App = () => {
  return <div>
    <Nav />
    <Header />
    <Content />
  </div>
};


export default App;