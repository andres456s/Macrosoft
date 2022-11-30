import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Registro from './Registro';
import './tabla.css'



export default function DataTable() {
  return (
    <div className='ret'>
     <div>
        <div className='estadisti' id="chart" />
        <iframe className='estadistic' style={{background: '#21313C', border: 'none', borderRadius: '2px', boxShadow: '0 2px 10px 0 rgba(70, 76, 79, .2)'}} width={1400} height={480} src="https://charts.mongodb.com/charts-project-0-wmewi/embed/dashboards?id=662952dc-352e-45d3-b032-662aca2b4351&theme=dark&autoRefresh=true&maxDataAge=3600&showTitleAndDesc=false&scalingWidth=fixed&scalingHeight=fixed" />
      </div>
    </div>  
  );
}
