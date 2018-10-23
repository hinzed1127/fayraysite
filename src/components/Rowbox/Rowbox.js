// @flow
import React from 'react';
import './Rowbox.css';
import { Link } from 'react-router-dom';

type TypeProps = {
  text: string,
  linkPath: string,
  number: number
};

export default function Rowbox(props: TypeProps) {
  let classes = `rowbox btn btn-${props.number}`;
  if (props.linkPath === window.location.pathname) {
    classes += ' selected';
  }
  const linkStyles = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  };

  return (
    <div className={classes}>
      <Link style={linkStyles} to={props.linkPath}>
        {props.text}
      </Link>
    </div>
  );
}
