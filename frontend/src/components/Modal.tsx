import {
  Box,
  Button,
  Grid,
  Modal as ModalMui,
  TextField,
  Typography,
} from '@mui/material';
import { createProduct } from '../services/product.service';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

interface ModalProps {
  open: boolean;
  handleClose: () => void;
}

function Modal(props: ModalProps) {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const payload = {
      description: event.currentTarget.description.value,
      value: Number(event.currentTarget.valueProduct.value),
    };

    const response = await createProduct(payload);

    if (!response.ok) {
      alert(response.message);
      return;
    }

    props.handleClose();
    alert(response.message);
    window.location.reload();
    event.currentTarget.description.value = '';
    event.currentTarget.valueProduct.value = '';
  }

  return (
    <>
      <ModalMui
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component="form" sx={style} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Adicionar Produto
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="description"
                label="Descrição"
                variant="outlined"
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="valueProduct"
                label="Valor"
                variant="outlined"
                type="number"
              />
            </Grid>
            <Grid item xs={12} display={'flex'} justifyContent={'end'} gap={1}>
              <Button
                onClick={props.handleClose}
                variant="text"
                color="inherit"
              >
                Cancelar
              </Button>
              <Button type="submit" variant="contained">
                Cadastrar
              </Button>
            </Grid>
          </Grid>
        </Box>
      </ModalMui>
    </>
  );
}

export default Modal;
