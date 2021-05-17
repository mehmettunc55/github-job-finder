
import './App.css';
import Octocat from './assets/octocat.png'
import Form from './components/form/Form'

function App() {
  return (
    <div className="App">
    <img src={Octocat} alt="github-cat" className='octocat'/>
    <Form/>
      
    </div>
  );
}

export default App;
