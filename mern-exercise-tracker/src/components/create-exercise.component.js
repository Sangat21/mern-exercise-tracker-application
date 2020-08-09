import React, {useState, useEffect} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const CreateExercises = (props) => {

    const [username, setUsername] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState('');
    const [date, setDate] = useState(new Date());
    const [users, setUsers] = useState([]);

    useEffect(() => {
        setUsers(['test user']);
        setUsername('test user');
    }, []);

    const onChangeUsername = (e) => {
        setUsername(e.target.value);
    }

    const onChangeDescription = (e) => {
        setDescription(e.target.value);
    }

    const onChangeDuration = (e) => {
        setDuration(e.target.value);
    }

    const onChangeDate = (date) => {
        setDate(date);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const exercise = {
            username: username,
            description: description,
            duration: duration,
            date: date
        }

        console.log(exercise);

        window.location = '/'
    }

    return (
        <form onSubmit={onSubmit}> <br/>
            <label>Select User:</label>
            <select
                required
                className="form-control"
                value={username}
                onChange={e => onChangeUsername(e)}>
                {

                    users.map((user) => {
                    return (<option
                        key={user}
                        value={user}>{user}
                        </option>);
                    })
                }
            </select> <br/>
            <label>Description:</label>
            <input
                required
                className="form-control"
                value={description}
                onChange={e => onChangeDescription(e)} /> <br/>
            <label>Duration (in minutes): </label>
            <input
                required
                className="form-control"
                value={duration}
                onChange={e => onChangeDuration(e)} /> <br/>
            <label>Date: </label> <br/>
            <DatePicker
                selected={date}
                onChange={date => onChangeDate(date)}
                className="form-control"
            />
            <br/> <br/>
            <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
        </form>
    )
}

export default CreateExercises;
