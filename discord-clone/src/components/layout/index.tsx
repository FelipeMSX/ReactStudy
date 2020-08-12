import React from 'react';
import { Grid } from './styles';
import ServerList from '../serverlist';
import ServerName from '../servername';
import ChannelInfo from '../channelinfo';
import ChannelList from '../channellist';
import UserInfo from '../userinfo';
import UserList from '../userlist';






const Layout: React.FC = () =>{
  return(
    <Grid>
      <ServerList></ServerList>
      <ServerName></ServerName>
      <ChannelInfo></ChannelInfo>
      <ChannelList></ChannelList>
      <UserInfo></UserInfo>
      <UserList></UserList>
    </Grid>
  )
};


export default Layout;