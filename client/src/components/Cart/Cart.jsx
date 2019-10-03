import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const StyledCart = styled.div`
	box-shadow: 1px 1px 8px whitesmoke;
	border-radius: 5px;	
	transition: all 0.1s linear;	
	
	&:focus {
		outline: 0;
	}

	&:active {
		box-shadow: none;
	}
`;

const Button = styled.button.attrs(props => ({
	size: props.size || 'sm',		
	fontSz: () => {
		switch (props.size) {
		case 'lg':
			return '1.7rem';
		case 'sm':
			return '1.6rem';
		default:
			return '1.6rem';
		}			
	},
	counterFontSize: () => {
		switch (props.size) {
		case 'lg':
			return '1.3rem';
		case 'sm':
			return '1.4rem';
		default:
			return '1.4rem';
		}			
	},
	counterMargin: () => {
		switch (props.size) {
		case 'lg':
			return '0 0 0 5px';
		case 'sm':
			return '0 0 0 1px';
		default:
			return '0 0 0 1px';
		}			
	},
	padding: () => {
		switch (props.size) {
		case 'lg':
			return '5px 20px';
		case 'sm':
			return '4px 10px';
		default:
			return '4px 10px';
		}			
	},
	defaultFgColor: 'blue',
	defaultCounterColor: 'black'
}))`
	width:100%;
	color: ${props => props.fgColor || props.defaultFgColor};
	border: ${props => props.fgColor || props.defaultFgColor} solid 1px;
	background: ${props => props.bgColor || 'white'};
	border-radius: 5px;
	transition: all 0.3s linear;
	font-size: ${props => props.fontSz()};
	padding: ${props => props.padding()};

	@media (max-width: ${props => props.pxChange}) {
		
		padding: 4px 10px;
		font-size: 1.6rem;
		
	}
	
	&:hover {
		border: ${props => props.bgColor || 'white'} solid 1px;
		background: ${props => props.fgColor || props.defaultFgColor};
		color: ${props => props.bgColor || 'white'};

		#cart-counter {
			color: ${props => props.bgColor || 'white'};
		}
	}

	&:focus {
		outline: 0;
	}
	
	#cart-counter {
		margin: ${props => props.counterMargin()};
		padding: 0;
		color: ${props => props.counterColor || props.defaultCounterColor};
		font-size: ${props => props.counterFontSize()};	
		transition: all 0.3s linear;
		
		@media (max-width: ${props => props.pxChange}) {
				
			font-size: 1.3rem;
			margin: 0 0 0 1px;
		}
	}
`;


const Cart = function (props) {
	
	const {
		fgColor,
		bgColor,
		size,		
		value,
		counterColor,
		pxChangeLargeToSmall
	} = props;
	
	return (
		<StyledCart size={size}>
			<Link to="/">
				<Button size={size} fgColor={fgColor} bgColor={bgColor} counterColor={counterColor} pxChange={pxChangeLargeToSmall}>
					<FontAwesomeIcon icon="shopping-cart" className="icon-main-nav icon-cart" />Cart
					{ value !== null ? <Badge variant="outline-warning" id="cart-counter">{`( ${value} )`}</Badge> : ''}
				</Button>
			</Link>
		</StyledCart>
	);
	
};

export default Cart;
