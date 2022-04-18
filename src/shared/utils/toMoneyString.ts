// works only for thousands and down
export const toMoneyString = (number: number) => {
  const [integer, float] = String(number).split('.');

  const integerToMoney = (integer: string) => {
    return integer.length <= 3
      ? integer
      : `${integer.slice(0, integer.length - 3)} ${integer.slice(integer.length - 3)}`;
  };

  if (!float) {
    return integerToMoney(integer) + ',00';
  }

  return `${integerToMoney(integer)},${float.length === 2 ? float : float + '0'} `;
};
