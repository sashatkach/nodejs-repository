const LENGTH_PROPERTIES_USER_WITHOUT_ID = 3;

/**
 * Function which make intersection between two sets
 * @param {Set} setA First set for comparing 
 * @param {Set} setB Second set for comparing
 * @returns {Set} return the result set of intersection
 */
function intersection(setA, setB) {
  const _intersection = new Set();
  setB.forEach(elem => {
      if (setA.has(elem)) {
          _intersection.add(elem);
      }
  })
  return _intersection;
}

/**
 * Check if request is valid
 * @param {Request<ParamsDictionary, any, any, QueryString.ParsedQs, Record<string, any>>} req receive request from routes 
 * @returns {boolean} return if request is valid
 */
function isValid(req)
{
  const setFields = new Set(['name', 'login', 'password', 'id']);
  const commonFields = intersection(setFields, new Set(Object.keys(req.body)))
  return [LENGTH_PROPERTIES_USER_WITHOUT_ID, LENGTH_PROPERTIES_USER_WITHOUT_ID + 1].includes(commonFields.size)
    && req.body.name.length > 0
    && req.body.login.length > 0
    && req.body.password.length > 0;
}
export { isValid as validateUser};