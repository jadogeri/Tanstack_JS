import React from "react";
import "./table.css";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import FilterFunction from "./FilterFunction";
import { columnDefWithFilter } from "./.columns";

const ColumnFilterTable = ({data}) => {
  const finalData = React.useMemo(() => data, []);
  const finalColumnDef = React.useMemo(() => columnDefWithFilter, []);
  const defaultColumn = React.useMemo(() => {
    return {
      youTubeProp: "hello world",
    };
  }, []);

  const [columnFilters, setColumnFilters] = React.useState([]);

  const tableInstance = useReactTable({
    columns: finalColumnDef,
    data: finalData,
    defaultColumn: defaultColumn,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters: columnFilters,
    },
    onColumnFiltersChange: setColumnFilters,
  });

  //   console.log("test", tableInstance.getHeaderGroups());

  React.useEffect(() => {
    console.log(tableInstance.getState().columnFilters);
  });

  return (
    <>
      <table>
        <thead>
          {tableInstance.getHeaderGroups().map((headerEl) => {
            return (
              <tr key={headerEl.id}>
                {headerEl.headers.map((columnEl) => {
                  console.log(
                    "our property",
                    columnEl.column.columnDef.youTubeProp
                  );

                  return (
                    <th key={columnEl.id} colSpan={columnEl.colSpan}>
                      {columnEl.isPlaceholder ? null : (
                        <>
                          {flexRender(
                            columnEl.column.columnDef.header,
                            columnEl.getContext()
                          )}
                          {columnEl.column.getCanFilter() ? (
                            <div>
                              <FilterFunction
                                column={columnEl.column}
                                table={tableInstance}
                              />
                            </div>
                          ) : null}
                        </>
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

export default ColumnFilterTable;