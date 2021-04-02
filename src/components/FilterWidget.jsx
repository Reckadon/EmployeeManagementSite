const FilterWidget = ({ value, onChange }) => {
  return (
    <div className="filterWidget">
      <label className="filterLabel" htmlFor="filterBy">
        Filter:
      </label>
      <select
        id="filterBy"
        className="customSelect"
        value={value}
        onChange={e => onChange(e.target.value)}>
        <option value="none">None</option>
        <option value="available">Show Only Available Employees</option>
        <option value="male">Show Only Male Employees</option>
        <option value="female">Show Only Female Employees</option>
      </select>
    </div>
  );
};

export default FilterWidget;
