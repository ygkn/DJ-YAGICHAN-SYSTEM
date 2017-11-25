import React from 'react';

export const  VideoList = props => {
  const items = props.videos.map(video => (
    <li>
      <button onClick={() => props.onPlay(video.id)}>
        <img src={video.thumb} />
      </button>
      <p>{video.title}</p>
      <p>{video.description}</p>
      <button onClick={() => props.onSubmit(video.id)}>{props.buttonLabel}</button>
      {props.postedBy
        ? <small> {video.postedBy}「{video.comment}」</small>
        : null
      }
    </li>
  ))

  return (
    <ul>
      {items}
    </ul>
  );
}