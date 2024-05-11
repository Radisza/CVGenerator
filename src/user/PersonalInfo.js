import { useState } from 'react';

function Personal() {
  const [data, setPersonalData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
  });

  function changeName(event_data) {
    const new_person = { ...data, fullName: event_data.target.value };
    setPersonalData(new_person);
  }

  function changeEmail(event_data) {
    const new_person = { ...data, email: event_data.target.value };
    setPersonalData(new_person);
  }

  function changePhone(event_data) {
    const new_person = { ...data, phoneNumber: event_data.target.value };
    setPersonalData(new_person);
  }

  return {
    data,
    changeName,
    changeEmail,
    changePhone,
  };
}

export default Personal;
