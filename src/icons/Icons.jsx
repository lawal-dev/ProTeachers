// src/Icon.js
import React from 'react';
import ICONS from './icon';

function Icon({ type }) {
  const IconComponent = ICONS[type] || null;
  return IconComponent ? <IconComponent /> : <span>Icon not found</span>;
}

export default Icon;
