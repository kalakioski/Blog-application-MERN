import React from 'react';
import { Container } from 'reactstrap';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import IPageProps from '../interfaces/page';

const HomePage: React.FunctionComponent<IPageProps> = (props) => {
  return (
    <Container fluid className="p-0">
      <Navigation />
      <Header title="A Blog Website" headline="Check this out!" />
      <Container className="mt-5">Blog Stuff Here...</Container>
    </Container>
  );
};

export default HomePage;
