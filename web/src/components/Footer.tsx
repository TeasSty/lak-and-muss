import { asset } from '../lib/asset'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__brand">
        <img src={asset('images/logo-m.jpg')} alt="" width={36} height={36} />
        <div>
          <strong>Лак&Мусс</strong>
          <span>студия красоты</span>
        </div>
      </div>
      <div className="site-footer__links">
        <a href="https://vk.ru/lakandmuss" target="_blank" rel="noreferrer">
          VK
        </a>
        <a
          href="https://www.instagram.com/lakandmuss_nt"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
        <a href="tel:+79506517080">Телефон</a>
      </div>
      <p className="site-footer__note">Нижний Тагил · пр. Строителей, 4</p>
    </footer>
  )
}
