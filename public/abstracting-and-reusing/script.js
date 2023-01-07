const formFind = document.querySelector('[data-form-find]');
const formUser = document.querySelector('[data-form-user]');

const BrogaApi = {
  defaultErrorHandler: function (error) {
    console.log('*** defaultErrorHandler', error);

    // enviar o erro, para um servico de logs. (papertrail)
    console.log('*** The log Service', { error: error.toJSON() });

    printStatus(error.response.status);
    printHeaders(error.response.headers);

    if (error.response.status === 404) {
      printData('Usuário não encontrado.');
      return;
    }

    printData(error.message);
  },
  get: function (path, options = {}) {
    axios.get(path, options).then(printResponse).then(populate).catch(this.defaultErrorHandler);
  },

  post: function (path, data, options = {}) {
    axios.post(path, data, options).then(printResponse).then(populate).catch(this.defaultErrorHandler);
  },

  put: function (path, data, options = {}) {
    axios.put(path, data, options).then(printResponse).then(populate).catch(this.defaultErrorHandler);
  },

  delete: function (path, options = {}) {
    axios.delete(path, options).then(printResponse).then(populate).catch(this.defaultErrorHandler);
  },
};

const handleFindSubmit = (e) => {
  e.preventDefault();

  const data = getFormData(formFind);
  const id = data.get('id');
  const url = apiUser(id);

  BrogaApi.get(url);
};

const handleUserSubmit = (e) => {
  e.preventDefault();

  const data = getFormData(formUser);
  const id = data.get('id');
  const url = apiUser(id);

  BrogaAPI.put(url, data);
};

formFind.addEventListener('submit', handleFindSubmit);
formUser.addEventListener('submit', handleUserSubmit);
