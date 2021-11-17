import { useState } from 'react';
import Table from './components/Table';
import PieChart from './components/PieChart';
import 'bootstrap/dist/css/bootstrap.min.css';

const dummyData = [
  {agent: 'steve', propertyType:'Office'},
  {agent: 'steve', propertyType:'Land'},
  {agent: 'steve', propertyType:'Residential'},
  {agent: 'steve', propertyType:'Office'},
  {agent: 'steve', propertyType:'Office'},
  {agent: 'steve', propertyType:'Land'},
  {agent: 'steve', propertyType:'Land'},
  {agent: 'steve', propertyType:'Residential'},
  {agent: 'steve', propertyType:'Residential'},
  {agent: 'steve', propertyType:'Office'},
  {agent: 'steve', propertyType:'Land'},
  {agent: 'steve', propertyType:'Residential'},
  {agent: 'steve', propertyType:'Residential'},
  {agent: 'steve', propertyType:'Land'},
  {agent: 'steve', propertyType:'Office'},
  {agent: 'steve', propertyType:'Residential'},
  {agent: 'bob', propertyType:'Land'},
  {agent: 'bob', propertyType:'Land'},
  {agent: 'bob', propertyType:'Residential'},
  {agent: 'bob', propertyType:'Office'},
  {agent: 'jack', propertyType:'Office'},
  {agent: 'jack', propertyType:'Office'},
  {agent: 'jack', propertyType:'Land'},
  {agent: 'jack', propertyType:'Residential'},
  {agent: 'jack', propertyType:'Office'},
];

const App = () => {
  const salesByAgent = [];
  const salesDataIterable = dummyData.values();

  for ( const sale of salesDataIterable){
    let agentName = sale.agent;
    let propertyType = sale.propertyType;

    if (salesByAgent.findIndex(sale => sale.name === agentName) === -1){
      let agentObj = {};
      agentObj.name = agentName;
      agentObj.totalSales = 1;
      agentObj.sales = {};
      agentObj.sales[propertyType] = 1;
      salesByAgent.push(agentObj);
    }else{
      let index = salesByAgent.findIndex(agent => agent.name === agentName);

      if (salesByAgent[index].sales[propertyType] === undefined){
        salesByAgent[index].sales[propertyType] = 1;
      }else{
        salesByAgent[index].sales[propertyType] += 1;
      };
      salesByAgent[index].totalSales += 1;
    };
  };

  const [agentState, setAgentState] = useState(salesByAgent[0]);
  
  const selectAgentHandler = (event) => {
    const selectedAgentIndex = event.target.getAttribute('data-index');
    if (selectedAgentIndex > salesByAgent.length){
      return;
    }
    setAgentState(salesByAgent[selectedAgentIndex]);
  };

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
            <h5 className="bg-dark text-light p-3">Sales by agent: {agentState.name} </h5>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-4">
            <Table totalSalesByAgent={salesByAgent} selectAgent={selectAgentHandler}/>

          </div>
          <div className="col-xs-12 col-md-8">
            <PieChart salesData={agentState.sales} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
