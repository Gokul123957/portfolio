import { AppBar, Box, Container, IconButton, Toolbar, Typography, useTheme } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useColorMode } from '../themes/ThemeProvider';

const Navbar = () => {
  const theme = useTheme();
  const { toggleColorMode } = useColorMode();

  return (
    <AppBar position="fixed" color="inherit">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, fontWeight: 'bold' }}
          >
            Gokul Krishnan
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <IconButton onClick={toggleColorMode} color="inherit">
              {theme.palette.mode === 'dark' ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;