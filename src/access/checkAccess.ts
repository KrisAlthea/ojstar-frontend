import accessEnum from "@/access/accessEnum";

const checkAccess = (loginUser: any, needAccess = accessEnum.NOT_LOGIN) => {
  const loginUserAccess = loginUser?.userRole ?? accessEnum.NOT_LOGIN;
  if (needAccess === accessEnum.NOT_LOGIN) {
    return true;
  }
  if (needAccess === accessEnum.USER) {
    if (loginUserAccess === accessEnum.NOT_LOGIN) {
      return false;
    }
  }
  if (needAccess === accessEnum.ADMIN) {
    if (loginUserAccess !== accessEnum.ADMIN) {
      return false;
    }
  }
  return true;
};
export default checkAccess;
