import React from 'react';

import DashboardIcon from '@atlaskit/icon/glyph/dashboard';
import EventIcon from '@atlaskit/icon/glyph/objects/16/event';
import SettingsIcon from '@atlaskit/icon/glyph/settings';
import UserIcon from '@atlaskit/icon/glyph/objects/24/user';
import SignOutIcon from '@atlaskit/icon/glyph/sign-out';
import DocIcon from '@atlaskit/icon/glyph/tray';
import BugIcon from '@atlaskit/icon/glyph/jira/test-session';

// This is the sidebar menu
export const SideBarMenuItems = [
  { id: '1', type:'header', title: 'Menu', 
    items: [
      { id: '1.1', type:'item', text: 'Inicio', src: '/', icon: <DashboardIcon size="medium"/> },
      { id: '1.2', type:'item', text: 'Mis Eventos', src: '/events', icon: <EventIcon size="medium" /> },
      { id: '1.3', type:'item', text: 'Administracion', src: '/admin', icon: <SettingsIcon size="medium" /> }
    ]
  },
  { id: '2', type:'header', title: 'Configuracion', 
    items: [
      { id: '2.1', type:'item', text: 'Mi cuenta', src: '/account', icon: <UserIcon size="medium" /> },
      { id: '2.2', type:'item', text: 'Salir', src: '/logout', icon: <SignOutIcon size="medium" />  }
    ]
  },
]

// This are the configuration items from the administration page
export const ConfigurationItems = [
  { id: 2, description: 'Constancias', icon: <DocIcon size="xlarge" primaryColor="#b1b1b1" />, url: '/admin/diplomas'  },
  { id: 3, description: 'Reportar un Bug', icon: <BugIcon size="xlarge" primaryColor="#b1b1b1" />, url: '/bug'  }
]


export const cloudinaryConfiguration = {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  upload_preset: process.env.CLOUDINARY_PRESET
}