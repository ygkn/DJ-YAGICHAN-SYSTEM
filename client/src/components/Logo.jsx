import React from 'react';

const Logo = ({roomName}) => (
  <div>
    <h1>DJ YAGICHAN SYSTEM</h1>
    {roomName && <p>in {roomName}</p>}
  </div>
)

export default Logo;
