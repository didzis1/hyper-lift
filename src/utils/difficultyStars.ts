export const difficultyStars = (level: string) => {
  switch (level) {
    case 'beginner': {
      return '⭐';
    }
    case 'intermediate': {
      return '⭐⭐';
    }
    case 'expert': {
      return '⭐⭐⭐';
    }
    default:
      return '⭐';
  }
};
