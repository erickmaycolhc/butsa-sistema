import { createContext, useContext } from 'react';
import { BasicInfoFile } from '../stores-interface';

export interface GlobalContent {
  arrayStores: BasicInfoFile;
  setArrayStores: (c: BasicInfoFile) => void;
}

export const MyGlobalContextStores = createContext<GlobalContent>({
  arrayStores: {
    newData: [],
    filename: ''
  },
  setArrayStores: () => {}
});

export const useGlobalContextStores = () => useContext(MyGlobalContextStores);
