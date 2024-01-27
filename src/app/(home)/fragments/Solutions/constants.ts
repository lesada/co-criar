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
    title: 'Para você',
    variant: 'primary',
    items: [
      {
        icon: Icons.FourSquares,
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
        icon: Icons.FourSquares,
        title: 'Assessment',
        description:
          'Assessment Tipos Psicológicos e Preferências de Personalidade MBTI Step I e II',
      },
      {
        icon: Icons.FourSquares,
        title: 'Trilha Profissional',
        description: 'Coaching para trilhas e papéis profissionais',
      },
    ],
  },
  {
    title: 'Para sua empresa',
    variant: 'secondary',
    items: [
      {
        icon: Icons.FourSquares,
        title: 'Coaching Executivo',
        description: 'Individual e de Equipes de Líderes (C-Level)',
      },
      {
        icon: Icons.FourSquares,
        title: 'Co-criando Organizações Saudáveis I e II ',
        description:
          'Programas autorais da Co-criar, com abordagens e técnicas fundamentadas para cultivo de engajamento, equilíbrio e bem-estar  para pessoas e negócios.',
      },
      {
        icon: Icons.FourSquares,
        title: 'Desenvolvimento de Liderança',
        description:
          'Desenvolvimento através dos Níveis de Liderança. Programas cocriados e customizados para Desenvolvimento de Lideranças e Equipes',
        detach: true,
      },
      {
        icon: Icons.FourSquares,
        title: 'Assessment Comportamentais',
        description:
          ' Assessment Estados Positivos no Trabalho,Tipos Psicológicos e Preferências de Personalidade MBTI Step I e II',
      },
    ],
  },
];
