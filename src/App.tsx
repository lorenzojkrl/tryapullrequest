import "./App.css";

function App() {
  return (
    <>
      <h1>Try A Pull Request</h1>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>GitHub Profile</th>
            <th>About You</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Lorenzo</th>
            <th>
              <a href="https://github.com/lorenzojkrl">lorenzojkrl</a>
            </th>
            <th>I am a software engineer</th>
          </tr>
          {/* Add your table rows here */}
          <tr>
            <th>Maybe You?</th>
            <th></th>
            <th></th>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default App;
