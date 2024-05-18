enum Fields {
    'Email Address' = 'Email Address',
    'Managers Email Address' = 'Managers Email Address'
  }
  
  type FieldsObject = {
    [K in Fields]?: string;
  };
  
  export interface InfoTableStores extends FieldsObject {
    FECHA_DESPACHO?: string;
    TIENDA?: string;
    ID_TIENDA?: string;
    RUTA?: string;
    GUIA?: string;
    VALOR?: string;
    PROVEEDOR?: string;
    PLACA?: string;
    CONDUCTOR?: string;
    AUXILIAR?: string;
    ESTADO?: string;
    FECHA_DE_ENTREGA?: string;
    OBSERVACION?: string;
    ENTREGAS_CONFORME?: string;
  }
  
  export interface BasicInfoFile {
    newData: InfoTableStores[];
    filename: String;
  }
  