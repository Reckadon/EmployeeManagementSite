const FilterWidget = ({ filter, onFilterChange, sort, onSortChange }) => {
  return (
    <div className="filterWidget">
      <label className="filterLabel" htmlFor="filterBy">
        Filter:
      </label>
      <select
        id="filterBy"
        className="customSelect"
        value={filter}
        onChange={e => onFilterChange(e.target.value)}>
        <option value="none">None</option>
        <option value="available">Show Only Available Employees</option>
        <option value="male">Show Only Male Employees</option>
        <option value="female">Show Only Female Employees</option>
      </select>
      <label className="filterLabel" htmlFor="sortBy">
        Sort By:
      </label>
      <select
        id="sortBy"
        className="customSelect"
        value={sort}
        onChange={e => onSortChange(e.target.value)}>
        <option value="none">None</option>
        <option value="salary-a">Salary (Ascending)</option>
        <option value="salary-d">Salary (Descending)</option>
        <option value="age-a">Age (Ascending)</option>
        <option value="age-d">Age (Descending)</option>
      </select>
    </div>
  );
};

export default FilterWidget;
