"use client"
import React, { createContext, useContext, useState } from 'react';

type ContainerType = 'standard' | 'wide';

interface ContainerContextType {
  containerType: ContainerType;
  setContainerType: (type: ContainerType) => void;
}

const ContainerContext = createContext<ContainerContextType | undefined>(undefined);

export const ContainerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [containerType, setContainerType] = useState<ContainerType>('standard');

  return (
    <ContainerContext.Provider value={{ containerType, setContainerType }}>
      {children}
    </ContainerContext.Provider>
  );
};

export const useContainer = () => {
  const context = useContext(ContainerContext);
  if (!context) {
    throw new Error('useContainer must be used within ContainerProvider');
  }
  return context;
};