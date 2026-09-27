import { useState } from 'react';

function App() {
  const [showPriceSection, setShowPriceSection] = useState(false);
  const [showSocialModal, setShowSocialModal] = useState(false);

  return (
    <>
      {/* Layer Gradient Overlay Putih Terang di Atas */}
      <div className="bg-gradient-overlay"></div>

      <div className="main-container">
        {/* Header Logo & Identity */}
        <header className="header">
          <div className="logo-placeholder">
            <span className="logo-emoji">🛼</span>
          </div>
          <h1 className="brand-title">KAWANUA INLINE SKATE</h1>
          <p className="brand-tagline">Private Inline Skate School in Manado</p>
        </header>

        {/* Main Call to Action (CTA) Buttons 3D */}
        <main className="cta-container">
          {/* Tombol Login Admin */}
          <a href="#login" className="btn-secondary">
            <span className="btn-icon">🔐</span>
            <div className="btn-text">
              <strong>Login Admin & Portal Murid</strong>
              <small>Rekap pendaftar, absensi & materi</small>
            </div>
          </a>

          {/* Tombol 1: Form Pendaftaran */}
          <a href="#register" className="btn-primary">
            <span className="btn-icon">📝</span>
            <div className="btn-text">
              <strong>Daftar Les Private</strong>
              <small>Isi formulir pendataan murid baru</small>
            </div>
          </a>

          {/* Tombol 2: Toggle Price List */}
          <button
            type="button"
            className={`btn-secondary ${showPriceSection ? 'active' : ''}`}
            onClick={() => setShowPriceSection(!showPriceSection)}
          >
            <span className="btn-icon">💰</span>
            <div className="btn-text">
              <strong>Lihat Paket & Price List</strong>
              <small>Cek daftar harga latihan</small>
            </div>
            <span className={`chevron-icon ${showPriceSection ? 'active' : ''}`}>▼</span>
          </button>

          {/* Tombol 3: Trigger Pop-Up Modal Social Media */}
          <button
            type="button"
            className="btn-secondary"
            onClick={() => setShowSocialModal(true)}
          >
            <span className="btn-icon">🌐</span>
            <div className="btn-text">
              <strong>Media Sosial & Komunitas</strong>
              <small>Instagram & Reclub Official</small>
            </div>
          </button>
        </main>

        {/* Price List Section (Glassmorphism Transparan) */}
        <section className={`price-cards-container ${showPriceSection ? '' : 'hidden'}`}>
          <h2 className="price-list-title">CLASS PRICE LIST</h2>

          <div className="price-grid">
            {/* Weekdays Card */}
            <div className="price-card">
              <div className="card-label">WEEKDAYS</div>
              <div className="card-session">
                <p className="session-title">1 Hour Session</p>
                <p className="session-price">IDR 175.000</p>
                <p className="session-detail">max 2 orang</p>
              </div>
              <div className="separator"></div>
              <div className="card-session">
                <p className="session-title">1 Month Pass</p>
                <p className="session-price">IDR 600.000</p>
                <p className="session-detail">4x 1 hour session</p>
              </div>
            </div>

            {/* Weekend Card */}
            <div className="price-card">
              <div className="card-label">WEEKEND</div>
              <div className="card-session">
                <p className="session-title">1 Hour Session</p>
                <p className="session-price">IDR 200.000</p>
                <p className="session-detail">max 2 orang</p>
              </div>
              <div className="separator"></div>
              <div className="card-session">
                <p className="session-title">1 Month Pass</p>
                <p className="session-price">IDR 700.000</p>
                <p className="session-detail">4x 1 hour session</p>
              </div>
            </div>
          </div>

          {/* T&C Section */}
          <div className="tc-section">
            <h3 className="tc-title">T&C Latihan</h3>
            <ul className="tc-list">
              <li>Durasi sesi di luar warming up.</li>
              <li>Skates equipment tidak disediakan (sewa/rekomendasi tersedia).</li>
            </ul>
          </div>
        </section>

        {/* Information Highlights (Glassmorphism Transparan) */}
        <section className="info-section">
          <div className="info-card">
            <h3>📍 Lokasi Latihan</h3>
            <ul className="location-list">
              <li>Godbless Park</li>
              <li>Marina Plaza</li>
              <li>Lion Plaza</li>
              <li>Lintasan Karpet Biru</li>
              <li>Bukit Golf Boulevard</li>
            </ul>
          </div>
          <div className="info-card">
            <h3>🛼 Program Latihan</h3>
            <p>Anak-anak & Dewasa | Pemula hingga Lanjutan</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <p>&copy; 2026 KAWANUA Inline Skate School</p>
        </footer>
      </div>

      {/* POP-UP MODAL SOCIAL MEDIA & KOMUNITAS */}
      {showSocialModal && (
        <div className="modal-overlay" onClick={() => setShowSocialModal(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="close-modal-btn"
              onClick={() => setShowSocialModal(false)}
            >
              &times;
            </button>
            <h3 className="modal-title">Komunitas & Media Sosial</h3>
            <p className="modal-subtitle">Kunjungi dan ikuti keseruan latihan kami di:</p>

            <div className="modal-links">
              {/* Instagram Link */}
              <a
                href="https://www.instagram.com/kawanua_sekolah_sepaturoda/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-btn"
              >
                <span className="social-icon">📸</span>
                <div className="social-text">
                  <strong>Instagram Resmi</strong>
                  <small>@kawanua_sekolah_sepaturoda</small>
                </div>
              </a>

              {/* Reclub Link */}
              <a
                href="https://reclub.co/clubs/@kawanuainlineskate"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-btn"
              >
                <span className="social-icon">🏆</span>
                <div className="social-text">
                  <strong>Reclub Community</strong>
                  <small>@kawanuainlineskate</small>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
