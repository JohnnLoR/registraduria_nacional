import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'NOTICIAS',
    // pathMatch: 'prefix',
    icon: 'layout-outline',
    link: '/pages/layout/tabs',
  },
  {
    title: 'SESION',
    icon: 'at-outline',
    children: [
      {
        title: 'Iniciar Sesión',
        icon: 'log-in-outline',
        link: '/pages/seguridad/login',
        home: true,
      },
      {
        title: 'Cerrar Sesión',
        icon: 'log-out-outline',
        link: '/pages/seguridad/logout',
        home: true,
      },
    ]
  },
  {
    title: 'RESULTADOS',
    icon: 'file-text-outline',
    children: [
      {
        title: 'Gestionar Candidatos',
        icon: 'person-outline',
        link: '/pages/candidatos/listar',
      },
      {
        title: 'Gestionar Partidos',
        icon: 'award-outline',
        link: '/pages/partidos/listar',
      },
      {
        title: 'Gestionar Mesas',
        icon: 'archive-outline',
        link: '/pages/mesas/listar',
      },  
      {
        title: 'Gestionar Resultados',
        icon: 'book-open-outline',
        link: '/pages/resultados/listar',
      },
    ]
  },
  {
    title: 'REPORTES',
    icon: 'book-outline',
    children: [
      {
        title: 'Mesa Nax Inscritos',
        icon: 'file-outline',
        link: '/pages/reportes/max-inscritos',
      },
      {
        title: 'Inscrito en Mesas',
        icon: 'file-text-outline',
        link: '/pages/reportes/candidato-mesas',
      },
      {
        title: 'Inscritos en Mesa',
        icon: 'file-text-outline',
        link: '/pages/reportes/candidatos-mesa',
      },
      {
        title: 'Total Votos Candidato',
        icon: 'file-text-outline',
        link: '/pages/reportes/conteo',
      },
      {
        title: 'Candidato Más Votado',
        icon: 'file-outline',
        link: '/pages/reportes/ganador',
      },
    ]
  },
  {
    title: 'SEGURIDAD',
    icon: 'lock-outline',
    children: [
      {
        title: 'Gestionar Usuarios',
        icon: 'people-outline',
        link: '/pages/usuarios/listar',
      },
      {
        title: 'Gestionar Roles',
        icon: 'person-add-outline',
        link: '/pages/roles/listar',
      },
      {
        title: 'Gestionar Permisos',
        icon: 'shield-outline',
        link: '/pages/permisos/listar',
      },  
      {
        title: 'Gestionar Permisos-Roles',
        icon: 'shield-off-outline',
        link: '/pages/permisos-roles/listar',
      },
    ]
  },
  // {
  //   title: 'E-commerce',
  //   icon: 'shopping-cart-outline',
  //   link: '/pages/dashboard',
  //   home: true,
  // },
  // {
  //   title: 'IoT Dashboard',
  //   icon: 'home-outline',
  //   link: '/pages/iot-dashboard',
  // },
  // {
  //   title: 'FEATURES',
  //   group: true,
  // },
  // {
  //   title: 'Layout',
  //   icon: 'layout-outline',
  //   children: [
  //     {
  //       title: 'Stepper',
  //       link: '/pages/layout/stepper',
  //     },
  //     {
  //       title: 'List',
  //       link: '/pages/layout/list',
  //     },
  //     {
  //       title: 'Infinite List',
  //       link: '/pages/layout/infinite-list',
  //     },
  //     {
  //       title: 'Accordion',
  //       link: '/pages/layout/accordion',
  //     },
  //     {
  //       title: 'Tabs',
  //       pathMatch: 'prefix',
  //       link: '/pages/layout/tabs',
  //     },
  //   ],
  // },
  // {
  //   title: 'Forms',
  //   icon: 'edit-2-outline',
  //   children: [
  //     {
  //       title: 'Form Inputs',
  //       link: '/pages/forms/inputs',
  //     },
  //     {
  //       title: 'Form Layouts',
  //       link: '/pages/forms/layouts',
  //     },
  //     {
  //       title: 'Buttons',
  //       link: '/pages/forms/buttons',
  //     },
  //     {
  //       title: 'Datepicker',
  //       link: '/pages/forms/datepicker',
  //     },
  //   ],
  // },
  // {
  //   title: 'UI Features',
  //   icon: 'keypad-outline',
  //   link: '/pages/ui-features',
  //   children: [
  //     {
  //       title: 'Grid',
  //       link: '/pages/ui-features/grid',
  //     },
  //     {
  //       title: 'Icons',
  //       link: '/pages/ui-features/icons',
  //     },
  //     {
  //       title: 'Typography',
  //       link: '/pages/ui-features/typography',
  //     },
  //     {
  //       title: 'Animated Searches',
  //       link: '/pages/ui-features/search-fields',
  //     },
  //   ],
  // },
  // {
  //   title: 'Modal & Overlays',
  //   icon: 'browser-outline',
  //   children: [
  //     {
  //       title: 'Dialog',
  //       link: '/pages/modal-overlays/dialog',
  //     },
  //     {
  //       title: 'Window',
  //       link: '/pages/modal-overlays/window',
  //     },
  //     {
  //       title: 'Popover',
  //       link: '/pages/modal-overlays/popover',
  //     },
  //     {
  //       title: 'Toastr',
  //       link: '/pages/modal-overlays/toastr',
  //     },
  //     {
  //       title: 'Tooltip',
  //       link: '/pages/modal-overlays/tooltip',
  //     },
  //   ],
  // },
  // {
  //   title: 'Extra Components',
  //   icon: 'message-circle-outline',
  //   children: [
  //     {
  //       title: 'Calendar',
  //       link: '/pages/extra-components/calendar',
  //     },
  //     {
  //       title: 'Progress Bar',
  //       link: '/pages/extra-components/progress-bar',
  //     },
  //     {
  //       title: 'Spinner',
  //       link: '/pages/extra-components/spinner',
  //     },
  //     {
  //       title: 'Alert',
  //       link: '/pages/extra-components/alert',
  //     },
  //     {
  //       title: 'Calendar Kit',
  //       link: '/pages/extra-components/calendar-kit',
  //     },
  //     {
  //       title: 'Chat',
  //       link: '/pages/extra-components/chat',
  //     },
  //   ],
  // },
  // {
  //   title: 'Maps',
  //   icon: 'map-outline',
  //   children: [
  //     {
  //       title: 'Google Maps',
  //       link: '/pages/maps/gmaps',
  //     },
  //     {
  //       title: 'Leaflet Maps',
  //       link: '/pages/maps/leaflet',
  //     },
  //     {
  //       title: 'Bubble Maps',
  //       link: '/pages/maps/bubble',
  //     },
  //     {
  //       title: 'Search Maps',
  //       link: '/pages/maps/searchmap',
  //     },
  //   ],
  // },
  // {
  //   title: 'Charts',
  //   icon: 'pie-chart-outline',
  //   children: [
  //     {
  //       title: 'Echarts',
  //       link: '/pages/charts/echarts',
  //     },
  //     {
  //       title: 'Charts.js',
  //       link: '/pages/charts/chartjs',
  //     },
  //     {
  //       title: 'D3',
  //       link: '/pages/charts/d3',
  //     },
  //   ],
  // },
  // {
  //   title: 'Editors',
  //   icon: 'text-outline',
  //   children: [
  //     {
  //       title: 'TinyMCE',
  //       link: '/pages/editors/tinymce',
  //     },
  //     {
  //       title: 'CKEditor',
  //       link: '/pages/editors/ckeditor',
  //     },
  //   ],
  // },
  // {
  //   title: 'Tables & Data',
  //   icon: 'grid-outline',
  //   children: [
  //     {
  //       title: 'Smart Table',
  //       link: '/pages/tables/smart-table',
  //     },
  //     {
  //       title: 'Tree Grid',
  //       link: '/pages/tables/tree-grid',
  //     },
  //   ],
  // },
  // {
  //   title: 'Miscellaneous',
  //   icon: 'shuffle-2-outline',
  //   children: [
  //     {
  //       title: '404',
  //       link: '/pages/miscellaneous/404',
  //     },
  //   ],
  // },
  // {
  //   title: 'Auth',
  //   icon: 'lock-outline',
  //   children: [
  //     {
  //       title: 'Login',
  //       link: '/auth/login',
  //     },
  //     {
  //       title: 'Register',
  //       link: '/auth/register',
  //     },
  //     {
  //       title: 'Request Password',
  //       link: '/auth/request-password',
  //     },
  //     {
  //       title: 'Reset Password',
  //       link: '/auth/reset-password',
  //     },
  //   ],
  // },
];
