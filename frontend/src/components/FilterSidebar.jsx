import { motion } from 'framer-motion';
import { Factory, Briefcase, TrendingUp, Clock, DollarSign, X } from 'lucide-react';
import { Button } from './ui/button';
import { Slider } from './ui/slider';

const FilterSidebar = ({ filters, setFilters, onClose, isMobile }) => {
  const industries = [
    { id: 'all', label: 'All Industries', icon: TrendingUp },
    { id: 'service', label: 'Service', icon: Briefcase },
    { id: 'manufacturing', label: 'Manufacturing', icon: Factory }
  ];

  const difficulties = [
    { id: 'all', label: 'All Levels' },
    { id: 'Easy', label: 'Easy' },
    { id: 'Medium', label: 'Medium' },
    { id: 'Hard', label: 'Hard' }
  ];

  const roiRanges = [
    { id: 'all', label: 'Any ROI' },
    { id: '4-6', label: '4x - 6x' },
    { id: '7-10', label: '7x - 10x' },
    { id: '10+', label: '10x+' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: isMobile ? 0 : -20 }}
      animate={{ opacity: 1, x: 0 }}
      className={`${isMobile ? 'fixed inset-0 z-50 bg-[#050505]/95 backdrop-blur-lg p-6' : 'w-72 flex-shrink-0'}`}
    >
      {isMobile && (
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">Filters</h2>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onClose}
            data-testid="close-filters-mobile"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>
      )}

      <div className="space-y-8">
        {/* Industry Filter */}
        <div>
          <h3 className="text-sm font-medium text-[#A1A1AA] mb-3 uppercase tracking-wider">
            Industry
          </h3>
          <div className="space-y-2">
            {industries.map(industry => (
              <button
                key={industry.id}
                data-testid={`filter-industry-${industry.id}`}
                onClick={() => setFilters(prev => ({ ...prev, industry: industry.id }))}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  filters.industry === industry.id
                    ? 'bg-[#3B82F6]/20 border border-[#3B82F6]/50 text-white'
                    : 'bg-white/5 border border-transparent text-[#A1A1AA] hover:bg-white/10'
                }`}
              >
                <industry.icon className="w-4 h-4" />
                <span className="text-sm">{industry.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Difficulty Filter */}
        <div>
          <h3 className="text-sm font-medium text-[#A1A1AA] mb-3 uppercase tracking-wider">
            Implementation Difficulty
          </h3>
          <div className="flex flex-wrap gap-2">
            {difficulties.map(diff => (
              <button
                key={diff.id}
                data-testid={`filter-difficulty-${diff.id}`}
                onClick={() => setFilters(prev => ({ ...prev, difficulty: diff.id }))}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  filters.difficulty === diff.id
                    ? 'bg-[#8B5CF6] text-white'
                    : 'bg-white/5 text-[#A1A1AA] hover:bg-white/10'
                }`}
              >
                {diff.label}
              </button>
            ))}
          </div>
        </div>

        {/* ROI Filter */}
        <div>
          <h3 className="text-sm font-medium text-[#A1A1AA] mb-3 uppercase tracking-wider">
            ROI Multiplier
          </h3>
          <div className="space-y-2">
            {roiRanges.map(roi => (
              <button
                key={roi.id}
                data-testid={`filter-roi-${roi.id}`}
                onClick={() => setFilters(prev => ({ ...prev, roi: roi.id }))}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
                  filters.roi === roi.id
                    ? 'bg-[#10B981]/20 border border-[#10B981]/50 text-white'
                    : 'bg-white/5 border border-transparent text-[#A1A1AA] hover:bg-white/10'
                }`}
              >
                <span className="text-sm">{roi.label}</span>
                {roi.id !== 'all' && <TrendingUp className="w-4 h-4" />}
              </button>
            ))}
          </div>
        </div>

        {/* Time Saved Range */}
        <div>
          <h3 className="text-sm font-medium text-[#A1A1AA] mb-3 uppercase tracking-wider">
            Min. Hours Saved/Week
          </h3>
          <div className="px-2">
            <Slider
              data-testid="filter-time-saved"
              value={[filters.minTimeSaved || 0]}
              onValueChange={([value]) => setFilters(prev => ({ ...prev, minTimeSaved: value }))}
              max={50}
              step={5}
              className="w-full"
            />
            <div className="flex justify-between mt-2 text-xs text-[#52525B]">
              <span>0 hrs</span>
              <span className="text-[#3B82F6]">{filters.minTimeSaved || 0}+ hrs</span>
              <span>50 hrs</span>
            </div>
          </div>
        </div>

        {/* Reset Button */}
        <Button
          data-testid="reset-filters"
          variant="outline"
          onClick={() => setFilters({ industry: 'all', difficulty: 'all', roi: 'all', minTimeSaved: 0 })}
          className="w-full border-white/10 text-[#A1A1AA] hover:bg-white/5"
        >
          Reset Filters
        </Button>
      </div>
    </motion.div>
  );
};

export default FilterSidebar;
