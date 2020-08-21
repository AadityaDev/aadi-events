export const getEventList = store =>
  store && store.events ? store.events.allIds : [];

export const getEventById = (store, id) =>
  store && store.events && store.events.byIds
    ? { ...store.events.byIds[id], id }
    : {};

/**
 * example of a slightly more complex selector
 * select from store combining information from multiple reducers
 */
export const getEvents = store =>
  getEventList(store).map(id => getEventById(store, id));
