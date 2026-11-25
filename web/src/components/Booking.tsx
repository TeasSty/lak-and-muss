export function Booking() {
  return (
    <section className="booking" id="book" aria-labelledby="book-title">
      <div className="booking__inner">
        <p className="chapter-kicker">Запись</p>
        <h2 id="book-title" className="booking__title">
          Запишитесь на консультацию
        </h2>
        <p className="booking__lead">
          Напишите в VK или позвоните — подберём мастера, технику и окно под ваш
          запрос.
        </p>
        <div className="booking__actions">
          <a
            className="btn btn--copper"
            href="https://vk.ru/lakandmuss"
            target="_blank"
            rel="noreferrer"
          >
            Написать в VK
          </a>
          <a className="btn btn--ghost" href="tel:+79506517080">
            +7 950 651-70-80
          </a>
        </div>
        <address className="booking__meta">
          <span>Нижний Тагил, проспект Строителей, 4</span>
          <span>Пн–Сб 10:00–20:00</span>
        </address>
      </div>
    </section>
  )
}
