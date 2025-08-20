import React, { useState } from 'react';
import { Clock, ChevronDown, ChevronUp, GripVertical } from 'lucide-react';
import { TopicData } from '../utils/topicDescriptions';
import { CSS } from '@dnd-kit/utilities';
import { useSortable } from '@dnd-kit/sortable';

interface TopicCardProps {
  topic: TopicData;
  onStatusChange: (id: string, status: TopicData['status']) => void;
  onTimeChange: (id: string, time: number) => void;
  brandColor: string;
}

const TopicCard: React.FC<TopicCardProps> = ({ topic, onStatusChange, onTimeChange, brandColor }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [tempTime, setTempTime] = useState(topic.estimatedTime);

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: topic.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const priorityColors = {
    high: '#DC2626',
    medium: '#F59E0B',
    low: '#10B981'
  };

  const statusColors = {
    'not-started': '#9CA3AF',
    'in-progress': '#3B82F6',
    'completed': '#10B981',
    'deferred': '#F59E0B'
  };

  const handleTimeSubmit = () => {
    onTimeChange(topic.id, tempTime);
    setIsEditing(false);
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="topic-card"
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
    >
      <div className="card-header">
        <div className="drag-handle" {...attributes} {...listeners}>
          <GripVertical size={20} color="#9CA3AF" />
        </div>
        <div className="priority-indicator" style={{ backgroundColor: priorityColors[topic.priority] }}>
          {topic.priority.toUpperCase()}
        </div>
      </div>

      <h3 className="topic-title">{topic.title}</h3>
      
      <p className="topic-description">
        {showDetails ? topic.detailedDescription : topic.shortDescription}
      </p>

      <div className="topic-meta">
        <div className="time-section">
          <Clock size={16} />
          {isEditing ? (
            <div className="time-edit">
              <input
                type="number"
                value={tempTime}
                onChange={(e) => setTempTime(parseInt(e.target.value) || 0)}
                onBlur={handleTimeSubmit}
                onKeyPress={(e) => e.key === 'Enter' && handleTimeSubmit()}
                min="5"
                max="120"
                step="5"
              />
              <span>min</span>
            </div>
          ) : (
            <span onClick={() => setIsEditing(true)} className="time-display">
              {topic.estimatedTime} min
            </span>
          )}
        </div>
        
        <div className="expand-icon">
          {showDetails ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </div>

      <div className="status-buttons">
        <button
          className={`status-btn ${topic.status === 'not-started' ? 'active' : ''}`}
          style={{ 
            backgroundColor: topic.status === 'not-started' ? statusColors['not-started'] : 'transparent',
            borderColor: statusColors['not-started']
          }}
          onClick={() => onStatusChange(topic.id, 'not-started')}
        >
          Not Started
        </button>
        <button
          className={`status-btn ${topic.status === 'in-progress' ? 'active' : ''}`}
          style={{ 
            backgroundColor: topic.status === 'in-progress' ? statusColors['in-progress'] : 'transparent',
            borderColor: statusColors['in-progress']
          }}
          onClick={() => onStatusChange(topic.id, 'in-progress')}
        >
          In Progress
        </button>
        <button
          className={`status-btn ${topic.status === 'completed' ? 'active' : ''}`}
          style={{ 
            backgroundColor: topic.status === 'completed' ? statusColors['completed'] : 'transparent',
            borderColor: statusColors['completed']
          }}
          onClick={() => onStatusChange(topic.id, 'completed')}
        >
          Completed
        </button>
        <button
          className={`status-btn ${topic.status === 'deferred' ? 'active' : ''}`}
          style={{ 
            backgroundColor: topic.status === 'deferred' ? statusColors['deferred'] : 'transparent',
            borderColor: statusColors['deferred']
          }}
          onClick={() => onStatusChange(topic.id, 'deferred')}
        >
          Deferred
        </button>
      </div>
    </div>
  );
};

export default TopicCard;