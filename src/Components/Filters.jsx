import '../Styles/Filters.css'

export const Filters = ({ setFilter, uncompletedTasksCount }) => {
  return (
    <section className="filters">
      <div className="filtersWrapper">
        <button onClick={() => setFilter('all')}>All Tasks</button>
        <button onClick={() => setFilter('pending')}>Pending</button>
        <button onClick={() => setFilter('completed')}>Completed Tasks</button>
      </div>
      <span className="counter">
        Tasks to complete: {uncompletedTasksCount}
      </span>
    </section>
  )
}
