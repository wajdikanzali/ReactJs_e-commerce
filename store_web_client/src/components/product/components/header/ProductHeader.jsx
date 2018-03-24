import React from 'react';
import { Icon, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function HomeHeader() {
  return (
    <div>
      <Header as="h2" icon textAlign="center">
        <Icon name="shopping bag" circular />
        <Header.Content>
          <p>Product List</p>
          <Link
            href="/addProduct"
            to="/addProduct"
            title="Add New Product"
          >
            <Icon name="add circle" />
          </Link>
        </Header.Content>
      </Header>
    </div>
  );
}

export default HomeHeader;
