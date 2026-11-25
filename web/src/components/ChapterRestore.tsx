export function ChapterRestore() {
  return (
    <section
      className="chapter chapter--restore"
      id="restore"
      aria-labelledby="restore-title"
    >
      <div className="chapter__rail">
        <p className="chapter-kicker">Глава 03</p>
        <h2 id="restore-title" className="chapter__title">
          Восстановление
        </h2>
        <p className="chapter__lead">
          Разбираемся в сложных случаях: возвращаем блеск и плотность после
          агрессивных окрашиваний, готовим волосы к новому цвету.
        </p>
      </div>
      <div className="compare" aria-label="До и после">
        <figure className="compare__panel">
          <img src="/images/restore-01.jpg" alt="Волосы до восстановления" width={720} height={960} loading="lazy" />
          <figcaption>До</figcaption>
        </figure>
        <figure className="compare__panel">
          <img src="/images/restore-02.jpg" alt="Волосы после восстановления и цвета" width={720} height={960} loading="lazy" />
          <figcaption>После</figcaption>
        </figure>
      </div>
    </section>
  )
}
