export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <span className="badge">Студия красоты в Москве</span>
          <h1>Красота, которая<br /><em>вдохновляет</em></h1>
          <p>
            Профессиональный уход, современные техники и индивидуальный
            подход. Мы подчеркнём вашу естественную красоту.
          </p>
          <div className="hero-cta">
            <a href="#booking" className="btn btn-primary">Записаться онлайн</a>
            <a href="#services" className="btn btn-ghost">Наши услуги</a>
          </div>
          <div className="hero-stats">
            <div><strong>8+</strong><span>лет опыта</span></div>
            <div><strong>5 000+</strong><span>клиентов</span></div>
            <div><strong>4.9</strong><span>средний рейтинг</span></div>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800"
            alt="Салон красоты"
          />
        </div>
      </div>
    </section>
  )
}