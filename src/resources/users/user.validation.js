const LENGTH_PROPERTIES_USER_WITHOUT_ID = 3;

function intersection(setA, setB) {
  const _intersection = new Set();
  setB.forEach(elem => {
      if (setA.has(elem)) {
          _intersection.add(elem);
      }
  })
  return _intersection;
}

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