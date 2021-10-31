import styles from './CustomInput.module.css';

const CustomInput = ({ label, name, id, value, onSearchChange }) => {
  return (
    <div className={styles.inputWrapper}>
      <div className={styles.formGroup}>
        <input
          value={value}
          onChange={onSearchChange}
          type="input"
          className={styles.formField}
          name={name}
          id={id}
          required
        />
        <label htmlFor={name} className={styles.formLabel}>
          {label}
        </label>
      </div>
    </div>
  );
};

export default CustomInput;
