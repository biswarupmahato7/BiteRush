const FilterButton = ({ title, onClick, isActive }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md ${
        isActive ? 'bg-orange-500 text-white' : 'bg-gray-200 text-black'
      }`}
    >
      {title}
    </button>
  );
};

export default FilterButton;
