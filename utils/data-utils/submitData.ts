//import { User } from 'interfaces/userFromSunlight';
import { fetcherPost, fetcherPut } from '../fetch-api/methods';
import { BasicInfoFile } from '@/interfaces/stores-interface';
import { getFormattedTime } from './timestamp';

export const getGroupData = (
  userData: any,
  path: string
): { groupId: string; groupName: string } => {
  const findGroupIndex: number = userData.groups?.findIndex(
    (e) => e.name === path.split('/')[2].replaceAll('%20', ' ')
  )!;

  return {
    groupId: userData.groups![findGroupIndex].group_id,
    groupName: userData.groups![findGroupIndex].name
  };
};

export async function uploadStores(
  userDataSession: any,
  arrayMembers: BasicInfoFile,
  routePath: string
) {
  // Create History File Info in Db

  const groupName = getGroupData(userDataSession, routePath).groupName;
  const groupId = getGroupData(userDataSession, routePath).groupId;

  const historial = {
    filenameOrigin: arrayMembers.filename,
    userName: userDataSession.userName,
    userId: userDataSession.userId,
    groupName,
    groupId,
    dateCreated: new Date(),
    status: ''
  };

  const resultCreate = await fetcherPost(`/api/historial/`, historial);

  // update filename in db with its own history Id

  const filename = {
    id: resultCreate.data.id,
    newFilename: `${resultCreate.data.id}_${
      resultCreate.data.filenameOrigin
    }_${getFormattedTime()}.csv`
  };

  const resultUpdate = await fetcherPut(`/api/historial`, filename);

  // upload csv to S3
  const userDataS3 = arrayMembers.newData.map((user) => {
    if (user.Cohort === undefined) {
      user.Cohort = '';
    }
    if (user['Managers Email Address'] === undefined) {
      user['Managers Email Address'] = '';
    }

    return user;
  });
 
  
  const data = {
    newData: userDataS3,
    filename: resultUpdate.data.filename
  };

  await fetcherPost('/api/upload', data);
}
