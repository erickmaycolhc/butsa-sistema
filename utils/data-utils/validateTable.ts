import { BasicInfoFile, InfoTableStores } from '@/interfaces/stores-interface';
import { columns } from '../component-utils/table-columns';

import patterns from './patternRegex';

export const validateHeaders = (
  arrayStores: BasicInfoFile,
  setArrayBadHeaders: any,
  setArrayGoodHeaders: any
) => {

  let validHeaders: any[] = [];
  arrayStores.newData.forEach((a) => {
    const headerWithoutKey = Object.keys(a).filter((a) => {
      return a !== 'key';
    });
    validHeaders = headerWithoutKey;
  });

  validHeaders.forEach((headerExcel: any, index: number) => {
    try {
      if (headerExcel !== columns[index].dataIndex!) {
        setArrayBadHeaders((prevArray: any) => [...prevArray, headerExcel]);
        setArrayGoodHeaders((prevArray: any) => [
          ...prevArray,
          columns[index].dataIndex!
        ]);
      }
    } catch (e) {
      return e
    }
  });
};

export const validateRows = (arrayStores: BasicInfoFile, setBadRowFormat: any) => {
  arrayStores.newData.forEach((user: InfoTableStores) => {
    try {
      if (!user.FECHA_DESPACHO) {
        setBadRowFormat((prev: string[]) => [...prev, 'FECHA_DESPACHO']);
      }
      if (!user.TIENDA) {
        setBadRowFormat((prev: string[]) => [...prev, 'TIENDA']);
      }
      if (!user.ID_TIENDA) {
        setBadRowFormat((prev: string[]) => [...prev, 'ID_TIENDA']);
      }
      if (!user.RUTA) {
        setBadRowFormat((prev: string[]) => [...prev, 'RUTA']);
      }
      if (!user.GUIA) {
        setBadRowFormat((prev: string[]) => [...prev, 'GUIA']);
      }
      if (!user.VALOR) {
        setBadRowFormat((prev: string[]) => [...prev, 'VALOR']);
      }
      if (!user.PROVEEDOR) {
        setBadRowFormat((prev: string[]) => [...prev, 'PROVEEDOR']);
      }
      if (!user.PLACA) {
        setBadRowFormat((prev: string[]) => [...prev, 'PLACA']);
      }
      if (!user.CONDUCTOR) {
        setBadRowFormat((prev: string[]) => [...prev, 'CONDUCTOR']);
      }
      if (!user.AUXILIAR) {
        setBadRowFormat((prev: string[]) => [...prev, 'AUXILIAR']);
      }
      if (!user.ESTADO) {
        setBadRowFormat((prev: string[]) => [...prev, 'ESTADO']);
      }
      // if (!user.FECHA_DE_ENTREGA) {
      //setBadRowFormat((prev: string[]) => [...prev, 'FECHA_DE_ENTREGA']);
      // }
      // if (!user.OBSERVACION) {
      //setBadRowFormat((prev: string[]) => [...prev, 'OBSERVACION']);
      // }
      // if (!user.ENTREGAS_CONFORME) {
      //setBadRowFormat((prev: string[]) => [...prev, 'ENTREGAS_CONFORME']);
      // }
      // if (user.Cohort !== '') {
      //   const arrayCohort = user.Cohort.split('::');
      //   arrayCohort.forEach((cohort) => {
      //     if (cohort.includes(':') && cohort.split(':').length > 2) {
      //       setBadRowFormat((prev: string[]) => [...prev, 'Cohort']);
      //     }
      //     if (!cohort.includes(':') && !patterns.invalidString.test(cohort)) {
      //       setBadRowFormat((prev: string[]) => [...prev, 'Cohort']);
      //     }
      //   });
      // }

      // if (user['Managers Email Address'] !== '' && user['Managers Email Address'] !== undefined) {
      //   const arrayEmail = user['Managers Email Address']!.split('::');
      //   arrayEmail.forEach((email) => {
      //     if (!patterns.invalidEmail.test(email)) {
      //       setBadRowFormat((prev: string[]) => [...prev, 'Managers Email Address']);
      //     }
      //   });
      // }
      // if (!patterns.invalidEmail.test(user['Email Address']!) && user['Email Address']! !== undefined) {
      //   setBadRowFormat((prev: string[]) => [...prev, 'Email Address']);
      // }
      // if (user.Skillset !== '' && user.Skillset !== undefined) {
      //   if (!patterns.invalidString.test(user.Skillset)) {
      //     setBadRowFormat((prev: string[]) => [...prev, 'Skillset']);
      //   }
      // }
      // if (user.Budget !== undefined) {
      //   if (!patterns.invalidBudget.test(user.Budget + '')) {
      //     setBadRowFormat((prev: string[]) => [...prev, 'Budget']);
      //   }
      // }
    } catch (e) {
      return e
    }
  });
};

// manager can't be a manager of himself
export const validateDuplicateManagerEmail = (
  arrayStores: BasicInfoFile,
  setArrayDuplicateManagerEmail: any
) => {

  const arrayManagersEmail: (string | undefined)[] = [];

  arrayStores.newData.forEach((user: InfoTableStores) => {

    const listManagerEmail: (string | undefined)[] = user['Managers Email Address'] ? user['Managers Email Address']!.split('::') : []

    if (listManagerEmail.length > 1 && listManagerEmail.includes(user['Email Address'])) {
      arrayManagersEmail.push(user['Email Address'])
    } else {
      if (
        user['Managers Email Address'] !== undefined &&
        patterns.invalidEmail.test(user['Managers Email Address']) &&
        user['Managers Email Address'] === user['Email Address']
      ) {
        arrayManagersEmail.push(user['Managers Email Address']);
      }
    }

  });

  const uniqueEmails = arrayManagersEmail.filter(
    (e, i) => arrayManagersEmail.indexOf(e) === i
  );
  setArrayDuplicateManagerEmail(uniqueEmails);
};

export const validateDuplicateEmails = (
  arrayStores: BasicInfoFile,
  setArrayDuplicateEmails: any
) => {
  const arrayEmailAddress: (string | undefined)[] = [];

  const allEmails = arrayStores.newData.map((user: InfoTableStores) => {
    return user['Email Address']
  })

  arrayStores.newData.forEach((user: InfoTableStores) => {
    const sameEmails = allEmails.filter((item, index) => allEmails.indexOf(item) !== index)
    if (
      user['Email Address'] !== undefined &&
      patterns.invalidEmail.test(user['Email Address']) &&
      sameEmails.includes(user['Email Address']) === true
    ) {
      arrayEmailAddress.push(user['Email Address']);
    }
  });

  const uniqueEmails = arrayEmailAddress.filter(
    (e, i) => arrayEmailAddress.indexOf(e) === i
  );
  setArrayDuplicateEmails(uniqueEmails);
}