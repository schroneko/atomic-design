import React from 'react';

const Img = props => <img { ...props } />;

export default Img;

Object.assign(Img, { displayName: 'Img' });
