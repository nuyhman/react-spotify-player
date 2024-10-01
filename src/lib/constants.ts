import { DimensionSize, Dimension } from './types';

export const DIMENSIONS: Record<DimensionSize, Dimension> = {
  small: { width: '100%', height: 80 },
  default: { width: '100%', height: 152 },
  large: { width: '100%', height: 352 },
};
