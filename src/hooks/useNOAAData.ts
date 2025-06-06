import { useContext } from 'react';
import { NOAAContext } from '../contexts/NOAAContext';

export const useNOAAData = () => {
  const context = useContext(NOAAContext);
  if (context === undefined) {
    throw new Error('useNOAAData must be used within a DataProvider');
  }
  return context;
}; 