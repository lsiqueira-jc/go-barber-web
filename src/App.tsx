import React from 'react';

import GlobalStyles from './styles/global';

//import Signin from './pages/SignIn';
import SignUp from './pages/SignUp';

const App: React.FC = () => (
  <>
    <SignUp />
    <GlobalStyles />
  </>
);

export default App;
