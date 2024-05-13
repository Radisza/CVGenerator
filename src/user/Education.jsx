import { useState } from 'react';

function Education() {
  const [data, setData] = useState([]);

  function getName() {
    return 'Education';
  }

  function newEducation(
    schoolName,
    location,
    since,
    until,
    profile,
    description
  ) {
    return {
      id: crypto.randomUUID(),
      schoolName: schoolName,
      location: location,
      since: since,
      until: until,
      profile: profile,
      description: description,
    };
  }

  function addNewEntry({
    schoolName = '',
    location = '',
    since = '',
    until = '',
    profile = '',
    description = '',
  }) {
    setData([
      ...data,
      newEducation(schoolName, location, since, until, profile, description),
    ]);
  }

  function removeEntry(id) {
    setData(
      data.filter((item) => {
        return item.id != id;
      })
    );
  }

  function changeSchoolName(item_id, value) {
    const new_list = data.map((edu) => {
      if (edu.id == item_id) {
        return { ...edu, schoolName: value };
      } else {
        return edu;
      }
    });

    setData(new_list);
  }

  function changeSchoolLocation(item_id, value) {
    const new_list = data.map((edu) => {
      if (edu.id == item_id) {
        return { ...edu, location: value };
      } else {
        return edu;
      }
    });

    setData(new_list);
  }

  function changeSince(item_id, value) {
    const new_list = data.map((edu) => {
      if (edu.id == item_id) {
        return { ...edu, since: value };
      } else {
        return edu;
      }
    });

    setData(new_list);
  }

  function changeUntil(item_id, value) {
    const new_list = data.map((edu) => {
      if (edu.id == item_id) {
        return { ...edu, until: value };
      } else {
        return edu;
      }
    });

    setData(new_list);
  }

  function changeProfile(item_id, value) {
    const new_list = data.map((edu) => {
      if (edu.id == item_id) {
        return { ...edu, profile: value };
      } else {
        return edu;
      }
    });

    setData(new_list);
  }

  function changeDescription(item_id, value) {
    const new_list = data.map((edu) => {
      if (edu.id == item_id) {
        return { ...edu, description: value };
      } else {
        return edu;
      }
    });

    setData(new_list);
  }

  function getObjDescription(id) {
    for (const entry of data) {
      if (entry.id == id) {
        return entry.schoolName;
      }
    }
    return null;
  }

  function clearData() {
    setData([]);
  }
  function setNewData(arr) {
    let newData = arr.map(
      ({ schoolName, location, since, until, profile, description }) =>
        newEducation(schoolName, location, since, until, profile, description)
    );
    setData(newData);
  }

  return {
    data,
    changeSchoolName,
    changeSchoolLocation,
    changeSince,
    changeUntil,
    changeProfile,
    changeDescription,
    addNewEntry,
    removeEntry,
    getName,
    getObjDescription,
    clearData,
    setNewData,
  };
}

export default Education;
