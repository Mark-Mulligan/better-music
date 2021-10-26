import { useState } from 'react';
import styles from './Select.module.css';

const Select = ({ options }) => {
  const [selectedOptions, setSelectOptions] = useState([]);

  const handleOptionClick = (selectedItem) => {
    console.log([...selectedOptions, selectedItem]);
    setSelectOptions([...selectedOptions, selectedItem]);
  };

  return (
    <form className={styles.select}>
      <div className={styles.selectInput}></div>
      <ul>
        {options.map((option) => (
          <li onClick={() => handleOptionClick(option)} key={option.value}>
            {option.label}
          </li>
        ))}
      </ul>
    </form>
  );
};

export default Select;
