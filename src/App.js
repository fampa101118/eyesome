import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Component/Header';
import PrivateRoutes from './Routes/PrivateRoutes';

function App() {

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [filterValue, setFilterValue] = useState("");

  const handleFilterChange = (value) => {
    setFilterValue(value);
  };

  return (
    <Router>
      <Header
        onFilterChange={handleFilterChange} // Use the correct prop name
        selectedProducts={selectedProducts}
      />
      <PrivateRoutes
        filterValue={filterValue}
        selectedProducts={selectedProducts}
        setSelectedProducts={setSelectedProducts}
      />
    </Router>
  );
}

export default App;
