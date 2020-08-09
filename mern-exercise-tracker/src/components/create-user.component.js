import React, { useState} from 'react';
import axios from 'axios';

const CreateUser = (props) => {

    const [username, setUsername] = useState('');

    const onChangeUsername = (e) => {
        setUsername(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const user = {
            username: username
        }
        console.log(user);

        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data))
            .catch((err) => console.log("An Axios Error Occured during post: ", err));

        setUsername('');
    }


    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>Username: </label>
                <input
                    value={username}
                    className="form-control"
                    onChange={e => onChangeUsername(e)}
                /> <br/>
                <input type="submit" value="Create User" className="btn btn-primary" />
            </form>
        </div>
    )
}

export default CreateUser;
