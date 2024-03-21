import { useEffect, useState } from 'react';
import Header from '../components/Header';
import { useNavigate, useParams } from 'react-router-dom';
import { Product } from '../components/ListItem';
import { listProductByCode } from '../services/product.service';
import ProductDetailed from '../components/ProductDetailed';
import { Container } from '@mui/material';

const Detail = () => {
  const navigate = useNavigate();
  const { code } = useParams();
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    if (!code) {
      return navigate('/');
    }

    getProduct(code);
  }, []);

  async function getProduct(code: string) {
    const response = await listProductByCode(code);

    if (!response.ok) {
      return navigate('/');
    }

    setProduct(response.data);
  }

  return (
    <>
      <Header />
      <Container maxWidth="md">
        {product && (
          <ProductDetailed
            code={product!.code}
            createdAt={new Date(product!.createdAt).toLocaleDateString(
              'pt-BR',
              { dateStyle: 'short' },
            )}
            description={product!.description}
            value={product!.value}
            key={product!.code}
          />
        )}
      </Container>
    </>
  );
};

export default Detail;
