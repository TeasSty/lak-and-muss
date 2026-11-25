import { asset } from '../lib/asset'

export function Masters() {
  return (
    <section className="masters" id="masters" aria-labelledby="masters-title">
      <div className="masters__inner">
        <p className="chapter-kicker">Команда</p>
        <h2 id="masters-title" className="masters__title">
          Мастера
        </h2>
        <p className="masters__lead">
          Портфолио ведём по мастерам — смотрите работы и выбирайте того, чей
          почерк вам ближе.
        </p>
        <ul className="masters__list">
          <li>
            <span className="masters__role">ТОП · колорист / универсал</span>
            <strong>Юлия Иванкова</strong>
          </li>
          <li>
            <span className="masters__role">Работы мастера</span>
            <strong>Алёна</strong>
          </li>
          <li>
            <span className="masters__role">Работы мастера</span>
            <strong>Марина</strong>
          </li>
        </ul>
        <div className="masters__strip" aria-hidden="true">
          <img src={asset('images/gallery-01.jpg')} alt="" width={640} height={853} loading="lazy" />
          <img src={asset('images/gallery-02.jpg')} alt="" width={640} height={853} loading="lazy" />
          <img src={asset('images/gallery-03.jpg')} alt="" width={640} height={853} loading="lazy" />
          <img src={asset('images/hero.jpg')} alt="" width={640} height={853} loading="lazy" />
        </div>
      </div>
    </section>
  )
}
