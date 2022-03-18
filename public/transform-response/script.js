const formFind = document.querySelector('[data-form-find]');

const removePersonalData = (data) => {
  delete data.phone;
  delete data.address;
  data.removedPersonalData = true;
  return data;
};

const addCurrentDate = (data) => {
  data.currentDate = new Date().getTime();
  return data;
};

const handleFindSubmit = (e) => {
  e.preventDefault();

  const data = getFormData(formFind);
  const id = data.get('id');
  const url = apiUser(id);

  // const options = {
  //   transformResponse: axios.defaults.transformResponse.concat(removePersonalData),
  // };

  const options = {
    transformResponse: [...axios.defaults.transformResponse, removePersonalData, addCurrentDate],
  };

  axios.get(url, options).then(printResponse);
};

formFind.addEventListener('submit', handleFindSubmit);
