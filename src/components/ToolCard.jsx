function ToolCard({ tool, onAddToStack, isAdded }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
      <div>
        {/* Top Header: Icon, Badge, Difficulty */}
        <div className="flex items-start justify-between mb-3">
          <img src={tool.icon} alt={tool.name} className="w-10 h-10 object-contain" />
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-pink-50 text-[#B341C3]">
            {tool.badge}
          </span>
        </div>

        {/* Name & Category */}
        <h3 className="text-lg font-bold text-gray-800">{tool.name}</h3>
        <p className="text-xs font-semibold text-gray-400 mt-0.5">{tool.category}</p>

        {/* Description */}
        <p className="text-xs text-gray-500 mt-2 line-clamp-2 leading-relaxed">
          {tool.description}
        </p>
      </div>

      {/* Card Footer */}
      <div className="mt-4 pt-3 border-t border-gray-50">
        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
          <span className="font-medium bg-gray-100 px-2 py-0.5 rounded text-gray-600">
            {tool.difficulty}
          </span>
          <span className="flex items-center gap-1 font-semibold text-amber-500">
            ★ {tool.rating}
          </span>
        </div>

        {/* Add to Stack Button */}
        <button
          onClick={() => onAddToStack(tool)}
          disabled={isAdded}
          className={`w-full py-2 rounded-lg text-xs font-semibold transition ${
            isAdded
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-gray-900 text-white hover:bg-black shadow-sm"
          }`}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
}

export default ToolCard;