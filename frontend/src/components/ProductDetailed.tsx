import {
  Container,
  Grid,
  ListItem as ListItemMUI,
  Paper,
  Typography,
} from '@mui/material';

import { Product } from './ListItem';

const ProductDetailed = (props: Product) => {
  return (
    <>
      <ListItemMUI alignItems="flex-start">
        <Paper elevation={3}>
          <Container maxWidth="md">
            <Grid container paddingY={2} spacing={2}>
              <Grid item xs={12}>
                <Typography fontWeight="bold">
                  Descrição:{' '}
                  <Typography fontWeight="normal" component="span">
                    {props.description}
                  </Typography>
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography fontWeight="bold">
                  Código:{' '}
                  <Typography fontWeight="normal" component="span">
                    {props.code}
                  </Typography>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography fontWeight="bold">
                  Valor:{' '}
                  <Typography fontWeight="normal" component="span">
                    R$ {props.value.toFixed(2)}
                  </Typography>
                </Typography>
              </Grid>
            </Grid>
            <Typography textAlign="end">
              <Typography fontWeight="bold" component="span">
                Cadastrado em:{' '}
              </Typography>
              {props.createdAt}
            </Typography>
          </Container>
        </Paper>
      </ListItemMUI>
    </>
  );
};

export default ProductDetailed;
