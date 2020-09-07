import React, { useState } from 'react';

import DateTme from "./components/dateTime";

function App() {
  const [loadClient, setLoadClient] = useState(true);

  return (
    <>
      <button onClick={() => setLoadClient(prevState => !prevState)}>
        {loadClient ? 'STOP CLIENT' : 'CONNECT CLIENT'}
      </button>

      {loadClient ? <DateTme /> : null}
    </>
  );
}

export default App;
