import { css, Interpolation, CSSObject } from 'styled-components';
import theme from './theme';

type MediaQuery = {
  [key in keyof typeof theme.width]: (
    styles: CSSObject | TemplateStringsArray,
    ...interpolations: Interpolation<object>[]
  ) => ReturnType<typeof css>;
};

const media: MediaQuery = Object.keys(theme.width).reduce((acc, label) => {
  const key = label as keyof typeof theme.width;
  acc[key] = (styles: CSSObject | TemplateStringsArray, ...interpolations: Interpolation<object>[]) => css`
    @media (min-width: ${theme.width[key]}) {
      ${css(styles, ...interpolations)}
    }
  `;
  return acc;
}, {} as MediaQuery);

export default media;