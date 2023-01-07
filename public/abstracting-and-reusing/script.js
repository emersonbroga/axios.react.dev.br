const formFind = document.querySelector('[data-form-find]');
const formUser = document.querySelector('[data-form-user]');

const BrogaApi = {
  defaultErrorHandler: function (error) {
    const errorJson = error.toJson();
    printStatus(errorJson.status);
    printHeaders(errorJson.headers);
    printData(errorJson.message);

    // enviar para um serviço de logs
    console.log('*** The log service', { error: errorJson });
    // throw error;
  },

  get: function (path, options = {}) {
    console.log(this);
    return axios.get(path, options).catch(console.log);
  },

  post: function (path, data = {}, options = {}) {
    return axios.post(path, data, options).catch(this.defaultErrorHandler);
  },

  put: function (path, data = {}, options = {}) {
    return axios.put(path, data, options).catch(this.defaultErrorHandler);
  },

  delete: function (path, options = {}) {
    return axios.delete(path, options).catch(this.defaultErrorHandler);
  },
};

const handleFindSubmit = (e) => {
  e.preventDefault();

  const data = getFormData(formFind);
  const id = data.get('id');
  const url = apiUser(id);

  BrogaApi.get(url).then(printResponse).then(populate);
};

const handleUserSubmit = (e) => {
  e.preventDefault();

  const data = getFormData(formUser);
  const id = data.get('id');
  const url = apiUser(id);

  BrogaApi.put(url, data).then(printResponse).then(populate);
};

formFind.addEventListener('submit', handleFindSubmit);
formUser.addEventListener('submit', handleUserSubmit);
