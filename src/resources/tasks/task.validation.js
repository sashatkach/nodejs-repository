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
  const setFields = new Set(['title', 'order', 'description', 'userId', 'boardId']);
  const commonFields = intersection(setFields, new Set(Object.keys(req.body)))
  return [setFields.size, setFields.size + 1, setFields.size + 2].includes(commonFields.size)
    && req.body.title.length > 0
    && Number.isInteger(req.body.order)
    && req.body.description.length > 0
    && req.body.userId !== ''
    && req.body.boardId !== ''
    && req.body.columnId !== ''
}
export { isValid as validateColumn };