export function validateEmptyFields(formData, validation, setValidation) {
  const emptyField = Object.keys(formData).find(field => !formData[field]);
  if (emptyField) {
    const inputElement = document.getElementById(emptyField);
    const text = inputElement.getAttribute('placeholder');
    setValidation({ ...validation, [`${emptyField}Error`]: `※ ${text}` });
    if (inputElement) {
      inputElement.focus();
      return false;
    }
  }
  return true;
}