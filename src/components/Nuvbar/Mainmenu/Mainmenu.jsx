import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import SideMenu from './../Sidemenu/Sidemenu.jsx';


class TopMenu extends React.Component {
  render() {

    return (


      <>
      <Navbar bg="light" expand="lg"> 555
      <Button variant="primary" >
        Launch
      </Button>
      </Navbar>
    </>
      );
  }
}

export default TopMenu;