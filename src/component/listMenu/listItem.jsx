import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import BarChartIcon from '@mui/icons-material/BarChart';
// import LayersIcon from '@mui/icons-material/Layers';
import ExploreIcon from '@mui/icons-material/Explore';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

export const mainListItems = (
  <div>
    <ListItem button component="a" href="/dashboard" >
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button component="a" href="/Produk">
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Produk" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ExploreIcon />
      </ListItemIcon>
      <ListItemText primary="Pariwisata" />
    </ListItem>
    {/* <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem> */}
    <ListItem button>
      <ListItemIcon>
        {/* <LayersIcon /> */}
        <PowerSettingsNewIcon/>
      </ListItemIcon>
      <ListItemText primary="Keluar" />
    </ListItem>
  </div>
);
