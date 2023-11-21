export const debounce = <T extends Function>(fn: T, delay: number = 200) => {
  let timeout: NodeJS.Timeout;

  return function (this: any, ...args: any[]) {
    const fnCall = () => fn.apply(this, args);

    clearTimeout(timeout);

    timeout = setTimeout(fnCall, delay);
  };
};
