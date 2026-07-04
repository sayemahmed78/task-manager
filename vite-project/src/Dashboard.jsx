function Dashboard({ tasksCount = 0, filteredCount = 0 }) {
  return (
    <div className="dashboard-hero">
      <div>
        <p className="eyebrow">Welcome back</p>
        <h1>Plan your day like a pro.</h1>
        <p className="dashboard-copy">
          Keep your priorities close and turn busy days into calm, focused progress.
        </p>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <strong>{tasksCount}</strong>
          <span>Total tasks</span>
        </div>
        <div className="stat-card">
          <strong>{filteredCount}</strong>
          <span>Visible now</span>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;