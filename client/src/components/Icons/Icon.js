import React from 'react';
import SVGInline from 'react-svg-inline';

const Icon = ({ icon, width, accessibilityLabel, className }) => (
  <SVGInline width={width} className={className} svg={icon} />
);

export default Icon;
