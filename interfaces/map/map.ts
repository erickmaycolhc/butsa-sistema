export interface Coordinates {
  lat: number;
  lng: number;
}
export interface Schedule {
  open: string;
  close: string;
}

export interface Tienda {
  id: string;
  name: string;
  direction: string;
  schedule: Schedule;
  district: string;
  days_attention: string;
  coordinate: Coordinates;
}

export type EpochTimeStamp = number;
export interface GeolocationPosition {
  readonly coords: GeolocationCoordinates;
  readonly timestamp: EpochTimeStamp;
}

export interface GeolocationCoordinates {
  readonly accuracy: number;
  readonly altitude: number | null;
  readonly altitudeAccuracy: number | null;
  readonly heading: number | null;
  readonly latitude: number;
  readonly longitude: number;
  readonly speed: number | null;
}

export interface MarkerZoom {
  name?: string;
  zoom?: number;
}
