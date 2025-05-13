import React from "react";
import "./table.css";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
} from "@tanstack/react-table";
import { columnResizeDef } from "./.columns";
const ColumnResizableTable = ({data}) => {
  const finalData = React.useMemo(() => data, []);
  const finalColumnDef = React.useMemo(() => columnResizeDef, []);
  const tableInstance = useReactTable({
    enableColumnResizing: true,
    debugTable: true,
    debugHeaders: true,
    debugColumns: true,
    columns: finalColumnDef,
    data: finalData,
    getCoreRowModel: getCoreRowModel(),
    columnResizeMode: 'onChange', // Enable real-time resizing
  });

  return (
    
    <>
      <table>
        <thead>
          {tableInstance.getHeaderGroups().map((headerEl) => {
            return (
              <tr key={headerEl.id}>
                {headerEl.headers.map((columnEl) => {
                  return (
                    <th key={columnEl.id} colSpan={columnEl.colSpan}  
                    onMouseDown={columnEl.getResizeHandler()}
                    onDoubleClick={columnEl.getResizeHandler()}      
                    
                    style={{ position:"relative",width:columnEl.getSize() ,
                    }}
>
                      {columnEl.isPlaceholder
                        ? null
                        : flexRender(
                            columnEl.column.columnDef.header,
                            columnEl.getContext()
                          )}
                    {columnEl.column.getCanResize() && (
                      <div
                        onMouseDown={columnEl.getResizeHandler()}
                        onTouchStart={columnEl.getResizeHandler()}
                        className={`resizer ${
                          columnEl.column.getIsResizing() ? 'isResizing' : ''
                        }`}
                      ></div>
                    )}
              
                    </th>
                    
                  );
                })}

              </tr>
            );
          })}
        </thead>
        <tbody>
          {tableInstance.getRowModel().rows.map((rowEl) => {
            return (
              <tr key={rowEl.id}>
                {rowEl.getVisibleCells().map((cellEl) => {
                  return (
                    <td key={cellEl.id}>
                      {flexRender(
                        cellEl.column.columnDef.cell,
                        cellEl.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ColumnResizableTable;