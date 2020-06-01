import React from 'react';
import { useParams } from 'react-router-dom';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

// GraphQL
import { useQuery } from '@apollo/react-hooks';
import { GET_PRODUCT_PRICE_DETAILS } from '../../graphql/queries';



// Charts

// Components
import { Container } from '../../components/Layout/styled';
import PageTitle from '../../components/PageTitle';
import Loader from '../../components/Loader';
import Error from '../../components/Error';

const ProductPriceDetails = () => {
    const { id } = useParams();
    const { loading, error, data } = useQuery(GET_PRODUCT_PRICE_DETAILS,{variables: {id}});
    
    if (loading) return <Loader />;
    
    if (error) return <Error message={error.message} />;
    const { productPriceHistory } = data;
    const { priceHistory } = productPriceHistory;

    const dateFormatter = (tick) => {
        return new Date(tick).toLocaleDateString("tr-TR");
    }

    return (
        <Container>
            <PageTitle title={`${productPriceHistory.title} Price Details`} />
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <AreaChart
                        width={500}
                        height={400}
                        data={priceHistory}
                        margin={{
                            top: 50, right: 30, left: 0, bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" tickFormatter={dateFormatter} />
                        <YAxis />
                        <Tooltip labelFormatter={dateFormatter} />
                        <Area type="monotone" dataKey="price" stroke="#2c789e" fill="#2c789e" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </Container>
    )
}

export default ProductPriceDetails;