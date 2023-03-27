import { MDBBtn } from 'mdb-react-ui-kit';

//react-redux
import { useDispatch } from 'react-redux';
// action
import { deleteTask, doneTask } from '../../redux/tasksReducer/actions';

function SingleTask({ task }) {

  const dispatch = useDispatch()

function handelDoneTask(task){
    dispatch(doneTask(task))
}

function handelDeleteTask(id){
  dispatch(deleteTask(id))
}

  return (
    <div className='border square border-2 border-dark p-3 w-50'>
      <h5>{task.taskName}</h5>
      <div className='d-flex justify-content-around'>
        <MDBBtn className="bg-light text-dark">
          Edit
        </MDBBtn>

        <MDBBtn disabled={task.status} onClick={() => handelDoneTask(task)} className="bg-success">
          Done
        </MDBBtn>

        <MDBBtn onClick={() => handelDeleteTask(task.id)} className="bg-danger">
          Delte
        </MDBBtn>
      </div>
    </div>
  );
}

export default SingleTask;
