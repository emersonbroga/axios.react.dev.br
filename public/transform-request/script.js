const formUser = document.querySelector('[data-form-user]');

const transformRequest = (data, headers) => {
  headers.authorization = 'Bearer Token';
  // data é um formData, não um objeto comum.
  data.set('email', 'abc@def.com');
  data.append('transformedRequest', true);

  return data;
};

const handleFindSubmit = (e) => {
  e.preventDefault();

  const data = getFormData(formUser);
  const url = apiUser();

  const options = {
    headers: {
      'X-header-y': 'valor qualuer',
    },
    transformRequest: [...axios.defaults.transformRequest, transformRequest],
  };

  axios.post(url, data, options).then(printResponse);
};

formUser.addEventListener('submit', handleFindSubmit);
