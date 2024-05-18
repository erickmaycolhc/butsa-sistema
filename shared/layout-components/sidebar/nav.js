export const MENUITEMS = [
  {
    menutitle: "DASHBOARD",
    Items: [
      {
        path: "/app/dashboard",
        icon: "fa fa-home",
        type: "link",
        active: false,
        selected: true,
        title: "Dashboard",
      }
    ]
  },
  {
    menutitle: "APLICACIONES",
    Items: [
      {
        title: "Servicios del dia",
        icon: "fa fa-car",
        type: "sub",
        active: false,
        selected: false,
        children: [
          {
            path: "/app/applications/services-day",
            type: "link",
            active: false,
            selected: false,
            title: "Tabla",
          },
          {
            path: "/app/applications/services-day/new",
            type: "link",
            active: false,
            selected: false,
            title: "Nuevo",
          }
        ]
      },
      {
        path: "/app/applications/map",
        icon: "fa fa-map",
        type: "link",
        active: false,
        selected: false,
        title: "Mapa",
      },
      // {
      //   path: "/app/applications/routes",
      //   icon: "fa fa-road",
      //   type: "link",
      //   active: false,
      //   selected: false,
      //   title: "Rutas",
      // }
    ]
  },
  {
    menutitle: "REPORTES",
    Items: [
      {
        path: "/app/reports/services-day",
        icon: "fa fa-car",
        type: "link",
        active: false,
        selected: false,
        title: "Servicios del dia",
      },
      {
        path: "/app/reports/kpi",
        icon: "fa fa-bar-chart",
        type: "link",
        active: false,
        selected: false,
        title: "KPI",
      }
    ]
  },
  // {
  //   menutitle: "MANTENIMIENTO",
  //   Items: [
  //     {
  //       title: "Rutas",
  //       icon: "fa fa-users",
  //       type: "sub",
  //       active: false,
  //       selected: false,
  //       children: [
  //         {
  //           path: "/app/applications/routes",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Tabla",
  //         },
  //         {
  //           path: "/app/applications/routes/new",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Nuevo",
  //         }
  //       ]
  //     },
  //     {
  //       title: "Usuarios",
  //       icon: "fa fa-users",
  //       type: "sub",
  //       active: false,
  //       selected: false,
  //       children: [
  //         {
  //           path: "/app/settings/users",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Tabla",
  //         },
  //         {
  //           path: "/app/settings/users/new",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Nuevo",
  //         }
  //       ]
  //     }
  //   ]
  // },
  {
    menutitle: "CONFIGURACIONES",
    Items: [
      {
        path: "/app/settings/company",
        icon: "fa fa-bank",
        type: "link",
        active: false,
        selected: false,
        title: "Empresa",
      },
      {
        title: "Rutas",
        icon: "fa fa-users",
        type: "sub",
        active: false,
        selected: false,
        children: [
          {
            path: "/app/settings/routes",
            type: "link",
            active: false,
            selected: false,
            title: "Tabla",
          },
          {
            path: "/app/settings/routes/new",
            type: "link",
            active: false,
            selected: false,
            title: "Nuevo",
          }
        ]
      },
      {
        title: "Usuarios",
        icon: "fa fa-users",
        type: "sub",
        active: false,
        selected: false,
        children: [
          {
            path: "/app/settings/users",
            type: "link",
            active: false,
            selected: false,
            title: "Tabla",
          },
          {
            path: "/app/settings/users/new",
            type: "link",
            active: false,
            selected: false,
            title: "Nuevo",
          }
        ]
      },
      {
        path: "/app/settings/system",
        icon: "fa fa-cog",
        type: "link",
        active: false,
        selected: false,
        title: "Sistema",
      },
      {
        path: "/",
        icon: "fa fa-sign-out",
        type: "link",
        active: false,
        selected: false,
        title: "Salir",
      }
    ]
  }
];
