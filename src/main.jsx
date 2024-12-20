import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'
// import Debit_History from './Debit_History.jsx'
// import DebitGraph from './DebitGraph.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Debit_History/> */}
    {/* <DebitGraph/> */}
  
  </StrictMode>,
)
