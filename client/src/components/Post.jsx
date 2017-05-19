import React from 'react';
import Logo from './Logo';

const Post = props => (
  <Logo roomName={props.match.params.roomId} />
)

export default Post;
