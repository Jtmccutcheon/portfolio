import styled from 'styled-components'

const ArrowStyles = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	height: 5rem;
	padding: 3rem;
	position: absolute;
	bottom: 1rem;
	z-index: 1;
	.rightdiv {
		@media screen and (max-width: 676px) {
			display: flex;
			align-items: center;
			flex-direction: row-reverse;
			i {
				margin: 0 1rem 0 0;
			}
		}
	}
	.leftdiv {
		@media screen and (max-width: 676px) {
			display: flex;
			align-items: center;

			i {
				margin: 0 0 0 1rem;
			}
		}
	}

	@media screen and (max-width: 1520px) {
		position: relative;
		bottom: 10rem;
	}
	@media screen and (max-width: 685px) {
		position: relative;
		bottom: 1rem;
	}

	.arrow-right {
		font-size: 3rem;
		background-color: #1c2a35;
		width: 75px;
		height: 75px;
		border-radius: 50%;
		text-align: center;
		line-height: 30px;
		padding: 21px;

		&:hover {
			background-color: #5d97c9;
			cursor: pointer;
		}
	}
	.arrow-left {
		font-size: 3rem;
		background-color: #1c2a35;

		width: 75px;
		height: 75px;
		border-radius: 50%;
		text-align: center;
		line-height: 30px;
		padding: 21px;
		&:hover {
			background-color: #5d97c9;
			cursor: pointer;
		}
	}
`;

export default ArrowStyles