import { useParams  } from "react-router";
import React, { useState } from 'react';

const CreateUser = ({status, addUserCallback, updateUserCallback})=>{
    const {id:eid} = useParams();
    const initialState = { id: null, name: '', dept: '' };
    const [user, setUser] = useState(initialState);
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
  
      setUser({ ...user, [name]: value });
    };
    return(
        <>
            <br/>
            <h3>{status==='add'?'Create':'Edit'} User Page: {eid}</h3>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    status=='add'?addUserCallback(user):updateUserCallback(eid,user)
                    return alert('user has been added or updated');
                }}
            >
                Name: <input type='text' name='name' value={user.name} onChange={handleInputChange}/> <br/>
                ID: <input type='text' name='id' value={user.id} onChange={handleInputChange} /><br/>
                Dept: <input type='text' name='dept' value={user.dept} onChange={handleInputChange} /><br/>
                <input type='submit' value={status==='add'?'Create':'Update'}/>
            </form>
        </>
    );
}

export default CreateUser;