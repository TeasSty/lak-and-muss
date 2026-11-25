import { asset } from '../lib/asset'

export function ChapterColor() {
  return (
    <section className="chapter chapter--color" id="color" aria-labelledby="color-title">
      <div className="chapter__rail">
        <p className="chapter-kicker">Глава 01</p>
        <h2 id="color-title" className="chapter__title">
          Цвет
        </h2>
        <p className="chapter__lead">
          Плавные переходы, многогранный блонд и сложные оттенки — с вниманием к
          качеству волос на каждом этапе.
        </p>
        <dl className="technique-list">
          <div>
            <dt>AirTouch</dt>
            <dd>Эффект выгоревших на солнце волос, от 4 до 7 часов</dd>
          </div>
          <div>
            <dt>Сложное окрашивание</dt>
            <dd>Балаяж, airtouch, тотал-блонд, покрытие седины</dd>
          </div>
          <div>
            <dt>Исправление цвета</dt>
            <dd>Разбор неудачных окрашиваний и новая формула</dd>
          </div>
        </dl>
      </div>
      <div className="chapter__gallery" aria-label="Работы по цвету">
        <figure className="shot shot--tall">
          <img src={asset('images/color-01.jpg')} alt="Розово-медный боб, сложное окрашивание" width={720} height={960} loading="lazy" />
        </figure>
        <figure className="shot">
          <img src={asset('images/color-02.jpg')} alt="Результат сложного окрашивания" width={720} height={960} loading="lazy" />
        </figure>
        <figure className="shot shot--wide">
          <img src={asset('images/color-03.jpg')} alt="Strawberry blonde боб в студии" width={720} height={960} loading="lazy" />
        </figure>
      </div>
    </section>
  )
}
