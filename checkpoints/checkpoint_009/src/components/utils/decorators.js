import { cloneElement } from 'react';

export const withStyle = style => component => cloneElement(component, { style });
