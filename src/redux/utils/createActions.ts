export function createTypes(prefix: any, ...args: any) {
  return args.reduce((types: any, type: any) => {
    [].concat(type).map(v => (types[v] = prefix + v));
    return types;
  }, {});
}

export function asyncAction(
  type: any,
  subTypes: any = ['REQUEST', 'SUCCESS', 'FAIL'],
) {
  return [].concat(subTypes.map((t: any) => `${type}_${t}`));
}
