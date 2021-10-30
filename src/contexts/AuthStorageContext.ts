import { createContext } from 'react';
import authStorage, { AuthStorageType } from '../utils/authStorage';

const AuthStorageContext = createContext<AuthStorageType>(new authStorage());

export default AuthStorageContext;
