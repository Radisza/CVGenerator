import { useState } from 'react';

function Links() {
  const [data, setData] = useState([]);

  function getName() {
    return 'Links';
  }

  function newLink(icon, url) {
    return {
      id: crypto.randomUUID(),
      icon: icon,
      url: url,
    };
  }

  function addNewEntry({ icon = '', url = '' }) {
    setData([...data, newLink(icon, url)]);
  }

  function removeEntry(id) {
    setData(
      data.filter((item) => {
        return item.id != id;
      })
    );
  }
  function changeIcon(id, value) {
    const new_list = data.map((item) => {
      if (item.id == id) {
        return { ...item, icon: value };
      } else {
        return item;
      }
    });

    setData(new_list);
  }

  function changeUrl(id, value) {
    const new_list = data.map((item) => {
      if (item.id == id) {
        return { ...item, url: value };
      } else {
        return item;
      }
    });

    setData(new_list);
  }

  function getObjDescription(id) {
    for (const entry of data) {
      if (entry.id == id) {
        return entry.url;
      }
    }
    return null;
  }

  function clearData() {
    setData([]);
  }
  function setNewData(arr) {
    let newData = arr.map(({ icon, url }) => newLink(icon, url));
    setData(newData);
  }

  return {
    data,
    changeIcon,
    changeUrl,
    addNewEntry,
    removeEntry,
    getName,
    getObjDescription,
    clearData,
    setNewData,
  };
}

export default Links;
