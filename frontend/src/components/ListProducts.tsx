import { Container, Grid, List, Typography } from '@mui/material';
import ListItem, { Product } from './ListItem';

interface ListProductsProps {
  products: Product[];
}

const ListProducts = (props: ListProductsProps) => {
  return (
    <Container maxWidth="md">
      <Grid container paddingY={2} spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6" color="primary" fontWeight="bold">
            Produtos
          </Typography>
          <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {props.products.map((product) => (
              <ListItem
                code={product.code}
                createdAt={new Date(product.createdAt).toLocaleDateString(
                  'pt-BR',
                  { dateStyle: 'short' },
                )}
                description={product.description}
                value={product.value}
                key={product.code}
              />
            ))}
          </List>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ListProducts;
