import React from 'react'
import "./Table.scss";

interface rowType {
    id: number;
    name: string;
    category: string;
}

const Table: React.FC<{ data: rowType[] }> = ({ data }) => {

    return (
        <table>
            <thead>
                <tr>
                    {Object.keys(data[0]).map((keyName, i) => (
                        <th key={`keyName-${i + 1}`}>{keyName}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {
                    data.map((row, i) => <tr key={`row-${i + 1}`}>
                        {Object.entries(row).map((value, i) => (
                            <td key={`col-Value-${i + 1}`}>{value[1]}</td>
                        ))}
                    </tr>)
                }
            </tbody>
        </table>
    )
}

export default Table;