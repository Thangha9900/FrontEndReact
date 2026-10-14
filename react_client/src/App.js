import { useEffect, useState } from 'react';
import Banner from './components/Banner';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import './App.css';

const API_URL = 'http://localhost:9000/data';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    fetch(API_URL, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Không thể tải dữ liệu (HTTP ${response.status}).`);
        }

        return response.json();
      })
      .then((result) => {
        const isValidData = (item) =>
          item &&
          typeof item.id === 'number' &&
          typeof item.name === 'string' &&
          typeof item.active === 'boolean';

        if (!Array.isArray(result) || !result.every(isValidData)) {
          throw new Error('Dữ liệu trả về không đúng định dạng.');
        }

        setData(result);
      })
      .catch((fetchError) => {
        if (fetchError.name !== 'AbortError') {
          setError(fetchError.message || 'Đã xảy ra lỗi khi tải dữ liệu.');
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      });
    return () => controller.abort();
  }, []);

  return (
    <main className="page-shell">
      <Header />
      <Banner />
      <Content data={data} loading={loading} error={error} />
      <Footer />
    </main>
  );
}

export default App;
