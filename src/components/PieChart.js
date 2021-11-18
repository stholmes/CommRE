import { Chart } from "react-google-charts";

const PieChart = props => {
    // Build data array for chart
    const salesDataKeys = Object.keys(props.salesData);
    const dataArr = [];
    for(let key of salesDataKeys){
        const typeArr = [key, props.salesData[key]];
        dataArr.push(typeArr);
    }
    // Sort data array for consistant slice coloring
    dataArr.sort((a,b)=>{
        if(a[0] > b[0]){
            return 1
        }else if (a[0] < b[0]){
            return -1
        }else{
            return 0
        } 
    })
    dataArr.unshift(['Type', 'Sales'])
    
    return (
        <div className="">
            <h3 className="d-md-none text-center">Sales by Property Type for {props.name}</h3>
            <Chart
                width={'100%'}
                height={'500px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={dataArr}
                options = {{
                    legend: 'bottom',
                    chartArea: {'width': '100%', 'height': '80%'}
                }}
                rootProps={{ 'data-testid': '1' }}
            />
        </div>)
};

export default PieChart;