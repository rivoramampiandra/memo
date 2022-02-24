import React, {createContext, FC} from 'react';

type StepAuthContextType = {};

export const StepAuthContext = createContext<StepAuthContextType>({});

const StepProvider: FC = ({children}) => {
  const handleNext = () => {};

  return (
    <StepAuthContext.Provider value={{}}>{children}</StepAuthContext.Provider>
  );
};

export default StepProvider;
