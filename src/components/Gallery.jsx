const images = [
  'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600',
  'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=600',
  'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=600',
  'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600',
  'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600',
  'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=600',
]

export default function Gallery() {
  return (
    <section id="gallery" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Галерея</span>
          <h2>Наши работы</h2>
          <p>Реальные результаты, которые говорят сами за себя.</p>
        </div>
        <div className="gallery-grid">
          {images.map((src, i) => (
            <div className="gallery-item" key={i}>
              <img src={src} alt={`Работа ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}