import React from 'react';
import NointernetPage from 'assets/images/No internet-vector.png';
import 'assets/scss/page/_notfound.scss';
import { Container, Navbar } from 'react-bootstrap';

import { TNButton } from './TNButton';
import userIcon from 'assets/images/admin-telepath-logo.png';

export default function NoInternetPage() {
  /**
    This function will call on Try again button and will reload page
   */
  const handleClick = () => {
    window.location.reload();
  };
  return (
    <>
      <Navbar className="sticky-top navbar-section">
        <Container fluid className="container-section">
          <Navbar.Brand className="dashboard-logo">
            <img src={userIcon} alt="dashboardlogo" className="nav-brand" />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div className="page-not-found">
        <img src={NointernetPage} alt="no-internet" className="not-found-image" />
        <h1 className="page-heading-center">Oops!</h1>
        <div className="error-page-text">NO INTERNET CONNECTION,PLEASE CHECK YOUR INTERNET </div>
        <div className="primary-button">
          <TNButton loading={false} type="button" onClick={handleClick}>
            Try Again
          </TNButton>
        </div>
      </div>
    </>
  );
}
