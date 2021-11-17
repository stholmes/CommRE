import { Chart } from "react-google-charts";

const PieChart = props => {
    const salesDataKeys = Object.keys(props.salesData);
    const dataArr = [['Type', 'Sales']];
    for(let key of salesDataKeys){
        const typeArr = [key, props.salesData[key]];
        dataArr.push(typeArr);
    }
    return (
        <div className="border border-dark p-0">
            <Chart
                width={'100%'}
                height={'500px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={dataArr}
                // legend.position = {{position: 'bottom', alignment: 'start'}}
                options = {{
                    legend: 'bottom'
                }}
                rootProps={{ 'data-testid': '1' }}
            />
        </div>)
};

export default PieChart;