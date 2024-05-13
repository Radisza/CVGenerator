import { useState } from 'react';

function Tools() {
  const [data, setData] = useState([]);

  function getName() {
    return 'Tools';
  }

  function newTool(name) {
    return {
      id: crypto.randomUUID(),
      name: name,
    };
  }

  function addNewEntry({ name = '' }) {
    setData([...data, newTool(name)]);
  }

  function removeEntry(id) {
    setData(
      data.filter((item) => {
        return item.id != id;
      })
    );
  }

  function changeTool(id, value) {
    const new_list = data.map((item) => {
      if (item.id == id) {
        return { ...item, name: value };
      } else {
        return item;
      }
    });
    setData(new_list);
  }

  function getObjDescription(id) {
    for (const entry of data) {
      if (entry.id == id) {
        return entry.name;
      }
    }
    return null;
  }

  function clearData() {
    setData([]);
  }
  function setNewData(arr) {
    let newData = arr.map((tool) => newTool(tool));
    setData(newData);
  }

  return {
    data,
    changeTool,
    addNewEntry,
    removeEntry,
    getName,
    getObjDescription,
    clearData,
    setNewData,
  };
}

export default Tools;
