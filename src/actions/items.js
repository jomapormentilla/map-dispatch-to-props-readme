export const addItem = (name) => {
  return { type: 'INCREASE_COUNT' };
};

export const removeItem = name => {
  return { type: 'DECREASE_COUNT' }
}
