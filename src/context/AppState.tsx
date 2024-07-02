import React, {useState} from 'react';
import AppContext from './AppContext';

interface Props {
  children: Object;
}

let AppState = ({children}: Props) => {
  let [data, setData] = useState<any>('MyDataSave');

  return (
    <AppContext.Provider
      value={{
        data,
        setData,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
