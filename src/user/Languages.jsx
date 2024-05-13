import { useState } from 'react';

function Languages() {
  const [data, setData] = useState([]);

  function getName() {
    return 'Languages';
  }

  function newLanguage(language, level) {
    return {
      id: crypto.randomUUID(),
      language: language,
      level: level,
    };
  }

  function addNewEntry({ language = '', level = '' }) {
    setData([...data, newLanguage(language, level)]);
  }

  function removeEntry(id) {
    setData(
      data.filter((item) => {
        return item.id != id;
      })
    );
  }

  function changeLanguage(objId, newLanguage) {
    const new_list = data.map((language) => {
      if (language.id == objId) {
        return { ...language, language: newLanguage };
      } else {
        return language;
      }
    });

    setData(new_list);
  }

  function changeLevel(objId, newLevel) {
    const new_list = data.map((language) => {
      if (language.id == objId) {
        return { ...language, level: newLevel };
      } else {
        return language;
      }
    });

    setData(new_list);
  }

  function getObjDescription(id) {
    for (const entry of data) {
      if (entry.id == id) {
        return entry.language;
      }
    }
    return null;
  }

  function clearData() {
    setData([]);
  }
  function setNewData(arr) {
    let newData = arr.map(({ language, level }) =>
      newLanguage(language, level)
    );
    setData(newData);
  }

  return {
    data,
    changeLanguage,
    changeLevel,
    addNewEntry,
    removeEntry,
    getName,
    getObjDescription,
    clearData,
    setNewData,
  };
}

export default Languages;
