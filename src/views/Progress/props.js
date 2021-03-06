import PropTypes from 'prop-types';

export const WIDTH = 'width';
export const HEIGHT = 'height';
export const TITLE = 'title';
export const CONTENT = 'content';
export const STYLE = 'style';
export const TITLESTYLE = 'titleStyle';
export const CONTENTSTYLE = 'contentStyle';
export const defaultProps = {
  [WIDTH]: 150,
  [HEIGHT]: 100,
  [TITLE]: 'Untitled',
  [CONTENT]: undefined,
  [STYLE]: {},
  [TITLESTYLE]: {},
  [CONTENTSTYLE]: {},
};
export const propTypes = {
  [WIDTH]: PropTypes.number,
  [HEIGHT]: PropTypes.number,
  [TITLE]: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]),
  [CONTENT]: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]),
  [STYLE]: PropTypes.object,
  [TITLESTYLE]: PropTypes.object,
  [CONTENTSTYLE]: PropTypes.object,
};
