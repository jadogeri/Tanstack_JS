
import { createColumnHelper } from "@tanstack/react-table";
import Image from "./Image";

const columnHelper = createColumnHelper();

export const columnDef = [
  columnHelper.accessor("id", {
    header: "Id",
  }),
  {
    accessorFn: (row)=> row.name.english,
    header: "Name",
  },
  columnHelper.accessor('Image', {
    cell: thumbnail => <img src={thumbnail.getValue()} alt="" className="" />
}),
  {
    accessorKey: "species",
    header: "Species",
  },
   {
    accessorFn: (row)=> row?.image?.thumbnail,
    header: "Image",
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
