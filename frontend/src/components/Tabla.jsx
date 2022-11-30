import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Registro from './Registro';



export default function DataTable() {
  return (
    <>
     <div>
        <div id="chart" />
        <iframe style={{background: '#FFFFFF', border: 'none', borderRadius: '2px', boxShadow: '0 2px 10px 0 rgba(70, 76, 79, .2)'}} width={640} height={480} src="https://charts.mongodb.com/charts-project-0-wmewi/embed/charts?id=6386b791-ea60-461c-8163-5e21f6b30bc8&maxDataAge=3600&theme=light&autoRefresh=true" />
      </div>
    </>  
  );
}
