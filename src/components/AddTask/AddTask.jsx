import React, { useRef } from 'react';
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import { addNewTask } from '../../redux/tasksReducer/actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import SingleTask from '../singleTask/SingleTask';

function AddTask() {
  const { tasks } = useSelector((state) => state);
  console.log(tasks);
  const taskName = useRef('');
  const dispatch = useDispatch();

  function handleInputChange(event) {
    taskName.current = event.target.value;
  }

  function handleAddTask() {
    dispatch(addNewTask(taskName.current));
  }

  return (
    <>
      <div className="w-100 p-5 d-flex justify-content-center gap-5">
        <MDBInput
          onChange={handleInputChange}
          label="Task Name"
          id="typeText"
          type="text"
        />
        <MDBBtn onClick={handleAddTask} className="bg-warning">
          Add Task
        </MDBBtn>
        {/* here will be the tasks from the store */}
      </div>
      <div className='d-flex justify-content-center flex-wrap'>
        {tasks?.map((singleTask) => {
          return <SingleTask task={singleTask} />;
        })}
      </div>
    </>
  );
}

export default AddTask;
