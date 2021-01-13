const PREFIX = 'SONGS'
const _ = b => x => `${b}/${x}`
export const POPULATE = _(PREFIX)('POPULATE')
export const SELECT = _(PREFIX)('SELECT')
export const populate = () => ({ type: POPULATE })
export const select = data => ({ type: SELECT, data })
