import styled from 'styled-components';
import bg from '../images/headerbg.webp'


const HeaderStyles = styled.header`
	display: flex;
	justify-content: flex-end;
	padding: 3rem;
	background-image: url(${bg});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	z-index: 1;
	top: 0;
	width: 100%;
	

	@media screen and (max-width: 1520px) {
		align-items: center;
		flex-direction: column-reverse;
	}
	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: 2rem;
	}
	img {
		align-self: center;
		width: 20rem;
		border-radius: 50%;
		margin-right: 1rem;
	}
`;


export default HeaderStyles
