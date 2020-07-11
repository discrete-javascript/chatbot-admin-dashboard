import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import uuid from 'uuid/v1';

import { ProductCard } from './components';
import { Divider, Drawer } from '@material-ui/core';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import PeopleIcon from '@material-ui/icons/People';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ChatIcon from '@material-ui/icons/Chat';
import CallIcon from '@material-ui/icons/Call';

const mockData = [
  {
    id: uuid(),
    title: 'Customer',
    description: 'Count of customer used chatbot service today',
    image: '/images/products/product_1.png',
    count: '594',
    imageComponent: <PeopleIcon />,
    updatedAt: '27/03/2019'
  },
  {
    id: uuid(),
    title: 'Solize Services',
    description: 'Count of staffing service, feedback, Others for today',
    image: '/images/products/product_2.png',
    count: '625',
    imageComponent: <AssignmentIcon />,
    createdAt: '31/03/2019'
  },
  {
    id: uuid(),
    title: 'Job Description',
    description: 'Count of JD yes and no',
    image: '/images/products/product_3.png',
    count: '857',
    imageComponent: <BusinessCenterIcon />,
    createdAt: '03/04/2019'
  },
  {
    id: uuid(),
    title: 'Solize Live Agent Request',
    description: 'Count of Solize Live Agent service request',
    image: '/images/products/product_4.png',
    count: '406',
    imageComponent: <CallIcon />,
    createdAt: '04/04/2019'
  },
  {
    id: uuid(),
    title: 'New Question',
    description: 'The record shall be at Count of B73 in chatbot workflow',
    image: '/images/products/product_5.png',
    count: '835',
    imageComponent: <ChatIcon />,
    createdAt: '04/04/2019'
  }
];

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  },
  pagination: {
    marginTop: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
}));

const ProductList = () => {
  const classes = useStyles();

  const [products] = useState(mockData);

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Grid container spacing={3}>
          {products.map(product => (
            <Grid item key={product.id} lg={4} md={6} xs={12}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default ProductList;
