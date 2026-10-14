import { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand" href="#home">MY APP</a>
      <button
        aria-label={menuOpen ? 'Đóng menu' : 'Mở menu'}
        aria-expanded={menuOpen}
        className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
        onClick={() => setMenuOpen((open) => !open)}
        type="button"
      >
        <span />
        <span />
        <span />
      </button>
      {menuOpen && (
        <nav aria-label="Menu chính" className="site-menu">
          <a href="#home" onClick={() => setMenuOpen(false)}>Trang chủ</a>
          <a href="#content" onClick={() => setMenuOpen(false)}>Nội dung</a>
        </nav>
      )}
    </header>
  );
}

export default Header;
