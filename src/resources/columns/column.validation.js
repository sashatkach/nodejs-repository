const LENGTH_PROPERTIES_COLUMN_WITHOUT_ID = 2;

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
  const setFields = new Set(['title', 'order']);
  const commonFields = intersection(setFields, new Set(Object.keys(req.body)))
  return [LENGTH_PROPERTIES_COLUMN_WITHOUT_ID, LENGTH_PROPERTIES_COLUMN_WITHOUT_ID + 1].includes(commonFields.size)
    && req.body.title.length > 0
    && req.body.order.length > 0
}
module.exports = { validateColumn: isValid}