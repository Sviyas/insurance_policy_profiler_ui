import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { ColDef, ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
import Loader from '../../../components/Loader';
ModuleRegistry.registerModules([AllCommunityModule]);

export interface PoliciesListProps {
  id?: number;
  status?: boolean;
  coverage: number;
  premium: number;
  type: string;
  name: string;
}

export default function Tables({
  data,
  searchKey,
  isLoading
}: {
  data: PoliciesListProps[];
  searchKey?: string;
  isLoading: boolean;
}) {
  const searchRowData = data
    .filter(
      d =>
        d.name.toLowerCase().includes((searchKey?.trim() as string)?.toLowerCase()) ||
        d.type.toLowerCase().includes((searchKey?.trim() as string)?.toLowerCase())
    )
    .map(f => {
      return {
        coverage: f.coverage,
        premium: f.premium,
        type: f.type,
        status: f.status,
        name: f.name
      };
    });

  const rowData = data.map(d => {
    return {
      coverage: d.coverage,
      premium: d.premium,
      type: d.type,
      status: d.status,
      name: d.name
    };
  });

  const colDefs: ColDef[] = [
    { headerName: 'Name', field: 'name', headerClass: 'font-bold', sortable: false, filter: false },
    { headerName: 'Type', field: 'type', headerClass: 'font-bold', sortable: false, filter: false },
    { headerName: 'Coverage', field: 'coverage', headerClass: 'font-bold', sortable: true, filter: true },
    {
      headerName: 'Premium',
      field: 'premium',
      headerClass: 'font-bold',
      sortable: true,
      filter: true
    },
    {
      headerName: 'Status',
      field: 'status',
      cellRenderer: (param: Record<string, boolean>) => (param.value === true ? 'Active' : 'InActive'),
      headerClass: 'font-bold'
    }
  ];

  const defaultColDef = {
    flex: 1,
    minWidth: 100
  };

  const validRows = searchRowData.length > 1 ? searchRowData : rowData;

  return (
    <div
      className={`lg:h-[350px] lg:w-full h-[400px] w-full overflow-x-auto ${
        isLoading ? 'flex items-center justify-center' : ''
      }`}
    >
      {isLoading ? <Loader /> : <AgGridReact rowData={validRows} columnDefs={colDefs} defaultColDef={defaultColDef} />}
    </div>
  );
}
