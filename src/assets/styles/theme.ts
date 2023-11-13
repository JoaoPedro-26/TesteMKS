import { mixins } from './mixins';
import { constants } from './constants';
import { colors } from './colors';

const theme = {
    colors,
    constants,
    mixins
} as const;

export default theme;