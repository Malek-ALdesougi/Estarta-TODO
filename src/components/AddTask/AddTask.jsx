import React, { useRef } from 'react';
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import { addNewTask } from '../../redux/tasksReducer/actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import SingleTask from '../singleTask/SingleTask';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddTask() {

  const { tasks } = useSelector((state) => state);
  const taskName = useRef('');
  const input = useRef();
  const dispatch = useDispatch();


  const notify = () => toast.success('Task Added Successfully', {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });

  function handleInputChange(event) {
    taskName.current = event.target.value;
  }

  function handleAddTask() {
    dispatch(addNewTask(taskName.current));
    input.current.value = '';
    notify();
  }

  return (
    <>
      <div className="w-100 p-5 d-flex justify-content-center gap-5">
        <MDBInput
          ref={input}
          defaultValue={taskName.current}
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
      <ToastContainer position="top-right"
       autoClose={5000}
       hideProgressBar={false}
       newestOnTop={false}
       closeOnClick
       rtl={false}
       pauseOnFocusLoss
       draggable
       pauseOnHover
       theme="dark" />
    </>
  );
}

export default AddTask;
