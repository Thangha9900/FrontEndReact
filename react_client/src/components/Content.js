import Table from 'react-bootstrap/Table';

function Content({ data, loading, error }) {
  return (
    <section aria-label="Dữ liệu từ API" className="content" id="content">
      {loading && <p aria-live="polite" className="table-message">Đang tải dữ liệu...</p>}
      {error && <p aria-live="assertive" className="table-message error-message">{error}</p>}
      {!loading && !error && data && (
        <Table bordered responsive className="user-table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">ID</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.id}</td>
                <td>{item.active ? 'Active' : 'Inactive'}</td>
              </tr>
            ))}
            {data.length === 0 && (
              <tr>
                <td colSpan="3">Không có dữ liệu.</td>
              </tr>
            )}
          </tbody>
        </Table>
      )}
    </section>
  );
}

export default Content;
