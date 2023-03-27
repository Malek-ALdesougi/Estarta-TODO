//react-redux
import { useDispatch } from 'react-redux';

// action
import { deleteTask, doneTask, changeTaskName } from '../../redux/tasksReducer/actions';

//mdb boostrab 
import React, { useState, useRef } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBInput
} from 'mdb-react-ui-kit';




function SingleTask({ task }) {

  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);
  const dispatch = useDispatch();
  const editName = useRef('');

  function handelDoneTask(task){
      dispatch(doneTask(task))
  }
  
  function handelDeleteTask(id){
    dispatch(deleteTask(id))
  }
  
  function handleEditTaskName(event){
    editName.current = event.target.value;
  }

  function handelSaveChanges(id){
    dispatch(changeTaskName(id, editName.current))
    toggleShow();
  }

  return (
    <div className='border square border-2 border-dark p-3 w-50'>
      <h5>{task.taskName}</h5>
      <div className='d-flex justify-content-around'>
        <MDBBtn onClick={toggleShow} className="bg-light text-dark">
          Edit
        </MDBBtn>

        <MDBBtn disabled={task.status} onClick={() => handelDoneTask(task)} className="bg-success">
          Done
        </MDBBtn>

        <MDBBtn onClick={() => handelDeleteTask(task.id)} className="bg-danger">
          Delete
        </MDBBtn>
      </div>

    {/* Modal */}
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Modal title</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <MDBInput defaultValue={task.taskName} onChange={handleEditTaskName} label='Text input' id='typeText' type='text' />
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
              <MDBBtn onClick={() => handelSaveChanges(task.id)}>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  )
}

export default SingleTask;
