export function Header() {
  return (
    <header className="site-header">
      <a className="site-header__brand" href="#top" aria-label="Лак&Мусс — наверх">
        <img src="/images/logo-m.jpg" alt="" width={40} height={40} />
        <span>Лак&Мусс</span>
      </a>
      <nav className="site-header__nav" aria-label="Разделы">
        <a href="#color">Цвет</a>
        <a href="#form">Форма</a>
        <a href="#restore">Восстановление</a>
        <a href="#care">Уход</a>
        <a href="#masters">Мастера</a>
      </nav>
      <a className="site-header__cta" href="#book">
        Запись
      </a>
    </header>
  )
}
