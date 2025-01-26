// src/components/AdminDashboard.js
const AdminDashboard = ({ applications }) => {
    const handleAddToken = (appId) => {
      // Handle token addition
    };
  
    return (
      <div>
        <h2>All Applications</h2>
        {applications.map(app => (
          <div key={app.id}>
            <p>{app.name} - {app.loanCategory}</p>
            <button onClick={() => handleAddToken(app.id)}>Add Token</button>
          </div>
        ))}
      </div>
    );
  };
  