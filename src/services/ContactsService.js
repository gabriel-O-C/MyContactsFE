import HttpClient from './utils/HttpClient';

/**
 * @typedef ContactDto
 * @type {object}
 * @property {string} id
 * @property {string} name
 * @property {string} email
 * @property {string} category_id
 * @property {string} phone
 */
class ContactsService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  /**
   *
   * @param {string} orderBy
   * @returns {Promise<ContactDto[]>}
   */
  listContacts(orderBy = 'asc') {
    return this.httpClient.get(`/contacts?orderBy=${orderBy}`);
  }

  /**
   * @param {number} id
   * @returns {Promise<ContactDto>}
   */
  getContactById(id) {
    return this.httpClient.get(`/contacts/${id}`);
  }

  /**
   *
   * @param {ContactDto} contact
   * @returns {Promise<Boolean>}
   */
  createContact(contact) {
    return this.httpClient.post('/contacts', { body: contact });
  }

  /**
   *
   * @param {number} id
   * @param {ContactDto} contact
   * @returns {Promise<ContactDto>}
   */
  updateContact(id, contact) {
    return this.httpClient.put(`/contacts/${id}`, { body: contact });
  }
}

export default new ContactsService();
