import React, {useState, useEffect} from 'react';
import DatePicker from 'react-datepicker';
//import "react-datepicker/dist/react-datepicker.css";

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

    const handleSubmit = (e) => {
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
        <div>
            You are on the Create Exercises Component!!
        </div>
    )
}

export default CreateExercises;
