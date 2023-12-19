import { Route, Routes } from 'react-router';
import ToDoList from './containers/ToDoList';
import TaskView from './containers/TaskView';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header/>
      <main>
        <div className='wrapper'>
          <Routes>
            <Route strict exact path="/" Component={ToDoList} />
            <Route strict exact path="/:id" Component={TaskView} />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
