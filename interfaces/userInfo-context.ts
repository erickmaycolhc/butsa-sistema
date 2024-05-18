import { createContext, useContext } from 'react';
import { User } from './userFromSystem';

export interface UserInfoGlobalContent {
  userDataSession: User;
  setUserDataSession: (c: User) => void;
}

export const UserSystemContext = createContext<UserInfoGlobalContent>({
  userDataSession: {},
  setUserDataSession: () => {}
});

export const useUserInfoGlobalContent = () => useContext(UserSystemContext);
