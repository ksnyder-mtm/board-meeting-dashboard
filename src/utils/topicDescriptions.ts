export interface TopicData {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  estimatedTime: number;
  priority: 'high' | 'medium' | 'low';
  status: 'not-started' | 'in-progress' | 'completed' | 'deferred';
}

export const generateTopicDescriptions = (
  topic1: string,
  topic2: string,
  topic3: string,
  nonprofitType: string
): TopicData[] => {
  const descriptions: Record<string, {
    short: string;
    detailed: string;
    time: number;
    priority: 'high' | 'medium' | 'low';
  }> = {
    'Funding, given the current political climate': {
      short: 'Assess funding stability and explore diversification strategies in response to shifting political priorities.',
      detailed: 'Review current funding sources and their vulnerability to political changes. Discuss grant diversification opportunities, individual donor cultivation strategies, and corporate partnership potential. Analyze budget scenarios and develop contingency plans for potential funding reductions. Consider advocacy efforts and coalition building to protect sector funding.',
      time: 45,
      priority: 'high'
    },
    'Increase community outreach': {
      short: 'Expand program visibility and engagement through targeted community partnerships and digital presence.',
      detailed: 'Evaluate current outreach effectiveness and identify underserved communities. Develop partnership opportunities with schools, community centers, and local organizations. Create social media strategy to showcase program impact and student success stories. Plan community events and open houses to increase enrollment and volunteer recruitment.',
      time: 30,
      priority: 'medium'
    },
    'Tracking efficacy': {
      short: 'Implement comprehensive impact measurement system to demonstrate program outcomes and ROI.',
      detailed: 'Design key performance indicators (KPIs) for academic improvement, social development, and family engagement. Select appropriate assessment tools and data collection methods. Establish baseline metrics and reporting cadence. Create impact dashboard for stakeholders including funders, parents, and community partners. Align metrics with grant requirements and strategic goals.',
      time: 35,
      priority: 'high'
    }
  };

  return [
    {
      id: '1',
      title: topic1,
      shortDescription: descriptions[topic1]?.short || `Strategic discussion on ${topic1} for ${nonprofitType}`,
      detailedDescription: descriptions[topic1]?.detailed || `Comprehensive review and planning session focused on ${topic1}, including current state analysis, stakeholder perspectives, resource requirements, and actionable next steps for board consideration.`,
      estimatedTime: descriptions[topic1]?.time || 30,
      priority: descriptions[topic1]?.priority || 'medium',
      status: 'not-started'
    },
    {
      id: '2',
      title: topic2,
      shortDescription: descriptions[topic2]?.short || `Operational improvements for ${topic2} initiatives`,
      detailedDescription: descriptions[topic2]?.detailed || `Deep dive into ${topic2} with focus on implementation strategies, resource allocation, timeline development, and success metrics. Board input needed on strategic direction and resource commitment.`,
      estimatedTime: descriptions[topic2]?.time || 25,
      priority: descriptions[topic2]?.priority || 'medium',
      status: 'not-started'
    },
    {
      id: '3',
      title: topic3,
      shortDescription: descriptions[topic3]?.short || `Performance review and optimization of ${topic3}`,
      detailedDescription: descriptions[topic3]?.detailed || `Analysis of ${topic3} including current performance, improvement opportunities, best practices review, and recommended actions. Board guidance requested on priorities and investment levels.`,
      estimatedTime: descriptions[topic3]?.time || 25,
      priority: descriptions[topic3]?.priority || 'low',
      status: 'not-started'
    }
  ];
};