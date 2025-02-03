/* eslint-disable react/prop-types */
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import ListItemIcon from "@mui/material/ListItemIcon";

//Icons
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";

const drawerWidth = 240;

const navItems = [
  {
    id: 1,
    icon: <RecentActorsIcon />,
    title: "Rota 1",
  },
  {
    id: 2,
    icon: <AssignmentTurnedInIcon />,
    title: "Rota 2",
  },
  {
    id: 3,
    icon: <AddLocationAltIcon />,
    title: "Rota 3",
  },
  {
    id: 4,
    icon: <AddAlertIcon />,
    title: "Rota 4",
  },
  {
    id: 5,
    icon: <AssuredWorkloadIcon />,
    title: "Rota 5",
  },
];

function DrawerAppBar({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton sx={{ textAlign: "left" }}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box>
      <AppBar component="nav" elevation={0}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="center"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      <Box
        component="main"
        sx={{
          p: 2,
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

export default DrawerAppBar;
