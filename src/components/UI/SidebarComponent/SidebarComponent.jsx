import React from 'react';

import DiscoverIcon from '@atlaskit/icon/glyph/discover';
import TrayIcon from '@atlaskit/icon/glyph/tray';
import FolderIcon from '@atlaskit/icon/glyph/folder';
import PeopleIcon from '@atlaskit/icon/glyph/people';

import Logo from '../../../assets/logo-udg.png';

import Navigation, {
  AkContainerLogo,
  AkNavigationItem,
  AkContainerNavigationNested,
  presetThemes,
} from '@atlaskit/navigation';

export default (props) => {

  const stack = [
    [
      <AkNavigationItem key="1"
      text="Activity"
      icon={<DiscoverIcon label="Activity icon" size="medium" />}
      isSelected
      />,
      <AkNavigationItem key="2"
        text="Your work"
        icon={<TrayIcon label="Your work icon" size="medium" />}
      />,
      <AkNavigationItem key="3"
        text="Spaces"
        icon={<FolderIcon label="Spaces icon" size="medium" />}
      />,
      <AkNavigationItem key="4"
        text="People"
        icon={<PeopleIcon label="People icon" size="medium" />}
      />
    ]
  ]
  return (
    <Navigation
      containerTheme={presetThemes.dark}
      globalPrimaryItemHref="/"
      globalPrimaryIcon={
        <img src={Logo} width="30" height="35" />
      }
      isOpen={true}
      width={300}
      hasScrollHintTop
    >
      <AkContainerNavigationNested stack={stack} />
    </Navigation>
  )
}
