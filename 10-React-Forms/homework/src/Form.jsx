import React from 'react';

export function validate(input) {
  let errors = {};
  if (!input.username) {
    errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = 'Username is invalid';
  }
  
  if(!input.password){
    errors.password = 'Password is required';
  }else if(!/(?=.*[0-9])/.test(input.password)){
    errors.password = 'Password is invalid'
  }

  return errors;
};

export default function  Form() {
  const [input, setInput] = React.useState({
    username: '',
    password: '',
  });
  
  const [errors, setErrors] = React.useState({});

  const handleInputChange = function(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });

    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }));
  }

  return (
      <form>
        <div>
          <label>Username:</label>
          
          <input type="text" name="username" onChange={(e) => handleInputChange(e)} value={input.username} className={errors.username && 'danger'}></input>
          
          <p className={errors.username === "Username is invalid" ? "danger" : ""}>{errors.username}</p>
          
          <label>Password:</label>
          
          <input type="password" name="password" onChange={(e) => handleInputChange(e)} value={input.password} className={errors.password === "Password is invalid" ? "danger" : ""}></input>
          
          <p className={errors.password === "Password is invalid" ? "danger" : ""}>{errors.password}</p>
        </div>
      </form>
  )
}
