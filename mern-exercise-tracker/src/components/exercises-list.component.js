import React, {useState, useEffect} from 'react';
import axios from 'axios';

const ExercisesList = (props) => {

    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/exercises/')
            .then((res) => {
                if(res.data.length > 0){
                    setExercises(res.data);
                }
            })
            .catch(err => console.log(err));
    }, []);

    const deleteExercise = (id) => {
        axios.delete('http://localhost:5000/exercise/'+id)
            .then((res) => console.log(res.data))
            .catch(err => console.log(err));

        setExercises(exercises.filter((e) => e._id !== id));
    }

    return (
        <div>
            <p>You are on the Exercises List Component!!</p>
        </div>
    )
}

export default ExercisesList;
