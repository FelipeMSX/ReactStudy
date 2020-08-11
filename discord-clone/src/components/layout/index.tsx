import React from 'react';
import { Grid } from './styles';
import ServerList from '../serverlist';
import ServerName from '../servername';


const Layout: React.FC = () =>{
  return(
    <Grid>
      <ServerList></ServerList>
      <ServerName></ServerName>

    </Grid>
  )
};


export default Layout;