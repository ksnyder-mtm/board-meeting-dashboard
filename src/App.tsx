import React, { useState, useEffect } from 'react';
import './App.css';
import { generateBranding } from './utils/branding';
import { generateTopicDescriptions, TopicData } from './utils/topicDescriptions';
import TopicCard from './components/TopicCard';
import Logo from './components/Logo';
import { FileDown, Calendar, Users } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

const NONPROFIT_TYPE = 'After School Program for Kids';
const NONPROFIT_NAME = 'Get Out and Play!';
const TOPIC_1 = 'Funding, given the current political climate';
const TOPIC_2 = 'Increase community outreach';
const TOPIC_3 = 'Tracking efficacy';

function App() {
  const [topics, setTopics] = useState<TopicData[]>([]);
  const [branding, setBranding] = useState(generateBranding(NONPROFIT_TYPE));

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  useEffect(() => {
    const initialTopics = generateTopicDescriptions(TOPIC_1, TOPIC_2, TOPIC_3, NONPROFIT_TYPE);
    setTopics(initialTopics);
    const newBranding = generateBranding(NONPROFIT_TYPE);
    setBranding(newBranding);
  }, []);

  const handleStatusChange = (id: string, status: TopicData['status']) => {
    setTopics(topics.map(topic => 
      topic.id === id ? { ...topic, status } : topic
    ));
  };

  const handleTimeChange = (id: string, time: number) => {
    setTopics(topics.map(topic => 
      topic.id === id ? { ...topic, estimatedTime: time } : topic
    ));
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setTopics((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const exportToPDF = async () => {
    const dashboard = document.getElementById('dashboard-content');
    if (!dashboard) return;

    const canvas = await html2canvas(dashboard, {
      scale: 2,
      useCORS: true,
      logging: false,
    });
    
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'px',
      format: [canvas.width, canvas.height]
    });
    
    pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
    pdf.save(`${NONPROFIT_NAME.replace(/\s+/g, '-')}-Board-Meeting.pdf`);
  };

  const totalTime = topics.reduce((sum, topic) => sum + topic.estimatedTime, 0);
  const completedCount = topics.filter(t => t.status === 'completed').length;

  return (
    <div 
      className="App" 
      style={{
        '--primary-color': branding.primaryColor,
        '--secondary-color': branding.secondaryColor,
        '--accent-color': branding.accentColor,
        '--bg-color': branding.backgroundColor,
        '--text-color': branding.textColor,
        fontFamily: branding.fontFamily,
      } as React.CSSProperties}
    >
      <div id="dashboard-content">
        <header className="dashboard-header">
          <div className="header-content">
            <div className="logo-section">
              <div className="logo">
                <Logo 
                  type={NONPROFIT_TYPE}
                  size={60}
                  primaryColor={branding.primaryColor}
                  secondaryColor={branding.secondaryColor}
                  accentColor={branding.accentColor}
                />
              </div>
              <div className="org-info">
                <h1>{NONPROFIT_NAME}</h1>
                <p className="org-type">{NONPROFIT_TYPE}</p>
              </div>
            </div>
            
            <div className="header-stats">
              <div className="stat">
                <Calendar size={20} />
                <span>{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="stat">
                <Users size={20} />
                <span>Board Meeting</span>
              </div>
              <div className="stat">
                <Clock size={20} />
                <span>{totalTime} min total</span>
              </div>
            </div>
            
            <button className="export-btn" onClick={exportToPDF}>
              <FileDown size={20} />
              Export PDF
            </button>
          </div>
        </header>

        <div className="dashboard-body">
          <div className="progress-bar">
            <div className="progress-info">
              <span>Meeting Progress</span>
              <span>{completedCount} of {topics.length} topics completed</span>
            </div>
            <div className="progress-track">
              <div 
                className="progress-fill" 
                style={{ width: `${(completedCount / topics.length) * 100}%` }}
              />
            </div>
          </div>

          <h2 className="section-title">Today's Agenda</h2>
          
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={topics.map(t => t.id)}
              strategy={verticalListSortingStrategy}
            >
              <div className="topics-grid">
                {topics.map((topic) => (
                  <TopicCard
                    key={topic.id}
                    topic={topic}
                    onStatusChange={handleStatusChange}
                    onTimeChange={handleTimeChange}
                    brandColor={branding.primaryColor}
                  />
                ))}
              </div>
            </SortableContext>
          </DndContext>
        </div>

        <footer className="dashboard-footer">
          <p>© {new Date().getFullYear()} {NONPROFIT_NAME} • Board Meeting Dashboard</p>
        </footer>
      </div>
    </div>
  );
}

function Clock({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  );
}

export default App;
