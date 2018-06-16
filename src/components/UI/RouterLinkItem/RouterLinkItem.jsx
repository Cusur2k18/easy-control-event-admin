import React from 'react';

import { AkNavigationItem } from '@atlaskit/navigation';
import RouterLinkComponent from '../RouterLinkComponent/RouterLinkComponent';

export default (props) => {

  return (
    <AkNavigationItem
      href={props.to}
      isSelected={props.isSelected}
      linkComponent={RouterLinkComponent}
      text={props.text}
      icon={props.icon}
    />)
}