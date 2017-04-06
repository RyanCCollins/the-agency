import { selectIsMobile, selectBrand } from '../selectors';
import { State } from '../../../State';

const testState: State = {
  layout: {
    isMobile: true,
    brandText: null,
  },
  home: null,
  navigationMenu: null,
};

const testState2: State = {
  layout: {
    isMobile: false,
    brandText: 'The Agency',
  },
  home: null,
  navigationMenu: null,
};

describe('app selectors', () => {
  describe('app selectIsMobile', () => {
    it('should return true', () => {
      expect(
        selectIsMobile(testState))
        .toBe(true);
    });

    it('should return false', () => {
      expect(
        selectIsMobile(testState2))
        .toBe(false);
    });
  });

  describe('app selectBrand', () => {
    it('should return null', () => {
      expect(
        selectBrand(testState))
        .toBe(null);
    });

    it('should return string', () => {
      expect(
        selectBrand(testState2))
        .toBe('The Agency');
    });
  });

});
