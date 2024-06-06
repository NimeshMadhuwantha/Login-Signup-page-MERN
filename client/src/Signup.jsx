import {useState} from 'react';



function Signup(){
  const[name,setName]=useState()
  const[email,setEmail]=useState()
  const[password,setPassword]=useState()
  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
    <div className="bg-white p-3 rounded w-25">
      <h2>Register</h2>
      <form>
        <div className='mb-3'>
          <label htmlFor="email">
            <strong>Name</strong>
          </label>
          <input
          type='text'
          placeholder='Enter Name'
          autoComplete='off'
          name='email'
          className='form-control rounded-0'
          onChange={(e) => setName(e.target.value)}
          />
          </div>
          <div className='mb-3'>
            <label htmlFor='email'>
              <strong>Email</strong>
            </label>
          <input
                    type='email'
                    placeholder='Enter email'
                    autoComplete='off'
                    name='email'
                    className='form-control rounded-0'
                    onChange={(e) => setEmail(e.target.value)}
          /> </div>

          <div className='mb-3'>
          <label htmlFor="email">
            <strong>Password</strong>
          </label>
          <input
          type='password'
          placeholder='Enter password'
          autoComplete='off'
          name='password'
          className='form-control rounded-0'
          onChange={(e) => setPassword(e.target.value)}
          />
          </div>
          <button type='submit' className='btn btn-info w-100 rounded-3'>
            Register
          </button>
          </form>
          <p style={{ fontSize: '0.7rem' }}>Already have an account</p>

          <Link to="/Login" 

  className='btn btn-outline-dark border w-100 bg-light rounded-3 text-decoration-none'
  style={{
    transition: 'color 0.3s ease',
    color: 'black'
  }}
  onMouseEnter={(e) => e.target.style.color = '#3B9EBF'}
  onMouseLeave={(e) => e.target.style.color = 'black'}
>
  Login
</Link>


         
          </div>
          </div>

  );
  }


export default Signup;