import React from 'react';
import Logo from './Logo'

const Dashboard = props => (
  <Logo roomName={props.match.params.roomId} />
)

export default Dashboard;
