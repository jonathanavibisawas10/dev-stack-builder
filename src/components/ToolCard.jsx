function ToolCard({ tool, onAddToStack, isAdded }) {

  const iconSrc = tool.icon?.startsWith("/") ? tool.icon : `/${tool.icon}`;

  return (
    <div
      className={`rounded-2xl p-5 border transition duration-200 flex flex-col justify-between ${
        isAdded
          ? "bg-pink-50/20 border-pink-400 ring-1 ring-pink-400 shadow-sm"
          : "bg-white border-gray-100 shadow-sm hover:shadow-md hover:border-pink-300"
      }`}
    >
      <div>
        {/* Top Header: Icon, Badge */}
        <div className="flex items-start justify-between mb-3">
          <img
            src={iconSrc}
            alt={tool.name}
            className="w-10 h-10 object-contain"
          />
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-pink-50 text-[#B341C3]">
            {tool.badge}
          </span>
        </div>

        {/* Name & Category */}
        <h3 className="text-lg font-bold text-gray-800">{tool.name}</h3>
        <p className="text-xs font-semibold text-gray-400 mt-0.5">
          {tool.category}
        </p>

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
              ? "bg-pink-50 text-pink-600 cursor-default"
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
