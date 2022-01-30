import axios from 'axios';

const BASE_URL = 'https://61a49f034c822c0017041d29.mockapi.io';
const URL = BASE_URL + '/contacts';

export async function fetchContacts() {
  const { data } = await axios.get(URL);
  return data;
}

export async function fetchAddContacts(item) {
  const { data } = await axios.post(URL, item);
  return data;
}

export async function fetchDeleteContacts({ id }) {
  const { data } = await axios.delete(`${URL}/${id}`);
  return data;
}
