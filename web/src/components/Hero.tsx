import { asset } from '../lib/asset'

export function Hero() {
  return (
    <section className="hero" id="top" aria-label="Главный экран">
      <div className="hero__media" aria-hidden="true">
        <img
          className="hero__still"
          src={asset('images/color-03.jpg')}
          alt=""
          width={1280}
          height={1707}
        />
        <div className="hero__veil" />
      </div>

      <div className="hero__content">
        <div className="hero__brand-block">
          <img
            className="hero__mark"
            src={asset('images/logo-m.jpg')}
            alt=""
            width={120}
            height={120}
          />
          <p className="hero__brand">Лак&Мусс</p>
          <p className="hero__eyebrow">студия красоты · Нижний Тагил</p>
        </div>
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
