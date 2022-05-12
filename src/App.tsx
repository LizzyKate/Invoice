import React from 'react';
import './App.css';
import InvoiceButton from './components/Button';


function App() {
  return (
    <div>
      <InvoiceButton title='Mark As Paid' class={"bg-purple-300 text-white w-32 hover:bg-purple-200"} />
    </div>
  );
}

export default App;
