import { Sparkles, Scissors, Heart, Flower2 } from 'lucide-react'

const services = [
  { icon: Scissors, title: 'Стрижка и укладка', desc: 'Современные стрижки, укладки, окрашивание любой сложности.', price: 'от 3 500 ₽' },
  { icon: Sparkles, title: 'Маникюр и педикюр', desc: 'Аппаратный, комбинированный, дизайн и укрепление ногтей.', price: 'от 2 500 ₽' },
  { icon: Heart, title: 'Косметология', desc: 'Чистки, пилинги, уходовые процедуры для сияющей кожи.', price: 'от 4 000 ₽' },
  { icon: Flower2, title: 'Брови и ресницы', desc: 'Коррекция, окрашивание, ламинирование и наращивание.', price: 'от 1 800 ₽' },
]

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Услуги</span>
          <h2>Полный спектр beauty-услуг</h2>
          <p>Всё для вашей красоты в одном месте — от кончиков волос до кончиков ногтей.</p>
        </div>
        <div className="services-grid">
          {services.map((s) => (
            <div className="service-card" key={s.title}>
              <div className="service-icon"><s.icon size={26} /></div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <span className="price">{s.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}