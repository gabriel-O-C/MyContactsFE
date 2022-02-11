import { Routes, Route } from 'react-router-dom';
import { Home, EditContact, NewContact } from '../pages';

export default function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/edit/:id" element={<EditContact />} />
      <Route path="/new" element={<NewContact />} />
    </Routes>
  );
}
