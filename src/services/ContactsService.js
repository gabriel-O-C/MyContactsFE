import ContactMapper from './mappers/ContactMapper';
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
  async listContacts(orderBy = 'asc') {
    const contacts = await this.httpClient.get(`/contacts?orderBy=${orderBy}`);

    return contacts.map(ContactMapper.toDomain);
  }

  /**
   * @param {number} id
   * @returns {Promise<ContactDto>}
   */
  async getContactById(id) {
    const contact = await this.httpClient.get(`/contacts/${id}`);

    return ContactMapper.toDomain(contact);
  }

  /**
   *
   * @param {ContactDto} contact
   * @returns {Promise<Boolean>}
   */
  createContact(contact) {
    const body = ContactMapper.toPersistence(contact);
    return this.httpClient.post('/contacts', { body });
  }

  /**
   *
   * @param {number} id
   * @param {ContactDto} contact
   * @returns {Promise<ContactDto>}
   */
  updateContact(id, contact) {
    const body = ContactMapper.toPersistence(contact);

    return this.httpClient.put(`/contacts/${id}`, { body });
  }

  deleteContact(id) {
    return this.httpClient.delete(`/contacts/${id}`);
  }
}

export default new ContactsService();
