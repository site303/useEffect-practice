import React, { useState } from 'react';

function CalmMailForm() {
  const [email, setEmail] = useState("");

  function handleChange(e) {
    setEmail(e.target.value);
  }

  return (
    <section className="calm__mail-form">
      <div className="container">
        <div className="calm-mail-form__inner">
          <h4 className="calm-mail-form_title title">
            Lorem ipsum dolor sit amet consectetur.
          </h4>
          <form>
            <label htmlFor="email" className="text">Введите ваш адрес почты:</label>
            <input
              className="calm-mail-form_mail"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="example@mail.com"
            />
            <button type="submit" className="btn">Подписаться</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CalmMailForm;

