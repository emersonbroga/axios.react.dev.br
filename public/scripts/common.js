const API_BASE = 'https://api.axios.react.dev.br/v1/';
const API_USERS = `${API_BASE}users/`;

const apiUser = (id, path = '') => (id ? `${API_USERS}${id}/${path}` : API_USERS);

const checkAxios = () => {
  if (typeof axios !== 'object') alert('Axios not found');
};

const getFormData = (formElement) => {
  const form = formElement || document.querySelector('form');
  const formData = new FormData(form);
  return formData;
};

const printStatus = (value) => {
  const element = document.querySelector('[data-status]');
  element.innerText = JSON.stringify(value, null, 2);
};

const printHeaders = (value) => {
  const element = document.querySelector('[data-headers]');
  element.innerText = JSON.stringify(value, null, 2);
};

const printData = (value) => {
  const element = document.querySelector('[data-response]');
  element.innerText = JSON.stringify(value, null, 2);
};

const printResponse = (response) => {
  const { status, headers, data } = response || { status: 0 };
  printStatus(status);
  printHeaders(headers);
  printData(data);
  return Promise.resolve(response);
};

const setLoading = () => {
  const loading = { status: 0, headers: 'Loading...', data: 'Loading...' };
  printResponse(loading);
};

const populate = (response) => {
  const formUser = document.querySelector('[data-form-user]');
  if (!formUser) return;

  const { data } = response || {};
  for (const key in data) {
    const input = formUser.querySelector(`input[name=${key}]`);
    if (!input) continue;
    input.value = data[key];
  }
  return Promise.resolve(response);
};

const isValidId = (value) => Boolean(Number.parseInt(value, 10));

const mergeDeep = (...objects) => {
  const isObject = (obj) => obj && typeof obj === 'object';

  return objects.reduce((prev, obj) => {
    if (!obj) return prev;
    Object.keys(obj).forEach((key) => {
      const pVal = prev[key];
      const oVal = obj[key];

      if (Array.isArray(pVal) && Array.isArray(oVal)) {
        prev[key] = pVal.concat(...oVal);
      } else if (isObject(pVal) && isObject(oVal)) {
        prev[key] = mergeDeep(pVal, oVal);
      } else {
        prev[key] = oVal;
      }
    });

    return prev;
  }, {});
};
