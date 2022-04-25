
const crId = (strSuffix=''): string => Math.random()
 .toString(36)
 .slice(2, 11)
 .toUpperCase() + strSuffix;

 export default crId
