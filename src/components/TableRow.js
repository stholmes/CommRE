const TableRow = props => {
    return (
        <tr key={props.index}>
            <td data-index={props.index} onClick={props.selectAgent}>{props.agent}</td>
            <td>{props.salesTotal}</td>
        </tr>
    );
};

export default TableRow;