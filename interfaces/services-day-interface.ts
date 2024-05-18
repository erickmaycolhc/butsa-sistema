
export interface InfoTableServicesDay {
  id: string;
  fecha_registro: string;
  rutas: string;
  jabas: string;
  estado_servicio: string;
  cargo_seco?: string;
  fecha_finalizacion_servicio?: string;
  usuario?: string;
}

export interface BasicInfoServicesDay {
  newData: InfoTableServicesDay[];
  filename: String;
}
