import TableRow from "./TableRow";

const Table = props => {
    return (
        <table className="table table-bordered">
            <thead className="thead-light">
                <tr className="text-left">
                    <th className="p-3">Agent</th>
                    <th className="p-3">Sales</th>
                </tr>
            </thead>
            <tbody>
                {props.totalSalesByAgent.map((agent, index) => <TableRow agent={agent.name} salesTotal={agent.totalSales} index={index} selectAgent={props.selectAgent} />)}
            </tbody>
        </table>
    )
};

export default Table;