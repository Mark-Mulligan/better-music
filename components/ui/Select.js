import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './Select.module.css';

const Select = ({ options }) => {
  const [selectedOptions, setSelectOptions] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOptionClick = (selectedItem) => {
    let selectedItems = [...selectedOptions];
    let removeItem = false;
    let deleteIndex = 0;

    for (let i = 0; i < selectedItems.length; i++) {
      if (selectedItems[i]['value'] === selectedItem.value) {
        removeItem = true;
        deleteIndex = i;
        break;
      }
    }

    removeItem ? selectedItems.splice(deleteIndex, 1) : selectedItems.push(selectedItem);
    setSelectOptions(selectedItems);
  };

  const handleSelectInputClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <form className={styles.select}>
      <div className={styles.selectInput} onClick={handleSelectInputClick}>
        <span className={selectedOptions.length > 0 ? styles.filledSelectLabel : styles.emptySelectLabel}>Genres</span>
        {selectedOptions.map((item) => (
          <div className={styles.chip} key={item.label}>
            <span>{item.label}</span>
            <FontAwesomeIcon className={styles.closeIcon} icon={faTimes} size="sm" />{' '}
          </div>
        ))}
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
