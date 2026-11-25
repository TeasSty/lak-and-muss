import { asset } from '../lib/asset'

export function ChapterCare() {
  return (
    <section className="chapter chapter--care" id="care" aria-labelledby="care-title">
      <figure className="chapter__solo">
        <img
          src={asset('images/care-01.jpg')}
          alt="Результат окрашивания с подобранным уходом"
          width={1080}
          height={1440}
          loading="lazy"
        />
      </figure>
      <div className="chapter__rail">
        <p className="chapter-kicker">Глава 04</p>
        <h2 id="care-title" className="chapter__title">
          Уход
        </h2>
        <p className="chapter__lead">
          На консультации учитываем исходный цвет, структуру и образ жизни.
          Подбираем домашний уход L’Oréal, Davines и Matrix — чтобы цвет жил
          дольше между визитами.
        </p>
        <a className="text-link" href="https://vk.ru/market-214201968" target="_blank" rel="noreferrer">
          Магазин ухода во VK →
        </a>
      </div>
    </section>
  )
}
