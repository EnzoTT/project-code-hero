import { useEffect } from 'react'
import api from './app/services/api'

function App() {
  useEffect(() => {
   api
    .get(
      `/characters`
    ).then((res) => {
      console.log(res)
    })
  }, [])

  return (
    <div className="App">
      App
    </div>
  );
}

export default App;
