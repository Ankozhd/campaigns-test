import React from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

function DataTable(props) {
  const {
    columnDefs, rowData, style, pagination,
  } = props;

  return (
    <div className="ag-theme-alpine" style={style}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={{
          sortable: true,
        }}
        onGridReady={(event) => event.columnApi.autoSizeAllColumns()}
        pagination={pagination}
        paginationAutoPageSize
      />
    </div>
  );
}

export default DataTable;
