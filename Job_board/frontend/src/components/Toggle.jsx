 const Toggle = ({ handleChange, isChecked }) => {
  return (
    <div className="absolute z-20 top-[5px] right-2 cursor-pointer">
      <input
        type="checkbox"
        id="check"
        className="toggle"
        onChange={handleChange}
        checked={isChecked}
      />
      <label htmlFor="check"></label>
    </div>
  );
};

export default Toggle