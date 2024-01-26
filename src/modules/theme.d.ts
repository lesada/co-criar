import colors from '@/theme/colors';
import fonts from '@/theme/fonts';
import metrics from '@/theme/metrics';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors;
    metrics: typeof metrics;
    fonts: typeof fonts;
  }
}
