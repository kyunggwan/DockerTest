import { useTable, useSortBy } from "react-table";
import { useMemo } from "react";
import { useSelector } from "react-redux";

function Mytable() {
    let { drive } = useSelector((state) => { return state })

    const columns = useColumns();
    const data = useRows();

    function useRows() {
        const rows = useMemo(
            () => drive.map((a, i) =>           // return db[i];
                a
            ),
            []
        );
        return rows;
    }

    function useColumns() {
        const columns = useMemo(
            () => [
                {
                    Header: "차량번호",
                    accessor: "car_num"
                },
                {
                    Header: "운행일자",
                    accessor: "date"
                },
                {
                    Header: "운행당 안전운전율(%)",
                    accessor: "dsr"
                },
                {
                    Header: "급가속 횟수",
                    accessor: "rac"
                },
                {
                    Header: "급감속 횟수",
                    accessor: "sds"
                },
                {
                    Header: " 운행점수",
                    accessor: "durs"
                }

            ],
            []
        );

        return columns;
    }


    const table = useTable({ columns, data }, useSortBy);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = table;

    return (
        <div className="mytable2">
            <h2 className="h22" style={{ textAlign: 'center' }}> 운행 데이터</h2>
            <h4 style={{ textAlign: 'end' }}>기간 : 2022년12월01 - 2022년 12월14일</h4>
            {/* Apply the table props */}
            <table table {...getTableProps()} className='mytable'>
                <thead className="thead1">
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                // Aplicamos las propiedades de ordenación a cada columna
                                <th
                                    {...column.getHeaderProps(column.getSortByToggleProps())}
                                    className={
                                        column.isSorted
                                            ? column.isSortedDesc
                                                ? "desc"
                                                : "asc"
                                            : ""
                                    }
                                >
                                    {column.render("Header")}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                {/* Apply the table body props */}
                <tbody {...getTableBodyProps()}>
                    {
                        // Loop over the table rows
                        rows.map((row) => {
                            // Prepare the row for display
                            prepareRow(row);
                            return (
                                // Apply the row props
                                <tr {...row.getRowProps()}>
                                    {
                                        // Loop over the rows cells
                                        row.cells.map((cell) => {
                                            // Apply the cell props
                                            return (
                                                <td {...cell.getCellProps()}>
                                                    {
                                                        // Render the cell contents
                                                        cell.render("Cell")
                                                    }
                                                </td>
                                            );
                                        })
                                    }
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table >
        </div >
    );
}

export default Mytable;

