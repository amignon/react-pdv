import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Exemplo - Sistema de PDV
        </p>
      </header>
      <div className='card'>
        <section className='App-section'>
          <div className='container-input'>
            <label style={{marginRight: 10}}>Item ID: </label>
            <input style={{marginRight: 10}}/>
            <button>Enter</button>
          </div>
          
        </section>
      </div>
      
    </div>
  );
}

export default App;
