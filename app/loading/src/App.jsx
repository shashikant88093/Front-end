import { useEffect, useState } from 'react';
import './App.css';
import withLoading from './component/loading';
import Header from './component/header';
// import ThemeMode from 'ThemeMode'
import { useTheme } from './component/theme';

function App() {
  const [isloading, setIsLoading] = useState(true);
  const [name, setName] = useState('Shashikant Kumar');
  const {dark,toggle} = useTheme(); 

  const WithLoadingHeader = withLoading(Header);

  useEffect(() => {
    let idleTimer = null;

    idleTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Set a delay (e.g., 2 seconds)

    return () => {
      clearTimeout(idleTimer);
    };
  }, []);

  return (
    <>
    <button onClick={toggle} >Switch</button>
      <WithLoadingHeader isloading={isloading} name={name} />
    </>
  );
}

export default App;
