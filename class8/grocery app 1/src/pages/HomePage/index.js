import React from "react";
import Category from "../../components/Category";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="container">
        <Category />
      </div>
    </div>
  );
};
export default HomePage;
