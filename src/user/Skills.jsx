import { useState } from 'react';

const SKILL_MAX_LEVEL = 5;

function Skills() {
  const [data, setData] = useState([]);

  function getName() {
    return 'Skills';
  }

  function maxLevel() {
    return SKILL_MAX_LEVEL;
  }

  function newSkill(skill, level) {
    return {
      id: crypto.randomUUID(),
      skill: skill,
      level: level,
    };
  }

  function addNewEntry({ skill = '', level = '' }) {
    setData([...data, newSkill(skill, level)]);
  }

  function removeEntry(id) {
    setData(
      data.filter((item) => {
        return item.id != id;
      })
    );
  }
  function changeSkill(id, value) {
    const new_list = data.map((item) => {
      if (item.id == id) {
        return { ...item, skill: value };
      } else {
        return item;
      }
    });

    setData(new_list);
  }

  function changeLevel(id, value) {
    const new_list = data.map((item) => {
      if (item.id == id) {
        return { ...item, level: value };
      } else {
        return item;
      }
    });

    setData(new_list);
  }

  function getObjDescription(id) {
    for (const entry of data) {
      if (entry.id == id) {
        return entry.skill;
      }
    }
    return null;
  }

  function clearData() {
    setData([]);
  }
  function setNewData(arr) {
    let newData = arr.map(({ skill, level }) => newSkill(skill, level));
    setData(newData);
  }

  return {
    data,
    changeSkill,
    changeLevel,
    addNewEntry,
    removeEntry,
    getName,
    getObjDescription,
    clearData,
    setNewData,
    maxLevel,
  };
}

export default Skills;
