export default function orderByProps(obj, order) {
  const propsWithOrder = [];
  if (order) {
    for (let i = 0; i < order.length; i++) {
      if (obj[order[i]]) {
        propsWithOrder.push({
          key: order[i],
          value: obj[order[i]],
        });
      }
    }
  }

  // const propsAlpabetOrder = [];
  // for (const prop in obj) {
  //   if (!(order && order.includes(prop))) {
  //     if (Object.prototype.hasOwnProperty.call(obj, prop)) {
  //       propsAlpabetOrder.push({
  //         key: prop,
  //         value: obj[prop],
  //       });
  //     }
  //     // jest ругается, что сдесь нет конструкции else
  //     // что с этим делать - ума не приложу.
  //   }
  // }
  // propsAlpabetOrder.sort((elem1, elem2) => elem1.key.localeCompare(elem2.key));
  //
  // А при таком варианте eslint не ругается
  // и тесты проходит на 100%
  const propsAlpabetOrder = Object.entries(obj)
    .filter((elem) => !(order && order.includes(elem[0])))
    .sort((elem1, elem2) => elem1[0].localeCompare(elem2[0]))
    .map((elem) => ({
      key: elem[0],
      value: elem[1],
    }));

  return [...propsWithOrder, ...propsAlpabetOrder];
}
