import reducer from 'reducers/directions';
import expect from 'expect';

const initialState = {
  list: [],
  detail: {
    steps: []
  },
  errors: {},
  isUpdated: null,
  isCreated: null
};

describe('Directions reducer', () => {

  describe('Initial state', () => {
    it('should return initial state', () => {
      expect(reducer(undefined, {})).toEqual(initialState);
    });
  });

  describe('GET_DIRECTIONS_LIST action', () => {
    it('return updated list key', () => {
      const list = [{ id: 1 }, { id: 2 }, { id: 3 }];

      // initialState.list = list;
      expect(
        reducer([], { type: 'GET_DIRECTIONS_LIST', directions: list })
      ).toEqual({ list });

    });
  });

  describe('DIRECTION', () => {
    it('return updated detail key', () => {
      const detail = { id: 1, title: 'title', description: 'description' };

      // initialState.detail = detail;
      expect(
        reducer([], { type: 'DIRECTION', direction: detail })
      ).toEqual({ detail });
    });
  });

  describe('DIRECTION_FAILED', () => {
    it('return updated direction_failed key', () => {
      const errors = { title: 'Error', description: 'Error' };

      // initialState.errors = errors;
      // initialState.isUpdated = false;
      // initialState.isCreated = false;
      expect(
        reducer({}, { type: 'DIRECTION_FAILED', errors })
      ).toEqual({ errors, isCreated: false, isUpdated: false });
    });
  });

  describe('NEW_DIRECTION', () => {
    it('return updated detailed, isCreated and list key', () => {
      const defaultState = { list: [] };
      const direction = { id: 1, title: 'Title', description: 'Desc' };

      expect(
        reducer(defaultState, { type: 'NEW_DIRECTION', direction, created: true })
      ).toEqual({ detail: direction, list: [direction], isCreated: true });
    });
  });

  describe('UPDATE_DIRECTION', () => {

  });

  describe('UPDATE_STEP', () => {

  });

  describe('CREATE_STEP', () => {

  });

  describe('DELETE_STEP', () => {

  });

  describe('USER_INFO', () => {

  });

  describe('REMOVE_FORM_ERRORS', () => {

  });
});
