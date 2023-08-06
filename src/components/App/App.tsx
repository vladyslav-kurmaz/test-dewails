import { FC } from 'react'
import SearchPanel from '../SearchPanel/SearchPanel';
import UserCard from '../UserCard/UserCard';
import './App.scss';

  const App: FC = () => {
    return (
      <div className="app">
        <SearchPanel/>
        <UserCard/>
      </div>
    );
  }

export default App;
