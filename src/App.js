import NotesList from './components/NotesList';
import messydesk from './messydesk.png';
const App = () => {
  return <div className='container-fluid'>
    <img src={messydesk} className='.img-thumbnail'/>
    <NotesList />
  </div>;
}

export default App;