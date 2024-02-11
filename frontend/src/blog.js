import { Outlet } from 'react-router-dom';
import { Header, Footer, Modal } from './components';
import styled from 'styled-components';

const AppColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	position: relative;
	width: 1000px;
	min-height: 100%;
	margin: 0 auto;
	background-color: #fff;
`;

const Page = styled.div`
	padding: 120px 0 20px;
`;

export const Blog = () => {
	return (
		<>
			<AppColumn>
				<Header />
				<Page>
					<Outlet />
				</Page>
				<Footer />
				<Modal />
			</AppColumn>
		</>
	);
};
