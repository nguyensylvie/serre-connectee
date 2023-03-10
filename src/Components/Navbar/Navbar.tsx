import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import TableChartIcon from '@material-ui/icons/TableChart';
import Dashboard from '../Dashboard/Dashboard';
import Data from '../Data/Data';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      backgroundColor: '#6E987B'
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: 'auto',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
);

interface NavbarProps {
  dashboard: boolean;
  data: boolean;
  charts: boolean;
  table: boolean;
  showDashboard: () => void;
  showData: () => void;
  showCharts: () => void;
  showTable: () => void;
}

function Navbar(props: NavbarProps) {
  const classes = useStyles();
  const { dashboard, data, charts, table, showDashboard, showData, showCharts, showTable } = props;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h5" noWrap>
            Serre connectée
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
            <List>
                <ListItem button onClick={showDashboard}>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Tableau de bord" />
                </ListItem>
                <ListItem button onClick={showData}>
                    <ListItemIcon>
                        <TableChartIcon />
                    </ListItemIcon>
                    <ListItemText primary="Données" />
                </ListItem>
            </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        {dashboard && <Dashboard />}
        {data && <Data charts={charts} table={table} showCharts={showCharts} showTable={showTable}/>}
      </main>
    </div>
  );
}

export default Navbar;