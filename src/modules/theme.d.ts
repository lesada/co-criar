import colors from '@/theme/colors';
import metrics from '@/theme/metrics';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors;
    metrics: typeof metrics;
  }
}
