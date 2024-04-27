// Ви маєте форму реєстрації користувачів. Іноді потрібно попередньо заповнити форму даними користувача для оновлення його профілю. Однак вам не завжди потрібно заповнити всі поля. Наприклад, користувач може хотіти оновити лише свій email та пароль, залишивши ім'я та прізвище без змін.

// Використовуючи утиліту Partial та generics, виправте тип параметра функції так, щоб уникнути помилок типізації.

type TypeUser = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

// type UpdateType = Partial<TypeUser>;

function createOrUpdateUser(
  initialValues: Partial<TypeUser>
): Partial<TypeUser> {
  // Оновлення користувача
  return initialValues;
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
