import { UploadFile } from 'antd/lib/upload/interface';
import { convertCSVtoJSON } from './csvToJson';


export type ITypeProveedor = "" | "PALOMINO" | "CANCHARI" | "CEVA" | "DINET" | "LEYVA";

export function setUploadFileToArray(
  file: UploadFile<any>,
  setArrayStores: any,
  setIsModalVisible: any
) {
  const reader = new FileReader();
  reader.onload = function (p) {
    const result = p.target?.result;
    const data = convertCSVtoJSON(result);

    const newData = data
      .filter((item) => item.PROVEEDOR === "PALOMINO")
      .map((x) => {
        return Object.fromEntries(
          Object.entries(x).map(([headerName, cellValue]) => {
            if (typeof cellValue === 'string') {
              cellValue = cellValue.trim();
            }
            // set empty string in budget as undefined, because budget is treated as number later
            // if (["ENTREGAS_CONFORME", "OBSERVACION"].includes(headerName) && cellValue === '') {
            //   cellValue = "";
            // }
            return [headerName, cellValue];
          })
        )
      })

    if (newData.length === 0) {
      setIsModalVisible(true)
    } else {
      setArrayStores({ newData: newData, filename: file.name.split('.')[0] });
    }
  };
  const infoFileBlob = file.originFileObj as Blob;
  if (file.name.split('.').pop() === 'csv') {
    reader.readAsText(infoFileBlob);
  } else {
    reader.readAsBinaryString(infoFileBlob);
  }
}
