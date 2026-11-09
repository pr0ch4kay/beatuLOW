import { useState } from 'react'

export default function Booking() {
  const [form, setForm] = useState({ name: '', phone: '', service: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Здесь можно отправить данные на API
    console.log('Заявка:', form)
    setSent(true)
    setForm({ name: '', phone: '', service: '' })
  }

  return (
    <section id="booking" className="section">
      <div className="container booking-inner">
        <div className="booking-text">
          <span className="eyebrow">Запись</span>
          <h2>Запишитесь на процедуру</h2>
          <p>
            Оставьте заявку — мы перезвоним в течение 15 минут и подберём
            удобное время.
          </p>
        </div>

        {sent ? (
          <div className="booking-success">
            <h3>Спасибо! 💖</h3>
            <p>Мы свяжемся с вами в ближайшее время.</p>
            <button className="btn btn-primary" onClick={() => setSent(false)}>
              Отправить ещё
            </button>
          </div>
        ) : (
          <form className="booking-form" onSubmit={handleSubmit}>
            <input
              name="name"
              placeholder="Ваше имя"
              required
              value={form.name}
              onChange={handleChange}
            />
            <input
              name="phone"
              type="tel"
              placeholder="Телефон"
              required
              value={form.phone}
              onChange={handleChange}
            />
            <select
              name="service"
              required
              value={form.service}
              onChange={handleChange}
            >
              <option value="">Выберите услугу</option>
              <option>Стрижка и укладка</option>
              <option>Маникюр и педикюр</option>
              <option>Косметология</option>
              <option>Брови и ресницы</option>
            </select>
            <button className="btn btn-primary" type="submit">
              Записаться
            </button>
          </form>
        )}
      </div>
    </section>
  )
}