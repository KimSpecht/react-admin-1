import * as types from '../constants/ActionTypes';

export const toggleSidebar = collapsed => ({ type: types.TOGGLE_SIDEBAR , collapsed }); // eslint-disable-line
export const logout = () => ({type: types.LOGOUT});
