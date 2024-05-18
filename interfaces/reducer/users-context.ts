import { createContext, useContext } from 'react';
import { InfoUser } from '../user-context-interface';

export interface GlobalContent {
    arrayUsers: InfoUser[];
    setArrayUsers: (c: InfoUser[]) => void;
}

export const GlobalContextUser = createContext<GlobalContent>({
    arrayUsers: [],
    setArrayUsers: () => {}
})

export const useGlobalContextUser = () => useContext(GlobalContextUser)
