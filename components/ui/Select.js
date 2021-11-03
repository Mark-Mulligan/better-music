import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Select.module.css';

const Select = ({ options, selectedOptions, setSelectOptions }) => {
  const selectNode = useRef();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.addEventListener('mousedown', handleOustideClick);

    return () => {
      document.removeEventListener('mousedown', handleOustideClick);
    };
  }, []);

  const handleOustideClick = (e) => {
    if (selectNode.current.contains(e.target)) {
      return;
    }

    setMenuOpen(false);
  };

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

  const handleChipToggle = (e, selectedItem) => {
    e.stopPropagation();
    let selectedItems = [...selectedOptions];

    for (let i = 0; i < selectedItems.length; i++) {
      if (selectedItems[i]['value'] === selectedItem.value) {
        selectedItems.splice(i, 1);
        setSelectOptions(selectedItems);
        break;
      }
    }
  };

  const isOptionSelected = (option, selectedOptionsArr) => {
    for (let i = 0; i < selectedOptionsArr.length; i++) {
      if (selectedOptionsArr[i]['value'] === option.value) {
        return true;
      }
    }

    return false;
  };

  return (
    <form ref={selectNode} className={styles.select}>
      <div className={styles.selectInput} onClick={handleSelectInputClick}>
        <span className={selectedOptions.length > 0 ? styles.filledSelectLabel : styles.emptySelectLabel}>Genres</span>
        <button onClick={(e) => e.preventDefault()} className={styles.selectToggle}>
          {menuOpen ? (
            <Image height={20} width={20} src="/icons/caretUp.svg" alt="caret up" />
          ) : (
            <Image height={20} width={20} src="/icons/caretDown.svg" alt="caret down" />
          )}
        </button>
        {selectedOptions.map((item) => (
          <div className={styles.chipWrapper} key={item.label}>
            <div className={styles.chip}>
              <span className={styles.chipLabel}>{item.label}</span>
              <span onClick={(e) => handleChipToggle(e, item)} className={styles.chipToggle}>
                <Image height={15} width={15} src="/icons/whiteCloseIcon.svg" alt="close" />
              </span>
            </div>
          </div>
        ))}
      </div>
      <ul className={menuOpen ? styles.open : ''}>
        {options.map((option) => (
          <li
            onClick={() => handleOptionClick(option)}
            key={option.value}
            className={isOptionSelected(option, selectedOptions) ? styles.activeOption : ''}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </form>
  );
};

export default Select;
