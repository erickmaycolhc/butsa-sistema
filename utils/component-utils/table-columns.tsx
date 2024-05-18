import { ColumnsData } from '@/interfaces/table-columns-data'
import patterns from '../data-utils/patternRegex'
import { sorter } from './sorter'
/* eslint-disable no-useless-escape */



export const columns: ColumnsData[] = [
  {
    title: 'FECHA DESPACHO',
    dataIndex: 'FECHA_DESPACHO',
    key: 'FECHA_DESPACHO',
    width: 130,
    sorter: (a: any, b: any) => sorter(a.FECHA_DESPACHO, b.FECHA_DESPACHO),
    multiple: 1
  },
  {
    title: 'TIENDA',
    dataIndex: 'TIENDA',
    key: 'TIENDA',
    // render: (cohorts: string) => {
    //   if (cohorts === undefined || cohorts === '') {
    //     return cohorts
    //   } else if (cohorts !== undefined && cohorts.split('::').length > 1) {
    //     const arrayCohort = cohorts.split('::')
    //     let countBad = 0
    //     arrayCohort.forEach((cohort) => {
    //       if (cohort.includes(':') && cohort.split(':').length > 2) {
    //         countBad++
    //       }
    //       if (!cohort.includes(':') && !patterns.invalidString.test(cohort)) {
    //         countBad++
    //       }
    //     })
    //     return countBad > 0 ? (
    //       <p style={{ color: 'red' }}>{cohorts}</p>
    //     ) : (
    //       cohorts
    //     )
    //   } else if (
    //     cohorts.split(',').length < 2 &&
    //     !patterns.invalidString.test(cohorts)
    //   ) {
    //     return <p style={{ color: 'red' }}>{cohorts}</p>
    //   } else {
    //     return cohorts
    //   }
    // },
    width: 130,
    sorter: (a: any, b: any) => sorter(a.TIENDA, b.TIENDA),
    multiple: 2
  },
  {
    title: 'ID_TIENDA',
    dataIndex: 'ID_TIENDA', // excel name column
    key: 'ID_TIENDA',
    // render: (email: string) => {
    //   if (!patterns.invalidEmail.test(email)) {
    //     return <p style={{ color: 'red' }}>{email}</p>
    //   }
    //   return email
    // },
    width: 170,
    sorter: (a: any, b: any) => sorter(a['ID_TIENDA'], b['ID_TIENDA']),
    multiple: 3
  },
  {
    title: "RUTA",
    dataIndex: 'RUTA', // excel name column
    key: "RUTA",
    width: 170,
    sorter: (a: any, b: any) =>
      sorter(a['RUTA'], b['RUTA']),
    multiple: 4,
    // render: (manager: string) => {
    //   if (manager === undefined || manager === '') {
    //     return manager
    //   } else if (manager !== undefined && manager.split('::').length > 1) {
    //     const arrayEmail = manager.split('::')
    //     let countBad = 0
    //     arrayEmail.forEach((email) => {
    //       if (!patterns.invalidEmail.test(email)) {
    //         countBad++
    //       }
    //     })
    //     return countBad > 0 ? (
    //       <p style={{ color: 'red' }}>{manager}</p>
    //     ) : (
    //       manager
    //     )
    //   } else if (
    //     manager.split('::').length < 2 &&
    //     !patterns.invalidEmail.test(manager)
    //   ) {
    //     return <p style={{ color: 'red' }}>{manager}</p>
    //   } else {
    //     return manager
    //   }
    // }
  },
  {
    title: 'GUIA',
    dataIndex: 'GUIA',
    key: 'GUIA',
    width: 130,
    sorter: (a: any, b: any) => sorter(a.GUIA, b.GUIA),
    multiple: 5
  },
  {
    title: 'VALOR',
    dataIndex: 'VALOR',
    key: 'VALOR',
    // render: (budget: string) => {
    //   if (!patterns.invalidBudget.test(budget)) {
    //     return <p style={{ color: 'red' }}>{budget}</p>
    //   }
    //   return budget
    // },
    width: 50,
    sorter: (a: any, b: any) => sorter(a.VALOR, b.VALOR),
    multiple: 7
  },
  {
    title: 'PROVEEDOR',
    dataIndex: 'PROVEEDOR',
    key: 'PROVEEDOR',
    width: 50,
    sorter: (a: any, b: any) => sorter(a.PROVEEDOR, b.PROVEEDOR),
    multiple: 7
  },
  {
    title: 'PLACA',
    dataIndex: 'PLACA',
    key: 'PLACA',
    width: 50,
    sorter: (a: any, b: any) => sorter(a.PLACA, b.PLACA),
    multiple: 7
  },
  {
    title: 'CONDUCTOR',
    dataIndex: 'CONDUCTOR',
    key: 'CONDUCTOR',
    width: 50,
    sorter: (a: any, b: any) => sorter(a.CONDUCTOR, b.CONDUCTOR),
    multiple: 7
  },
  {
    title: 'AUXILIAR',
    dataIndex: 'AUXILIAR',
    key: 'AUXILIAR',
    width: 50,
    sorter: (a: any, b: any) => sorter(a.AUXILIAR, b.AUXILIAR),
    multiple: 7
  },
  {
    title: 'ESTADO',
    dataIndex: 'ESTADO',
    key: 'ESTADO',
    width: 50,
    sorter: (a: any, b: any) => sorter(a.ESTADO, b.ESTADO),
    multiple: 7
  },
  {
    title: 'FECHA_DE_ENTREGA',
    dataIndex: 'FECHA_DE_ENTREGA',
    key: 'FECHA_DE_ENTREGA',
    width: 50,
    sorter: (a: any, b: any) => sorter(a.FECHA_DE_ENTREGA, b.FECHA_DE_ENTREGA),
    multiple: 7
  },
  {
    title: 'OBSERVACION',
    dataIndex: 'OBSERVACION',
    key: 'OBSERVACION',
    width: 50,
    sorter: (a: any, b: any) => sorter(a.OBSERVACION, b.OBSERVACION),
    multiple: 7
  },
  {
    title: 'ENTREGAS_CONFORME',
    dataIndex: 'ENTREGAS_CONFORME',
    key: 'ENTREGAS_CONFORME',
    width: 50,
    sorter: (a: any, b: any) => sorter(a.ENTREGAS_CONFORME, b.ENTREGAS_CONFORME),
    multiple: 7
  }
]

export function onChangeData(
  pagination: any,
  filters: any,
  sorter: any,
  extra: any
) {
  return 1
}
