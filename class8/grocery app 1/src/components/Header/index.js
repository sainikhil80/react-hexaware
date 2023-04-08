import React from "react";

const Header = () => {
  return (
    <div className="jumbotron text-center">
      <h1 className="display-4">Hello, Users!</h1>
      <p className="lead">
        Welcome to grocery app your one stop shop for all your grocery need
      </p>

      <p>
        It uses utility classNamees for typography and spacing to space content
        out within the larger container.
      </p>
      <a className="btn btn-primary btn-lg" href="#" role="button">
        Start Shopping
      </a>
    </div>
  );
};
export default Header;
