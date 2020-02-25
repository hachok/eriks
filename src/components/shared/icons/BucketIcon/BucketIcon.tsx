import React, { Component } from 'react';
import { theme } from 'src/styles/theme';

interface Props {
  width?: string;
  height?: string;
  color?: string;
  className?: string;

  onClick?(e?: React.SyntheticEvent<EventTarget>): void;
}

export default class BucketIcon extends Component<Props> {
  static defaultProps: Partial<Props> = {
    width: '20px',
    height: '20px',
    color: theme.colors.blue,
  };

  render(): React.ReactNode {
    const { width, height, className, color, onClick } = this.props;
    return (
      <div onClick={onClick} className={className}>
        <svg
          version="1.1"
          id="bucket"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width={width}
          height={height}
          viewBox="0 0 612 612"
          xmlSpace="preserve"
        >
          <g>
            <g>
              <path
                d="M540.345,19.437H389.403C388.322,8.529,379.116,0,367.916,0H244.083c-11.201,0-20.405,8.529-21.486,19.437H71.655
			c-11.93,0-21.599,9.669-21.599,21.602v41.036c0,11.934,9.669,21.6,21.599,21.6h468.691c11.93,0,21.599-9.667,21.599-21.6V41.04
			C561.944,29.106,552.275,19.437,540.345,19.437z"
                fill={color}
              />
              <path
                d="M95.337,145.167v445.234c0,11.922,9.669,21.599,21.599,21.599h378.127c11.934,0,21.595-9.674,21.595-21.599V145.167
			H95.337z M253.47,479.34c0,13.149-10.662,23.814-23.81,23.814c-13.155,0-23.81-10.664-23.81-23.814V243.273
			c0-13.149,10.655-23.81,23.81-23.81c13.148,0,23.81,10.662,23.81,23.81V479.34z M406.154,479.34
			c0,13.149-10.662,23.814-23.814,23.814s-23.81-10.664-23.81-23.814V243.273c0-13.149,10.659-23.81,23.81-23.81
			c13.151,0,23.814,10.662,23.814,23.81V479.34z"
                fill={color}
              />
            </g>
          </g>
        </svg>
      </div>
    );
  }
}
