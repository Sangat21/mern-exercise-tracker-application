import React, { useState} from 'react';

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
