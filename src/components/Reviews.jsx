const reviews = [
  { name: 'Анна', text: 'Потрясающий салон! Мастер вложил душу в мою причёску. Обязательно вернусь.', rating: 5 },
  { name: 'Мария', text: 'Лучший маникюр в городе. Атмосфера уюта и внимания к каждой детали.', rating: 5 },
  { name: 'Ольга', text: 'Косметолог — профессионал. Кожа после процедуры сияет, результат заметен сразу.', rating: 5 },
]

export default function Reviews() {
  return (
    <section id="reviews" className="section section-alt">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Отзывы</span>
          <h2>Что говорят клиенты</h2>
        </div>
        <div className="reviews-grid">
          {reviews.map((r) => (
            <div className="review-card" key={r.name}>
              <div className="stars">{'★'.repeat(r.rating)}</div>
              <p>«{r.text}»</p>
              <strong>— {r.name}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}