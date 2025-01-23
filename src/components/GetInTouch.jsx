import { useState } from "react";
import Button from "./Button";
import InputField from "./InputField";
import styles from "./GetInTouch.module.css";
const GetInTouch = () => {
  // Состояние для хранения значений полей
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectDescription: "",
  });

  // Состояние для контроля валидности каждого поля
  const [formValid, setFormValid] = useState({
    name: true,
    email: true,
    projectDescription: false,
  });

  // Обработчик изменений для полей формы
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Проверка валидности при потере фокуса
  const validateField = (fieldName) => {
    const value = formData[fieldName];
    setFormValid((prevValid) => ({
      ...prevValid,
      [fieldName]: value.trim() !== "", // Если поле пустое, оно становится невалидным
    }));
  };

  // Функция для обработки отправки формы
  const handleSubmit = (event) => {
    event.preventDefault();
    if (formValid.name && formValid.email && formValid.projectDescription) {
      alert("Форма отправлена!");
    } else {
      console.log("Форма невалидна.");
    }
  };

  return (
    <div id="GetInTouch" className={styles.getInTouchContainer}>
      <div className={styles.formWrapper}>
        <form className="flex w-full flex-col " onSubmit={handleSubmit}>
          <h2 className={styles.formTitle}>Let’s discuss your project</h2>

          <div className={styles.formFields}>
            <label className={styles.labelName}>
              <span className={styles.labelTextName}>Your full name</span>

              <InputField
                className=" flex w-[258px] tablet:w-[324px] "
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleInputChange}
                isValid={formValid.name}
                imageDefault="./assets/icons/PersonDefault.svg"
                imageFilled="./assets/icons/Person.svg"
                imageError="./assets/icons/Error.svg"
                onValidate={() => validateField("name")}
              />
            </label>

            <label className={styles.labelEmail}>
              <span className={styles.labelTextEmail}>Your email</span>
              <InputField
                type="email"
                name="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleInputChange}
                isValid={formValid.email}
                imageError="./assets/icons/Error.svg"
                imageDefault="./assets/icons/mailDefault.svg"
                imageFilled="./assets/icons/mail.svg"
                onValidate={() => validateField("email")}
              />
            </label>
          </div>

          <div>
            <label className={styles.labelArea}>
              <span className={styles.labelTextArea}>
                Tell me about your project
              </span>
            </label>
            <textarea
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleInputChange}
              onBlur={() => validateField("projectDescription")}
              className={styles.textareaField}
              placeholder="Add here a general description of your idea and target aim"
            />
          </div>

          <Button
            type="submit"
            disabled={
              !formValid.name ||
              !formValid.email ||
              !formValid.projectDescription
            }
            className={`mt-[48px]  ${
              formValid.name && formValid.email && formValid.projectDescription
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
