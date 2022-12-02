'use client'

import { createContext, ReactNode, useContext } from 'react';

export const TestContext = createContext<any>('');
export const useTest = () => useContext(TestContext);

export const TestProvider = ({ children }: { children: ReactNode }) => {
  return (
    <TestContext.Provider value={{ test: 'test' }}>
      {children}
    </TestContext.Provider>
  );
};
