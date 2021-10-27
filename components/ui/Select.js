import { useState, useEffect } from 'react';
import styles from './Select.module.css';

const Select = ({ options }) => {
  const [selectedOptions, setSelectOptions] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    console.log(selectedOptions);
  });

  const handleOptionClick = (selectedItem) => {
    let itemSelected = false;
    let result = [];

    for (let i = 0; i < selectedOptions.length; i++) {
      if (selectedOptions[i]['value'] === selectedItem.value) {
        itemSelected = true;
        result = [...selectedOptions];
        result.splice(i, 1);
        setSelectOptions(result);
        break;
      }
    }

    if (!itemSelected) {
      setSelectOptions([...selectedOptions, selectedItem]);
    }

    // console.log(selectedOptions);
  };

  const handleSelectInputClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <form className={styles.select}>
      <div className={styles.selectInput} onClick={handleSelectInputClick}>
        <span>Genres</span>
      </div>
      <ul style={{ height: menuOpen ? 'auto' : 0, overflow: menuOpen ? 'auto' : 'hidden' }}>
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
