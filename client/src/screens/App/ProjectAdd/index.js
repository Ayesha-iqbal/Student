import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../../../utils/authContext';
import { postTodoApi } from '../../../api/todoApi';

const CreateTask = () => {
  const [formTitle, setTitle] = useState('');
  const [formDescription, setDescription] = useState('');

  const [resMessage, setResMessage] = useState('');

  const context = useContext(AuthContext);
  const { authState } = context;
  const { user } = authState;

  let handleRes = (res) => {
    console.log(res.statusText);
    if (res.statusText == 'OK') {
      setResMessage('Successfully Submitted');
    } else {
      setResMessage('Request Failed Please Try Again');
    }
  };

  const postTodo = async (event) => {
    event.preventDefault();
    let author = user ? user.username : 'Guest';
    let title = event.target.title.value;
    let description = event.target.description.value;
    let data = { title, description, author };

    let result = await postTodoApi(data);
    handleRes(result);

    setTitle('');
    setDescription('');
    
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <div>
      <h1 className='text-xl'>Project Add/Edit</h1>
      <div className='mt-5 w-3/4'>
        <form onSubmit={postTodo}>
          <div className='shadow overflow-hidden sm:rounded-md'>
            <div className='px-4 py-5 bg-white sm:p-6'>
              <div className='flex flex-col'>
                <div className='py-6 px-6'>
                  <label
                    htmlFor='title'
                    className='block text-sm font-medium leading-5 text-gray-700'
                  >
                    Project Title
                  </label>
                  <input
                    onChange={handleTitleChange}
                    value={formTitle}
                    name='title'
                    className='mt-1 form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5'
                  />
                </div>

                <div className='px-6'>
                  <label
                    htmlFor='description'
                    className='block text-sm font-medium leading-5 text-gray-700'
                  >
                    Description
                  </label>
                  <textarea
                    onChange={handleDescChange}
                    value={formDescription}
                    name='description'
                    className='mt-1 form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5'
                  />
                </div>
                <div className='py-6 px-6 bg-white text-left'>
                  <button
                    type='submit'
                    className='py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-500 focus:outline-none focus:shadow-outline-blue active:bg-indigo-600 transition duration-150 ease-in-out'
                  >
                    Save
                  </button>
                  <p className='py-4'>{resMessage}</p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
