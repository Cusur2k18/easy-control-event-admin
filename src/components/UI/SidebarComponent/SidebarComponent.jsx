import React from 'react';
import { withRouter } from 'react-router-dom';

import DiscoverIcon from '@atlaskit/icon/glyph/discover';
import TrayIcon from '@atlaskit/icon/glyph/tray';
import FolderIcon from '@atlaskit/icon/glyph/folder';
import PeopleIcon from '@atlaskit/icon/glyph/people';
import Navigation, {
  AkContainerTitle,
  AkNavigationItemGroup,
  AkContainerNavigationNested,
  presetThemes,
} from '@atlaskit/navigation';

import Logo from '../../../assets/logo-udg.png';
import RouterLinkItem from '../RouterLinkItem/RouterLinkItem';
import * as config from '../../../utils/config';

export default withRouter((props) => {

  const sidemenu = [config.SideBarMenuItems.map( (menuItem, i) => {
    const items = menuItem.items.map( subMenuItem => {
      return (
        <RouterLinkItem 
          key={subMenuItem.id} 
          to={subMenuItem.src}
          isSelected={props.location.pathname === subMenuItem.src} 
          text={subMenuItem.text}
          icon={subMenuItem.icon}/>
        )
    })
    return (
      <AkNavigationItemGroup key={menuItem.id} title={menuItem.title}>
        {items}
      </AkNavigationItemGroup>
    )
    
  })]

  return (
    <Navigation
      containerTheme={presetThemes.dark}
      globalPrimaryItemHref="/"
      globalPrimaryIcon={
        <img src={Logo} width="30" height="35" />
      }
      containerHeaderComponent={() => (
        <AkContainerTitle
          text="Bienvenido!"
        />)}
      isOpen={true}
      width={300}
      hasScrollHintTop
    >
      <AkContainerNavigationNested stack={sidemenu} />
    </Navigation>
  )

})
