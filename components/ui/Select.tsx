import { useState, useEffect, useRef, MouseEventHandler } from 'react';
import Image from 'next/image';
import styles from '../../styles/Select.module.scss';
import { SelectOption } from '../../util/util';

interface SelectProps {
  options: Array<SelectOption>;
  selectedOptions: Array<SelectOption>;
  setSelectOptions: (selectedOptions: Array<SelectOption>) => void;
}

const Select = ({ options, selectedOptions, setSelectOptions }: SelectProps) => {
  const selectNode = useRef<HTMLFormElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.addEventListener('mousedown', handleOustideClick);

    return () => {
      document.removeEventListener('mousedown', handleOustideClick);
    };
  }, []);

  const handleOustideClick = (e: Event) => {
    if (selectNode.current && e.target && selectNode.current.contains(e.target as Node)) {
      return;
    }

    setMenuOpen(false);
  };

  const handleOptionClick = (selectedItem: SelectOption) => {
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

  const handleChipToggle = (e: React.MouseEvent<HTMLSpanElement>, selectedItem: SelectOption) => {
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

  const isOptionSelected = (option: SelectOption, selectedOptionsArr: Array<SelectOption>) => {
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
            <Image height={20} width={20} src="/icons/caretUpLight.svg" alt="caret up" />
          ) : (
            <Image height={20} width={20} src="/icons/caretDownLight.svg" alt="caret down" />
          )}
        </button>
        {selectedOptions.map((item) => (
          <div className={styles.chipWrapper} key={item.label}>
            <div className={styles.chip}>
              <span className={styles.chipLabel}>{item.label}</span>
              <span onClick={(e) => handleChipToggle(e, item)} className={styles.chipToggle}>
                <Image height={15} width={15} src="/icons/closeIcon.svg" alt="close" />
              </span>
            </div>
          </div>
        ))}
      </div>
      <ul className={menuOpen ? styles.open : styles.closed}>
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
