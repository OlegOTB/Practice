import { request } from '../utils/request';

export const removePostAsync = (id) => () => request(`/blog/posts/${id}`, 'DELETE');
