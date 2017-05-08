import { selectIsLoading, selectError, selectData } from '../selectors';
import { State } from '../../../State';
import initialState from '../state';

const testState: State = {
  layout: {
    isMobile: true,
    brandText: null,
  },
  home: initialState,
  navigationMenu: null,
};

const mockState: State = {
  layout: {
    isMobile: false,
    brandText: 'The Agency',
  },
  home: {
    isLoading: true,
    error: new Error('Oops'),
    data: 'foo',
  },
  navigationMenu: null,
};

describe('Home selectors', () => {
  describe('selectIsLoading', () => {
    it('should select false from initialState', () => {
      expect(selectIsLoading(testState)).toBe(false);
    });

    it('should select true from mock state', () => {
      expect(selectIsLoading(mockState)).toBe(true);
    });
  });

  describe('selectError', () => {
    it('should select null from initialState', () => {
      expect(selectError(testState)).toBe(null);
    });

    it('should select error from mock state', () => {
      expect(selectError(mockState)).toBe(mockState.home.error);
    });
  });

  describe('selectData', () => {
    it('should select null from initialState', () => {
      expect(selectData(testState)).toBe(null);
    });

    it('should select data from mock state', () => {
      expect(selectData(mockState)).toBe(mockState.home.data);
    });
  });
});
