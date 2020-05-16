const inputValidity = (value, rule) => {
  let isValid = true;
  if (!rule) {
    return true;
  }
  if (rule.required) {
    isValid = value.trim() !== '' && isValid;
  }
  if (rule.minLength) {
    isValid = value.length >= rule.minLength && isValid;
  }
  if (rule.maxLength) {
    isValid = value.length <= rule.maxLength && isValid;
  }
  if (rule.isEmail) {
    isValid = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm.test(value);
  }
  return isValid;
};
export default inputValidity;
