import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Arrow from '../../../../assets/images/icons/arrow.svg';
import Edit from '../../../../assets/images/icons/edit.svg';
import trash from '../../../../assets/images/icons/trash.svg';
import { Card, ListHeader } from './styles';

export default function ContactsList({
  filteredContacts,
  orderBy,
  onToggleOrderBy,
  onDeleteContact,
}) {
  return (
    <>
      {filteredContacts.length > 0 && (
        <ListHeader orderBy={orderBy}>
          <button type="button" onClick={onToggleOrderBy}>
            <span>nome</span>
            <img src={Arrow} alt="arrow" />
          </button>
        </ListHeader>
      )}
      {filteredContacts.map((contact) => (
        <Card key={contact.id}>
          <div className="info">
            <div className="contact-name">
              <strong>{contact.name}</strong>
              {contact.category.name && <small>{contact.category.name}</small>}
            </div>
            <span>{contact.email}</span>
            <span>{contact.phone}</span>
          </div>
          <div className="actions">
            <Link to={`/edit/${contact.id}`} title="edit contacts page">
              <img src={Edit} alt="edit" />
            </Link>
            <button type="button" onClick={() => onDeleteContact(contact)}>
              <img src={trash} alt="delete" />
            </button>
          </div>
        </Card>
      ))}

    </>
  );
}

ContactsList.propTypes = {
  filteredContacts: propTypes.arrayOf(propTypes.shape({
    id: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    phone: propTypes.string,
    email: propTypes.string,
    category: propTypes.shape({
      name: propTypes.string,
    }),
  })).isRequired,
  orderBy: propTypes.string.isRequired,
  onToggleOrderBy: propTypes.func.isRequired,
  onDeleteContact: propTypes.func.isRequired,

};
