import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet,useLocation } from 'react-router-dom';
import Loader from '../../../Components/Loader';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  Box,
  IconButton,
  AppBar,
  Toolbar,
  CssBaseline,
  TextField,
  InputAdornment,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import ListIcon from '@mui/icons-material/List';
import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState,useEffect } from 'react';

const drawerWidth = 240;

const AuthLayout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    // Show the loader when the route changes
    setIsLoading(true);

    // Simulate a delay to show loader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the delay as needed

    // Cleanup the timer on unmount
    return () => clearTimeout(timer);
  }, [location]);

  const drawerContent = (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h6" noWrap sx={{ padding: 2 }}>
        MOVIBAZAR
      </Typography>
      <List>
        <ListItem button component={Link} to="/movies">
          <ListItemIcon>
            <MovieIcon />
          </ListItemIcon>
          <ListItemText primary="Movies" />
        </ListItem>
        <ListItem button component={Link} to="/webseries">
          <ListItemIcon>
            <TvIcon />
          </ListItemIcon>
          <ListItemText primary="Series" />
        </ListItem>
        <ListItem button component={Link} to="/my-list">
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText primary="My List" />
        </ListItem>
      </List>
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ padding: 2 }}>
        <List>
          <ListItem button component={Link} to="#">
            <ListItemText primary="All Films" />
          </ListItem>
          <ListItem button component={Link} to="#">
            <ListItemText primary="Features" />
          </ListItem>
          <ListItem button component={Link} to="#">
            <ListItemText primary="Documents" />
          </ListItem>
          <ListItem button component={Link} to="#">
            <ListItemText primary="Shorts" />
          </ListItem>
          <ListItem button component={Link} to="#">
            <ListItemText primary="TV Shows" />
          </ListItem>
          <ListItem button component={Link} to="#">
            <ListItemText primary="Commercials" />
          </ListItem>
        </List>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
        <Toolbar>
          {/* Always show the sidebar icon button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <ListItem button component={Link} to="/">
            <ListItemText
              primary="MOVIBAZAR"
              sx={{
                color: 'white',
                fontWeight: 'bold',
              }}
            />
          </ListItem>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'block', lg:"block" }, // Show drawer on all screens
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
        >
          {drawerContent}
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, overflow: 'hidden' }}>
        <Toolbar />
        {isLoading ? (
        <Loader />
      ) : (
        // Render the children components if not loading
        <Outlet />
      )}
      </Box>
    </Box>
  );
};

export default AuthLayout;
