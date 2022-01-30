import './App.css';
import Section from './components/Section/Section';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';

export default function App() {
  return (
    <div className="App">
      <Section title="Phonebook">
        <ContactForm />
        <h1>Contacts</h1>
        <Filter />
        <ContactList />
      </Section>
    </div>
  );
}
