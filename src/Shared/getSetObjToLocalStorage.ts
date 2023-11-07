export const getSetObjToLocalStorage: Function = (obj: any): void => {
  Object.keys(obj).forEach(key => localStorage.setItem(key, obj[key]))
}
