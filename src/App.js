import Table from './components/Table';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <header>
            <h1>Data Analysis for CommRE</h1>
          </header>

        </div>
        <div className="row">
          <div className="col-12">
            <h5 className="bg-dark text-light p-3">Sales by agent: </h5>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-4">
            <Table />

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
