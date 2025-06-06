import React, { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { NOAAContext } from './NOAAContext';
import type { Region, NOAAApiData } from '../types';
import { transformRegions } from '../utils/transformApiData';

export const NOAADataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [regions, setRegions] = useState<Record<string, Region>>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // TODO: change to the production endpoint (use a secret / .env)
        const response = await fetch('http://localhost:5001/gofish?apikey=abrradiology');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result: NOAAApiData[] = await response.json();
        setRegions(transformRegions(result));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <NOAAContext.Provider value={{ regions, loading, error }}>
      {children}
    </NOAAContext.Provider>
  );
};
