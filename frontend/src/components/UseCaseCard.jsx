import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Badge } from './ui/badge';

const UseCaseCard = ({ useCase, index, onClick }) => {
  const IconComponent = Icons[useCase.icon] || Icons.Zap;
  
  const difficultyColors = {
    Easy: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    Medium: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    Hard: 'bg-red-500/20 text-red-400 border-red-500/30'
  };

  return (
    <motion.div
      data-testid={`use-case-card-${useCase.id}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      onClick={onClick}
      className="glass-card rounded-2xl p-6 cursor-pointer group"
    >
      {/* Icon and Title */}
      <div className="flex items-start gap-4 mb-4">
        <div 
          className="p-3 rounded-xl"
          style={{ backgroundColor: `${useCase.color}20` }}
        >
          <IconComponent 
            className="w-6 h-6"
            style={{ color: useCase.color }}
          />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-[#3B82F6] transition-colors">
            {useCase.title}
          </h3>
          <div className="flex items-center gap-2">
            <Badge 
              variant="outline" 
              className={`text-xs ${difficultyColors[useCase.implementation.difficulty]}`}
            >
              {useCase.implementation.difficulty}
            </Badge>
            <span className="text-xs text-[#52525B]">
              {useCase.implementation.timeline}
            </span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-[#A1A1AA] mb-4 line-clamp-2">
        {useCase.description}
      </p>

      {/* ROI Metrics Mini Grid */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-white/5 rounded-lg p-3">
          <div className="text-lg font-bold text-[#10B981]">
            {useCase.roiMetrics.roiMultiplier}
          </div>
          <div className="text-xs text-[#52525B]">ROI</div>
        </div>
        <div className="bg-white/5 rounded-lg p-3">
          <div className="text-lg font-bold text-[#3B82F6]">
            {useCase.roiMetrics.timeSaved}
          </div>
          <div className="text-xs text-[#52525B]">Time Saved</div>
        </div>
      </div>

      {/* Tools */}
      <div className="flex flex-wrap gap-1.5">
        {useCase.tools.slice(0, 3).map(tool => (
          <span 
            key={tool}
            className="px-2 py-1 text-xs bg-white/5 rounded-full text-[#A1A1AA] border border-white/5"
          >
            {tool}
          </span>
        ))}
      </div>

      {/* Cost indicator */}
      <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
        <span className="text-xs text-[#52525B]">Est. Cost</span>
        <span className="text-sm font-medium text-white">
          {useCase.implementation.cost}
        </span>
      </div>
    </motion.div>
  );
};

export default UseCaseCard;
