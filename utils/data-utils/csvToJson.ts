import { InfoTableStores } from '@/interfaces/stores-interface';
import * as XLSX from 'xlsx'

export interface BasicInfoUpload {
  sheetDataBuffer: Buffer;
}


export function convertCSVtoJSON(result: string | ArrayBuffer | null | undefined): InfoTableStores[] {
  // const workbook: XLSX.WorkBook = XLSX.read(result, { type: 'binary', sheets: "Seguimiento",cellDates: true, })
  const workbook: XLSX.WorkBook = XLSX.read(result, {
    type: 'binary', 
    cellDates: true,
    cellNF: false,
    cellText: false,
    sheets: "Seguimiento"
  })
  // almacena los datos obtenidos
  let data: InfoTableStores[] = []

  const options = {
    raw: false,
    dateNF: 'dd-mm-yyy', // Specify the date format string here
    defval: ''
  };
  // recorre cada hoja de trabajo para leer (aquí solo se lee la primera tabla por defecto)
  for (const sheet in workbook.Sheets) {
    if (workbook.Sheets[workbook.SheetNames[0]]) {
      // usa el método sheet_to_json para convertir Excel a datos json
      data = data.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet], options))
      // break; // Si solo se toma la primera tabla, descomenta esta línea
    }
  }

  return data
}

