export function Hero() {
  return (
    <section className="hero" id="top" aria-label="Главный экран">
      <div className="hero__media" aria-hidden="true">
        <img
          className="hero__still"
          src="/images/gallery-04.jpg"
          alt=""
          width={1280}
          height={1707}
        />
        <div className="hero__veil" />
      </div>

      <div className="hero__content">
        <img
          className="hero__mark"
          src="/images/logo-m.jpg"
          alt="Монограмма Лак&Мусс"
          width={120}
          height={120}
        />
        <p className="hero__brand">Лак&Мусс</p>
        <p className="hero__eyebrow">студия красоты · Нижний Тагил</p>
        <h1 className="hero__title">Сложный цвет. Без потери качества.</h1>
        <p className="hero__lead">
          AirTouch, исправление цвета и восстановление волос.
        </p>
        <div className="hero__actions">
          <a className="btn btn--copper" href="#book">
            Записаться
          </a>
          <a className="btn btn--ghost" href="#color">
            Смотреть цвет
          </a>
        </div>
      </div>
    </section>
  )
}
