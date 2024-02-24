import { useLayoutEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Error } from './components';
import { Authorization, Post, Registration, Users } from './pages';
import { setUser } from './actions';
import { ERROR } from './constants';
import { Blog } from './blog';
import { Main } from './pages';

export const App = () => {
	const dispatch = useDispatch();

	useLayoutEffect(() => {
		const currentUserDataJSON = sessionStorage.getItem('userData');

		if (!currentUserDataJSON) {
			return;
		}

		const currentUserData = JSON.parse(currentUserDataJSON);

		dispatch(
			setUser({
				...currentUserData,
				roleId: Number(currentUserData.roleId),
			}),
		);
	}, [dispatch]);

	return (
		<Routes>
			<Route
				path="/"
				element={
					<>
						<div>Сайтик в разработке...</div>
						<Link to={`/blog`}>Перейти в блог</Link>
					</>
				}
			/>
			<Route path="/blog" element={<Blog />}>
				<Route index element={<Main />} />
				<Route path="/blog/post" element={<Post />} />
				<Route path="/blog/post/:id" element={<Post />} />
				<Route path="/blog/post/:id/edit" element={<Post />} />
			</Route>
			<Route path="/login" element={<Authorization />} />
			<Route path="/register" element={<Registration />} />
			<Route path="/users/all" element={<Users />} />
			<Route path="*" element={<Error error={ERROR.PAGE_NOT_EXIST} />} />
		</Routes>
	);
};
