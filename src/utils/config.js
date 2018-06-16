export const SideBarMenuItems = [
  { id: '1', type:'header', title: 'Menu', 
    items: [
      { id: '1.1', type:'item', text: 'Inicio', src: '/' },
      { id: '1.2', type:'item', text: 'Mis Eventos', src: '/my-events' },
      { id: '1.3', type:'item', text: 'Administracion', src: '/setup' }
    ]
  },
  { id: '2', type:'header', title: 'Configuracion', 
    items: [
      { id: '2.1', type:'item', text: 'Mi cuenta', src: '/account' },
      { id: '2.2', type:'item', text: 'Salir', src: '/logout' }
    ]
  },
]