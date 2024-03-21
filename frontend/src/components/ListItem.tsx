import {
  Button,
  Container,
  Grid,
  ListItem as ListItemMUI,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {
  UpdateProduct,
  deleteProduct,
  listAllProducts,
  updateProduct,
} from '../services/product.service';
import { useNavigate } from 'react-router-dom';

export interface Product {
  code: string;
  description: string;
  value: number;
  createdAt: string;
}

const ListItem = (props: Product) => {
  const navigate = useNavigate();

  async function edit(code: string) {
    const description = prompt(`Digite a nova descrição: `);
    const valueInput = prompt(`Digite o novo valor: `);

    const valueReplaced = valueInput?.replace(',', '.');
    const valueFormated = Number(valueReplaced);

    const payload: UpdateProduct = {
      code,
      description: description ? description : undefined,
      value: valueFormated ? valueFormated : undefined,
    };

    if (!description && !valueFormated) {
      return;
    }

    const response = await updateProduct(payload);

    alert(response.message);
    listAllProducts();
    window.location.reload();
  }

  async function removeProduct(code: string) {
    const confirmed = confirm(
      `Você deseja realmente excluir o produto de código: ${code} ?`,
    );

    if (!confirmed) {
      return;
    }

    const response = await deleteProduct(code);
    alert(response.message);

    listAllProducts();
    window.location.reload();
  }

  function viewProduct(code: string) {
    console.log(code);
    console.log(typeof code);
    navigate(`/detail/${code}`);
  }

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
                <Stack direction="row" justifyContent="end" gap={1}>
                  <Button
                    color="error"
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                    onClick={() => removeProduct(props.code)}
                  >
                    Deletar
                  </Button>
                  <Button
                    color="secondary"
                    variant="outlined"
                    startIcon={<EditIcon />}
                    onClick={() => edit(props.code)}
                  >
                    Editar
                  </Button>
                  <Button
                    color="info"
                    variant="outlined"
                    startIcon={<VisibilityIcon />}
                    onClick={() => viewProduct(props.code)}
                  >
                    Visualizar
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Paper>
      </ListItemMUI>
    </>
  );
};

export default ListItem;
