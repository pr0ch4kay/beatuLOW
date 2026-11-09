import { Instagram, Phone, MapPin, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <a href="#" className="logo">Lumière</a>
          <p>Студия красоты, где забота о вас — главное.</p>
        </div>
        <div>
          <h4>Контакты</h4>
          <p><Phone size={16} /> +7 (999) 123-45-67</p>
          <p><MapPin size={16} /> Москва, ул. Примерная, 12</p>
          <p><Clock size={16} /> Ежедневно 10:00 – 21:00</p>
        </div>
        <div>
          <h4>Мы в соцсетях</h4>
          <p><Instagram size={16} /> @lumiere.beauty</p>
        </div>
      </div>
      <div className="container footer-bottom">
        © {new Date().getFullYear()} Lumière. Все права защищены.
      </div>
    </footer>
  )
}