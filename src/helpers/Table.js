import React from 'react';
import PropTypes from 'prop-types';

import { useTable, useRowSelect } from 'react-table';

const Table = ( props ) => {

  const {
    columnas,
    filas,
  } = props;

  

  const columns = React.useMemo(
    () => columnas,
    [ columnas ]
  )

  const data = React.useMemo(
    () => filas,
    [ filas ]
  )

  // const tableInstance = useTable({ columns, data })

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    // selectedFlatRows,
    // state: { selectedRowIds },
  } = useTable(
    {
      columns,
      data,
    },
    useRowSelect,
    hooks => {
      hooks.visibleColumns.push(columns => [
        // Let's make a column for selection
        ...columns,
        
      ])
    }
  )

  return (
    <div className="table-responsive">
      <table
        className="table table-bordered border-white table-responsive table-dark table-striped table-hover" {...getTableProps()}
      >
        <thead className="text-center align-middle">
          {// Loop over the header rows
          headerGroups.map(headerGroup => (
            // Apply the header row props
            <tr {...headerGroup.getHeaderGroupProps()}>
              {// Loop over the headers in each row
              headerGroup.headers.map(column => (
                // Apply the header cell props
                <th {...column.getHeaderProps()}>
                  {// Render the header
                  column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        {/* Apply the table body props */}
        <tbody {...getTableBodyProps()}>
          {// Loop over the table rows
          rows.map(row => {
            // Prepare the row for display
            prepareRow(row)
            return (
              // Apply the row props
              <tr {...row.getRowProps()}>
                {// Loop over the rows cells
                row.cells.map(cell => {
                  // Apply the cell props
                  return (
                    <td
                      className="text-center align-middle"
                      {...cell.getCellProps()}
                    >
                      {// Render the cell contents
                      cell.render('Cell')}
                    </td>
                  )
                  
                })}
              </tr>
              
            )
          })}
        </tbody>
      </table>
      {/* <p>Selected Rows: {Object.keys(selectedRowIds).length}</p>
      <pre>
        <code>
          {JSON.stringify(
            {
              selectedRowIds: selectedRowIds,
              'selectedFlatRows[].original': selectedFlatRows.map(
                d => d.original
              ),
            },
            null,
            2
          )}
        </code>
      </pre> */}
    </div>
  )
}

Table.propTypes = {
  columnas: PropTypes.array.isRequired,
  filas: PropTypes.array.isRequired

}

export default Table
