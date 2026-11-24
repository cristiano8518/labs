import React, { useState } from 'react';

const RegistrationForm = () => {
  // Состояния для полей формы
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  
  // Состояния для ошибок
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [ageError, setAgeError] = useState('');

  // Состояние успешной регистрации
  const [success, setSuccess] = useState(false);

  // Функции валидации
  const validateName = (name) => {
    if (!name) return 'Name is required';
    if (name.length < 2) return 'Name must be at least 2 characters';
    return '';
  };

  const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    if (!email) return 'Email is required';
    if (!regex.test(email)) return 'Email is not valid';
    return '';
  };

  const validateAge = (age) => {
    if (!age) return 'Age is required';
    if (isNaN(age) || age < 18) return 'Age must be 18 or older';
    return '';
  };

  // Обработчики изменения значений полей
  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError(validateName(e.target.value));
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(validateEmail(e.target.value));
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
    setAgeError(validateAge(e.target.value));
  };

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault(); // Предотвращает стандартное поведение отправки формы
    const nameError = validateName(name);
    const emailError = validateEmail(email);
    const ageError = validateAge(age);

    if (nameError || emailError || ageError) {
      setNameError(nameError);
      setEmailError(emailError);
      setAgeError(ageError);
      return;
    }

    setSuccess(true); // Если все поля валидны, показываем успех
    setName('');
    setEmail('');
    setAge('');
  };

  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
          />
          {nameError && <p style={{ color: 'red' }}>{nameError}</p>}
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
        </div>
        <div>
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={handleAgeChange}
          />
          {ageError && <p style={{ color: 'red' }}>{ageError}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>

      {success && <p style={{ color: 'green' }}>Registration successful!</p>}
    </div>
  );
};

export default RegistrationForm;
