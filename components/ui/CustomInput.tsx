import styles from '../../styles/CustomInput.module.scss';

interface CustomInputProps {
  label: string;
  name: string;
  id: string;
  value: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput = ({ label, name, id, value, onSearchChange }: CustomInputProps) => {
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
