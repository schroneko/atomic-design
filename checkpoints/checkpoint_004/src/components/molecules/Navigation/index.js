import React from 'react';
import styles from './styles.css';

const Navigation = ({ items, ...props }) => (
  <nav { ...props }>
    <ul className={ styles.list }>
      { items.map((item, idx) => (
        <li key={ idx } className={ styles.item }>
          { !item.current ?
            <a href={ item.url } className={ styles.link }>{ item.label }</a>
            :
            <span className={[ styles.link, styles.current ].join(' ')}>{ item.label }</span>
          }
        </li>
      )) }
    </ul>
  </nav>
);
export default Navigation;
