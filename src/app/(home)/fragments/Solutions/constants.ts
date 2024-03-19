import Icons from '@/assets/icons';

type Card = {
  icon: any;
  title: string;
  description: string;
  detach?: boolean;
};

type Solution = {
  title: string;
  variant: 'primary' | 'secondary';
  items: Card[];
};

export const solutions: Solution[] = [
  {
    title: 'Para sua empresa',
    variant: 'primary',
    items: [
      {
        icon: Icons.Suitcase,
        title: 'Coaching Executivo',
        description: 'Individual e de Equipes de Líderes (C-Level)',
      },
      {
        icon: Icons.Certificate,
        title: 'Co-criando Organizações Saudáveis I e II ',
        description:
          'Programas autorais da Co-criar, com abordagens e técnicas fundamentadas para cultivo de engajamento, equilíbrio e bem-estar  para pessoas e negócios.',
      },
      {
        icon: Icons.Trophy,
        title: 'Desenvolvimento de Liderança',
        description:
          'Desenvolvimento através dos Níveis de Liderança. Programas cocriados e customizados para Desenvolvimento de Lideranças e Equipes',
        detach: true,
      },
      {
        icon: Icons.Users,
        title: 'Assessment Comportamentais',
        description:
          ' Assessment Estados Positivos no Trabalho,Tipos Psicológicos e Preferências de Personalidade MBTI Step I e II',
      },
    ],
  },
  {
    title: 'Para você',
    variant: 'secondary',
    items: [
      {
        icon: Icons.Rocket,
        title: 'Desenvolvimento Pessoal',
        description: 'Desenvolvimento com Coaching Executivo Individual',
      },
      {
        icon: Icons.FourSquares,
        title: 'Mentoria',
        description: 'Mentoria em Desenvolvimento Humano e Organizacional',
        detach: true,
      },
      {
        icon: Icons.Puzzle,
        title: 'Assessment',
        description:
          'Assessment Tipos Psicológicos e Preferências de Personalidade MBTI Step I e II',
      },
      {
        icon: Icons.Bag,
        title: 'Trilha Profissional',
        description: 'Coaching para trilhas e papéis profissionais',
      },
    ],
  },
];
