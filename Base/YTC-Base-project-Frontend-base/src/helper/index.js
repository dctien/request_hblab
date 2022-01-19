import { listRole } from '../constants/listRole';

export const checkMail = (string) => {
  if (string.indexOf('hblab.vn') !== -1) {
    return {
      status: true,
      user: listRole.admin
    };
  } else {
    return {
      status: true,
      user: listRole.cbnv
    };
  }
}
