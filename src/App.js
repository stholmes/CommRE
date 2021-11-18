import { useState, useEffect } from 'react';
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
  // const salesByAgent = [];
  // const salesDataIterable = dummyData.values();

  // for ( const sale of salesDataIterable){
  //   let agentName = sale.agent;
  //   let propertyType = sale.propertyType;

  //   if (salesByAgent.findIndex(sale => sale.name === agentName) === -1){
  //     let agentObj = {};
  //     agentObj.name = agentName;
  //     agentObj.totalSales = 1;
  //     agentObj.sales = {};
  //     agentObj.sales[propertyType] = 1;
  //     salesByAgent.push(agentObj);
  //   }else{
  //     let index = salesByAgent.findIndex(agent => agent.name === agentName);

  //     if (salesByAgent[index].sales[propertyType] === undefined){
  //       salesByAgent[index].sales[propertyType] = 1;
  //     }else{
  //       salesByAgent[index].sales[propertyType] += 1;
  //     };
  //     salesByAgent[index].totalSales += 1;
  //   };
  // };
  const [dataState, setDataState] = useState('')
  const [agentState, setAgentState] = useState('');
  // Set isLoading to true for initial mounting
  const [isLoading, setIsLoading] = useState(true);
  // Run getData on initial mounting
  useEffect(()=>{
    getData();
  }, [])
  


  const selectAgentHandler = (event) => {
    const selectedAgentIndex = event.target.getAttribute('data-index');
    if (selectedAgentIndex > dataState.length){
      return;
    }
    setAgentState(dataState[selectedAgentIndex]);
  };
  
  const salesByAgent = [];

  const salesData = [];
  //Fetch data
  async function getData(){
    const [agentsRes, propertyTypesRes, propertySalesRes] = await Promise.all([fetch('http://localhost:9000/agents'), fetch('http://localhost:9000/property-types'), fetch('http://localhost:9000/property-sales')
    ])

    const agentsObj = await agentsRes.json();
    const propertyTypesObj = await propertyTypesRes.json();
    const propertySalesObj = await propertySalesRes.json();

    // convert to arrays
    const [agentsArr, propertyTypesArr, propertySalesArr] = [agentsObj.agents, propertyTypesObj.propertyTypes, propertySalesObj.propertySales];


    const salesIterable = propertySalesArr.values();
    for( let sale of salesIterable){
      let saleObj = {};
      let agentIndex = agentsArr.findIndex(agent => agent.agentId === sale.agentId);
      let propertyTypeIndex = propertyTypesArr.findIndex(type => type.typeId === sale.propertyTypeId);
      saleObj.name = agentsArr[agentIndex].name;
      saleObj.propertyType = propertyTypesArr[propertyTypeIndex].type;
      saleObj.date = sale.date;
      salesData.push(saleObj);

    }
    console.log(salesData);
    console.log('finished loading');

    const salesDataIterable = salesData.values();

    for ( const sale of salesDataIterable){
      let agentName = sale.name;
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
    console.log(salesByAgent)
    setDataState(salesByAgent)
    console.log(dataState)
    setAgentState(salesByAgent[0])
    setTimeout(()=>setIsLoading(false), 2000);
   
  }

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
            {isLoading && <h5 className="bg-dark text-light p-3">Loading Data... </h5>}
            {!isLoading && <h5 className="bg-dark text-light p-3">Sales by agent: {agentState.name} </h5>}
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-4">
           {!isLoading && <Table totalSalesByAgent={dataState} selectAgent={selectAgentHandler}/>}

          </div>
          <div className="col-xs-12 col-md-8">
            {!isLoading && <PieChart salesData={agentState.sales} name={agentState.name} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
