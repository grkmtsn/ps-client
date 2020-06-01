import React from 'react';

// GraphQL
import { useQuery } from '@apollo/react-hooks';
import { GET_SHOWCASE_PRODUCTS } from '../../graphql/queries';

// Components
import {Container, Row, Col } from '../../components/Layout/styled';
import Card from '../../components/Card';
import PageTitle from '../../components/PageTitle';
import Loader from '../../components/Loader';
import Error from '../../components/Error';

const ProductList = () => {
    const { loading, error, data } = useQuery(GET_SHOWCASE_PRODUCTS);
    
    if (loading) return <Loader />;
    
    if (error) return <Error message={error.message} />;

    return (
        <Container>
            <PageTitle title="Product Showcase" />
            <Row className="list-wrapper">
                {data.productsForShowCase.map(product => (
                    <Col key={product.id}>
                        <Card product={product} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default ProductList;