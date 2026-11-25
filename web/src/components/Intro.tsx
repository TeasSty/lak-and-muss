export function Intro() {
  return (
    <section className="intro" aria-labelledby="intro-title">
      <div className="intro__inner">
        <p className="chapter-kicker">Ателье пигмента</p>
        <h2 id="intro-title" className="intro__title">
          Цвет — важен. Качество — тоже.
        </h2>
        <p className="intro__text">
          Мы — студия «Лак&Мусс». Колористы с большим опытом в стрижках и
          сложных окрашиваниях. Исправляем неудачный цвет, восстанавливаем
          структуру и подбираем домашний уход под ваш ритм.
        </p>
        <ul className="intro__brands" aria-label="Косметика в работе">
          <li>L’Oréal Professionnel</li>
          <li>Davines</li>
          <li>Matrix</li>
        </ul>
      </div>
    </section>
  )
}
