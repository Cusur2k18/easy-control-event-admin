import React from 'react';
import { Link } from 'react-router-dom';

export default class RouterLinkComponent extends React.Component {
  render() {
    const { href, children, onMouseDown, className } = this.props;
    
    return href ? (
      <Link className={className} onMouseDown={onMouseDown} to={href}>
        {children}
      </Link>
    ) : (
      children
    );
  }
}
