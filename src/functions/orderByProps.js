export default function orderByProps(obj, order) {
  const propsWithAssignedOrder = [];
  if (order) {
    for (let i = 0; i < order.length; i++) {
      if (obj[order[i]]) {
        propsWithAssignedOrder.push({
          key: order[i],
          value: obj[order[i]],
        });
      }
    }
  }

  const propsWithAlpabetOrder = [];
  for (const prop in obj) {
    if (
      Object.prototype.hasOwnProperty.call(obj, prop)
      && !(order && order.includes(prop))
    ) {
      propsWithAlpabetOrder.push({
        key: prop,
        value: obj[prop],
      });
    }
  }
  propsWithAlpabetOrder.sort((elem1, elem2) => elem1.key.localeCompare(elem2.key));

  return [...propsWithAssignedOrder, ...propsWithAlpabetOrder];
}
