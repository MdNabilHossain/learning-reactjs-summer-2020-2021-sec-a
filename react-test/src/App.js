import UserList from './components/UserList';
import {users} from './usersData';
import {useState} from 'react';
import CreateUser from './components/CreateUser';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {

 const [userlist, setUserList] = useState(users);
  const deleteuser = (id)=>{
    const list = userlist.filter((user)=>user.id !== id);
    setUserList(list);
  }
  const addUser=(newUser)=>{
    setUserList([...userlist,newUser])
  }
  const updateUser=(id,editedUser)=>{
    const list = userlist.filter((user)=>user.id != id);
    setUserList([...list,editedUser]);
  }

  return (
   
    <Router>
      <Navbar/>
      <Switch>
          <Route exact path='/'> 
              <h1>Welcome Home!</h1>
          </Route>
          <Route path='/userlist'>
            <div>
                <UserList list={userlist} deleteCallback={deleteuser}/>
            </div>
          </Route>
          <Route path='/create'>
              <CreateUser status='add' addUserCallback={addUser} />
          </Route>
          <Route path='/edit/:id' children={<CreateUser status='edit' updateUserCallback={updateUser} />} ></Route>
          <Route path='*'>
              404 not found
          </Route>          
      </Switch>
  </Router>
  );
}

export default App;
