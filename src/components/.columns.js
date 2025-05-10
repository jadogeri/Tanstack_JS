
import { createColumnHelper } from "@tanstack/react-table";
import Image from "./Image";

const columnHelper = createColumnHelper();

//Basic Table Structure
export const columnDef = [
  columnHelper.accessor("id", {
    header: "Id",
  }),
  {
    accessorFn: (row)=> row.name.english,
    header: "Name",
  },
  columnHelper.accessor('URL', {
    cell: thumbnail => <img src={thumbnail.getValue()} alt="" className="" />,
    header: "Icon",

}),
  {
    accessorKey: "species",
    header: "Species",
  },
   {
    accessorFn: (row)=> row?.image?.thumbnail,
    header: "URL",
    Cell: (getValue )=>  <Image status={getValue()} />,

  },
  {
    accessorFn: (row)=> row.base?.HP,
    header: "HP",
  },
  {
    accessorFn: (row)=> row.base?.Attack,
    header: "Attack",
  },  {
    accessorFn: (row)=> row.base?.Defense,
    header: "Defense",
  },  {
    accessorFn: (row)=> row.base?.Speed,
    header: "Speed",
  },

];

// cell merge example
//merging id and name 
export const columnDefWithCellMerge = [
  {
    accessorFn: (row) => `${row.id} ${row.name}`,
    header: "Merged Field",
  },
];
//Sorting Table With Grouping Structure

export const columnDefWithGroupingAndSorting = [
  columnHelper.accessor("id", {
    header: "Id",
  }),
  {
    accessorFn: (row)=> row.name.english,
    header: "Name",
  },
  columnHelper.accessor('URL', {
    cell: thumbnail => <img key={thumbnail} src={thumbnail.getValue()} alt="" className="" />,
    header: "Image",
    
}),
{
  accessorKey: "species",
  header: "Species",
},
 {
  accessorFn: (row)=> row?.image?.thumbnail,
  header: "URL",
  Cell: (getValue )=>  <Image status={getValue()} />,

},
  {
    header: "Attributes",
    columns: [
      {
        accessorFn: (row)=> row.base?.HP,
        header: "HP",
      },
      {
        accessorFn: (row)=> row.base?.Attack,
        header: "Attack",
      },  {
        accessorFn: (row)=> row.base?.Defense,
        header: "Defense",
      },  {
        accessorFn: (row)=> row.base?.Speed,
        header: "Speed",
      },
    ],
  },

];

// columnDef with Filters

export const columnDefWithFilter = [
  columnHelper.accessor("id", {
    header: "Id",
  }),
  {
    accessorFn: (row)=> row.name.english,
    header: "Name",
  },
  columnHelper.accessor('URL', {
    cell: thumbnail => <img src={thumbnail.getValue()} alt="" className="" />,
    header: "Icon",
    enableColumnFilter: false,  


}),
  {
    accessorKey: "species",
    header: "Species",
  },
   {
    accessorFn: (row)=> row?.image?.thumbnail,
    header: "URL",
    Cell: (getValue )=>  <Image status={getValue()} />,
    enableColumnFilter: false,  

  },
  {
    accessorFn: (row)=> row.base?.HP,
    header: "HP",
  },
  {
    accessorFn: (row)=> row.base?.Attack,
    header: "Attack",
  },  {
    accessorFn: (row)=> row.base?.Defense,
    header: "Defense",
  },  {
    accessorFn: (row)=> row.base?.Speed,
    header: "Speed",
  },
  //   {
  //   accessorKey: "date",
  //   header: "Date",
  //   cell: ({ getValue }) => moment(new Date(getValue())).format("MMM Do YY"),
  // },
];

export const columnDefWithFilter2 = [
  columnHelper.accessor("id", {
    header: "Id",
    enableColumnFilter: false,
  }),
  {
    accessorFn: (row) => `${row.first_name}`,
    header: "First Name",
  },
  {
    accessorKey: "last_name",
    header: "Last Name",
  },
  {
    accessorKey: "email",
    header: "Email",
    enableColumnFilter: false,
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ getValue }) => moment(new Date(getValue())).format("MMM Do YY"),
  },
];

export const columnDefWithCheckBox = [
  {
    id: "select",
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  columnHelper.accessor("id", {
    header: "Id",
  }),
  {
    accessorFn: (row) => `${row.first_name}`,
    header: "First Name",
  },
  {
    accessorKey: "last_name",
    header: "Last Name",
  },

]