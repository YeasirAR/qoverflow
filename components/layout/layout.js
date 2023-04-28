import React, { useState } from 'react'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'

export default function Layout({ children }) {
  const [search, setSearch] = useState('');

  const handleSearchChange = (newSearch) => {
    setSearch(newSearch);
  };

  return (
    <>
      <Navbar onSearchChange={handleSearchChange} />
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { search});
      })}
      <Footer />
    </>
  );
}