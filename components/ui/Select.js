import { useState } from 'react';
import styles from './Select.module.css';

const Select = ({ options }) => {
  const [selectedOptions, setSelectOptions] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOptionClick = (selectedItem) => {
    console.log([...selectedOptions, selectedItem]);
    setSelectOptions([...selectedOptions, selectedItem]);
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
