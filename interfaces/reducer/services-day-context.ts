import { createContext, useContext } from 'react';
import { BasicInfoServicesDay } from '../services-day-interface';

export interface GlobalContentServicesDay {
  arrayServicesDay: BasicInfoServicesDay;
  setArrayServicesDay: (c: BasicInfoServicesDay) => void;
}

export const MyGlobalContextServicesDay = createContext<GlobalContentServicesDay>({
  arrayServicesDay: {
    newData: [],
    filename: ''
  },
  setArrayServicesDay: () => {}
});

export const useGlobalContextServicesDay = () => useContext(MyGlobalContextServicesDay);
