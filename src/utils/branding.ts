export interface BrandingTheme {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor: string;
  textColor: string;
  logoIcon: string;
  logoType: string;
  fontFamily: string;
}

export const generateBranding = (nonprofitType: string): BrandingTheme => {
  const typeKey = nonprofitType.toLowerCase();
  
  const brandingMap: Record<string, BrandingTheme> = {
    'after school program for kids': {
      primaryColor: '#FF6B6B',
      secondaryColor: '#4ECDC4',
      accentColor: '#FFE66D',
      backgroundColor: '#F7FFF7',
      textColor: '#2C3E50',
      logoIcon: '🎨',
      logoType: 'after school program for kids',
      fontFamily: '"Comic Neue", cursive'
    },
    'animal rescue': {
      primaryColor: '#FF8C42',
      secondaryColor: '#6FBF73',
      accentColor: '#B85450',
      backgroundColor: '#FFF8F3',
      textColor: '#3A3A3A',
      logoIcon: '🐾',
      logoType: 'animal rescue',
      fontFamily: '"Quicksand", sans-serif'
    },
    'food bank': {
      primaryColor: '#8FBC8F',
      secondaryColor: '#FFB347',
      accentColor: '#CD853F',
      backgroundColor: '#F5F5DC',
      textColor: '#2F4F2F',
      logoIcon: '🌾',
      logoType: 'food bank',
      fontFamily: '"Montserrat", sans-serif'
    },
    'environmental': {
      primaryColor: '#228B22',
      secondaryColor: '#87CEEB',
      accentColor: '#FFD700',
      backgroundColor: '#F0FFF0',
      textColor: '#004225',
      logoIcon: '🌿',
      logoType: 'environmental',
      fontFamily: '"Roboto", sans-serif'
    },
    'healthcare': {
      primaryColor: '#0077B6',
      secondaryColor: '#00B4D8',
      accentColor: '#90E0EF',
      backgroundColor: '#F0F8FF',
      textColor: '#03045E',
      logoIcon: '❤️',
      logoType: 'healthcare',
      fontFamily: '"Inter", sans-serif'
    },
    'education': {
      primaryColor: '#5B2C6F',
      secondaryColor: '#A569BD',
      accentColor: '#F39C12',
      backgroundColor: '#FDFEFE',
      textColor: '#17202A',
      logoIcon: '📚',
      logoType: 'education',
      fontFamily: '"Merriweather", serif'
    },
    'default': {
      primaryColor: '#4A90E2',
      secondaryColor: '#7B68EE',
      accentColor: '#FF6B9D',
      backgroundColor: '#FAFAFA',
      textColor: '#333333',
      logoIcon: '⭐',
      logoType: 'default',
      fontFamily: '"Open Sans", sans-serif'
    }
  };

  return brandingMap[typeKey] || brandingMap['default'];
};

export const generateLogo = (nonprofitName: string, icon: string): string => {
  const initials = nonprofitName
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 3);
  
  return `${icon} ${initials}`;
};