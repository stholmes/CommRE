const TableRow = props => {
    return (
        <tr>
            <td>{props.agent}</td>
            <td>{props.salesTotal}</td>
        </tr>
    );
};

export default TableRow;