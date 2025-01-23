import { useState } from "react";
import styles from "./InputField.module.css"
const InputField = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  isValid,
  imageDefault,
  imageFilled,
  imageError,
  onValidate,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleBlur = () => {
    setIsFocused(false);
    // Валидация запускается только при потере фокуса
    if (onValidate) {
      onValidate();
    }
  };

  return (
    <div className="flex  flex-col items-start ">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={handleBlur}
        className={`${styles.inputField}
          ${
            isFocused ? "border-lavender" : ""
          } // Фиолетовый бордер при фокусе
          ${value ? "bg-grey-light" : "bg-white"} // Меняется фон при вводе
          ${
            isValid === false ? "border-red-500" : ""
          } // Если поле невалидно, бордер красный
        `}
        placeholder={placeholder}
        style={{
          backgroundImage: `url(${
            value === "" && !isValid
              ? imageError // Показываем ошибочную картинку, если поле пустое и невалидное
              : !isValid
              ? imageError // Показываем ошибочную картинку, если поле невалидное
              : value === ""
              ? imageDefault // Показываем дефолтную картинку, если поле пустое
              : imageFilled // Показываем заполненную картинку, если есть значение
          })`,
          backgroundPosition: "10px center",
          backgroundSize: "21px 24px",
          backgroundRepeat: "no-repeat",
        }}
      />
      {!isValid && value === "" && (
        <div className="text-red-500  text-xs mt-1">
          Please fill this mandatory field
        </div>
      )}
    </div>
  );
};

export default InputField;
