import { useState } from 'react';

function Experience() {
  const [data, setData] = useState([]);

  function getName() {
    return 'Experience';
  }

  function newExperience(company, since, until, jobTitile, description) {
    return {
      id: crypto.randomUUID(),
      company: company,
      since: since,
      until: until,
      jobTitle: jobTitile,
      description: description,
    };
  }

  function addNewEntry({
    company = '',
    since = '',
    until = '',
    jobTitle = '',
    description = '',
  }) {
    setData([
      ...data,
      newExperience(company, since, until, jobTitle, description),
    ]);
  }

  function removeEntry(id) {
    setData(
      data.filter((item) => {
        return item.id != id;
      })
    );
  }

  function changeSince(item_id, value) {
    const new_list = data.map((item) => {
      if (item.id == item_id) {
        return { ...item, since: value };
      } else {
        return item;
      }
    });

    setData(new_list);
  }

  function changeUntil(item_id, value) {
    const new_list = data.map((item) => {
      if (item.id == item_id) {
        return { ...item, until: value };
      } else {
        return item;
      }
    });

    setData(new_list);
  }

  function changeCompany(item_id, value) {
    const new_list = data.map((item) => {
      if (item.id == item_id) {
        return { ...item, company: value };
      } else {
        return item;
      }
    });

    setData(new_list);
  }

  function changeJobTitle(item_id, value) {
    const new_list = data.map((item) => {
      if (item.id == item_id) {
        return { ...item, jobTitle: value };
      } else {
        return item;
      }
    });

    setData(new_list);
  }
  function changeDescription(item_id, value) {
    const new_list = data.map((item) => {
      if (item.id == item_id) {
        return { ...item, description: value };
      } else {
        return item;
      }
    });

    setData(new_list);
  }

  function getObjDescription(id) {
    for (const entry of data) {
      if (entry.id == id) {
        return entry.company;
      }
    }
    return null;
  }

  function clearData() {
    setData([]);
  }
  function setNewData(arr) {
    let newData = arr.map(({ company, since, until, jobTitle, description }) =>
      newExperience(company, since, until, jobTitle, description)
    );
    setData(newData);
  }

  return {
    data,
    getName,
    addNewEntry,
    removeEntry,
    changeDescription,
    changeSince,
    changeUntil,
    changeCompany,
    changeJobTitle,
    getObjDescription,
    clearData,
    setNewData,
  };
}

export default Experience;
