import { AppBar, Box, Button, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Stack direction="row" justifyContent="space-between">
          <Button color="inherit" onClick={() => navigate('/')}>
            <Typography fontWeight="bold" variant="h6">
              HOME
            </Typography>
          </Button>
          <Typography
            variant="h3"
            py={2}
            textAlign="center"
            component="div"
            fontWeight="bold"
          >
            Poducts Store
          </Typography>
          <Box></Box>
        </Stack>
      </AppBar>
    </Box>
  );
};

export default Header;
