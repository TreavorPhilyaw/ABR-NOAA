import { createContext } from 'react';
import type { Region } from '../types';

interface NOAAContextType {
  regions?: Record<string, Region>;
  loading: boolean;
  error?: string;
}

export const NOAAContext = createContext<NOAAContextType | undefined>(undefined); 