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
  //     // Эту проверку требует eslint
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
  // Комментарии оставлены как вопрос в правильности понимания мной
  // поставленной задачи и уточнения какой же вариант решения
  // более правильный и наглядный.
  // для меня первый вариант изначально казался наглядней
  // но не смогла в нем подружить eslint и jest.
  // Можно было бы в настройках eslint отключить необходимость
  // проверки собственных свойств, но, предпологаю, что она необходима
  // Если второй вариант подходит, то для зачета удалю комментарии.

  return [...propsWithOrder, ...propsAlpabetOrder];
}
