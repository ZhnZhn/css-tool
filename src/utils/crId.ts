
const crId = (strSuffix=''): string => Math.random()
 .toString(36)
 .substr(2, 9)
 .toUpperCase() + strSuffix;

 export default crId
