import Navbar from './components/Navbar/Navbar';
import Title from './components/Title/Title';
import Done from './components/Icon/AnimatedIcon/done.json';
import NavItem from './components/Navbar/NavItem';
import HomeIcon from './components/Icon/FlatIcon/HomeIcon';
import PuzzleIcon from './components/Icon/FlatIcon/PuzzleIcon';
import ProfileIcon from './components/Icon/FlatIcon/ProfileIcon';
import MailboxIcon from './components/Icon/FlatIcon/MailboxIcon';

function App() {
  return (
    <main className='flex flex-col place-content-evenly bg-gradient-to-b from-primary-lighter to-primary-dark w-screen h-screen'>
      <Title text='Kydor' />
      <Navbar>
        <NavItem
          title='Home'
          icon={
            <HomeIcon width='48px' height='48px' />
          }
        />
        <NavItem
          title='Projects'
          icon={
            <PuzzleIcon width='48px' height='48px' />
          }
        />
        <NavItem
          title='Blog'
          icon={
            <MailboxIcon width='48px' height='48px' />
          }
        />
        <NavItem
          title='Profile'
          icon={
            <ProfileIcon width='48px' height='48px' />
          }
        />
      </Navbar>
    </main>
  );
}

export default App;
