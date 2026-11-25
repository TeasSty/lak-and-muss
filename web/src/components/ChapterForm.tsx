import { asset } from '../lib/asset'

export function ChapterForm() {
  return (
    <section className="chapter chapter--form" id="form" aria-labelledby="form-title">
      <div className="chapter__gallery chapter__gallery--pair" aria-label="Стрижки">
        <figure className="shot">
          <img src={asset('images/form-01.jpg')} alt="Стрижка и укладка" width={720} height={1080} loading="lazy" />
        </figure>
        <figure className="shot">
          <img src={asset('images/form-02.jpg')} alt="Форма и длина после стрижки" width={720} height={1080} loading="lazy" />
        </figure>
      </div>
      <div className="chapter__rail">
        <p className="chapter-kicker">Глава 02</p>
        <h2 id="form-title" className="chapter__title">
          Форма
        </h2>
        <p className="chapter__lead">
          Работа с формой волос — одно из основных направлений. Стрижка под цвет
          и наоборот: линия, которая держит пигмент и движение.
        </p>
      </div>
    </section>
  )
}
