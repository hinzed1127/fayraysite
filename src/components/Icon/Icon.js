// @flow
import React from 'react';

type TypeProps = {
  icon: string[],
  link?: string,
  fill?: string
};

export default function Icon(props: TypeProps) {
  const styles = {
    svg: {
      display: 'inline-block',
      verticalAlign: 'middle'
    },
    path: {
      fill: props.fill || '#000'
    }
  };
  const size = 40;

  const icon = (
    <svg
      className="icon"
      style={styles.svg}
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 1024 1024"
    >
      {props.icon.map((path, index) => (
        <path key={index} style={styles.path} d={path} />
      ))}
    </svg>
  );

  if (props.link) {
    return (
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        {icon}
      </a>
    );
  } else {
    return icon;
  }
}
