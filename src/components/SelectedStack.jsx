function SelectedStack({ selectedStack, onRemove, onRemoveAll }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm sticky top-24">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-gray-100">
        <h2 className="text-base font-bold text-gray-800">Your Stack</h2>
        <span className="text-xs font-semibold bg-purple-50 text-[#B341C3] px-2.5 py-1 rounded-full">
          {selectedStack.length} Selected
        </span>
      </div>

      
      {/* Selected Items List */}
      {selectedStack.length === 0 ? (
        <div className="py-12 text-center text-gray-400">
          <p className="text-xs font-medium">No technologies added yet.</p>
          <p className="text-[11px] mt-1 text-gray-400">
            Click "Add to Stack" on any card to select items.
          </p>
        </div>
      ) : (
        <div className="mt-4 space-y-3">
          {selectedStack.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-2.5 rounded-lg border border-gray-100 bg-gray-50/50 hover:bg-gray-50 transition"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-6 h-6 object-contain"
                />
                <div>
                  <h4 className="text-xs font-bold text-gray-800">
                    {item.name}
                  </h4>
                  <span className="text-[10px] text-gray-400">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Individual Remove Button */}
              <button
                onClick={() => onRemove(item.id)}
                className="text-gray-400 hover:text-red-500 text-xs font-bold p-1 rounded transition"
                title="Remove item"
              >
                ✕
              </button>
            </div>
          ))}

          {/* Remove All Button */}
          <button
            onClick={onRemoveAll}
            className="w-full mt-4 py-2 text-xs font-semibold text-red-500 border border-red-200 hover:bg-red-50 rounded-lg transition"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
}

export default SelectedStack;
