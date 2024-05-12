import { useState } from 'react';

function Personal() {
  const getData = ({
    fullName = '',
    email = '',
    phoneNumber = '',
    location = '',
  }) => {
    return {
      fullName: fullName,
      email: email,
      phoneNumber: phoneNumber,
      location: location,
    };
  };

  const [data, setPersonalData] = useState(getData({}));

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

  function changeLocation(event_data) {
    const new_person = { ...data, location: event_data.target.value };
    setPersonalData(new_person);
  }

  function setNewData(obj) {
    setPersonalData(getData(obj));
  }

  function clearData() {
    setPersonalData(getData({}));
  }

  return {
    data,
    changeName,
    changeEmail,
    changePhone,
    changeLocation,
    setNewData,
    clearData,
  };
}

export default Personal;
