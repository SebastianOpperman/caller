import React from 'react';
import _ from './style.module.css';
import Icon_accept from "../../icons/accept.svg";
import Icon_discard from "../../icons/discard.svg";
import Title from '../Title';
import Circle from '../Circle';

interface TimerState {
	time: number;
	progress: number;
	accepted: number;
	color: string;
	pressing?: any
}

export default class Timer extends React.Component<any, TimerState> {
	constructor(props: any) {
		super(props);
		this.onDown = this.onDown.bind(this);
		this.onUp = this.onUp.bind(this);
		this.state = {
			time: 30,
			progress: 0,
			accepted: 0,
			color: "#00C853",
		};
	}

	calcOffset() {
		const perc = ((this.state.time - 1) * 100) / 30;
		return 628 - (perc / 100) * 628;
	}

	getColor() {
		switch (true) {
			case this.state.time > 15:
				return "#00C853";
			case this.state.time > 6:
				return "#FFAC00";
			default:
				return "#FF0000";
		}
	}

	handleButton(accept:boolean | null) {
		clearInterval(this.timer);
		this.setState({
			time: 30,
			progress: 0,
			accepted: accept ? 2 : 1,
			color: accept ? '#00C853' : '#FF0000',
		});
	}

	onDown(e:any) {
		const accept = e.target.getAttribute('data-accept');
		this.setState({
			pressing: setTimeout(() => {
				this.handleButton(accept);
			}, 1000)
		});
	}

	onUp() {
		window.navigator.vibrate(200);
		clearTimeout(this.state.pressing);
	}

	timer = setInterval(() => {
		if (this.state.time > 1) {
			this.setState({
				time: this.state.time - 1,
				progress: this.calcOffset(),
				color: this.getColor(),
			});
		} else {
			clearInterval(this.timer);
			this.setState({
				time: 30,
				progress: 0,
				accepted: 1,
				color: "#FF0000",
			});
		}
	}, 1000);

	render() {
		return (
			<>
				<Title accepted={this.state.accepted} />
				<article className={`${_.timer} ${this.state.time < 30 ? _.active : ""}`}>
					{this.state.accepted === 0 && (
						<span>
							{this.state.time < 10 ? "0" : ""}
							{this.state.time}
							<small>To accept</small>
						</span>
					)}
					{this.state.accepted === 1 && (
						<em className={_.icon_declined}>
							<Icon_discard />
						</em>
					)}
					{this.state.accepted === 2 && (
						<em className={_.Icon_accepted}>
							<Icon_accept />
						</em>
					)}
					<Circle time={this.state.time} color={this.state.color} progress={this.state.progress} />
					<div />
				</article>
				<section className={`${_.options} ${this.state.accepted > 0 ? _.hideButtons : ''}`}>
					<button onMouseDown={this.onDown} onMouseUp={this.onUp} onTouchStart={this.onDown} onTouchEnd={this.onUp}>
						<Icon_discard />
						<span>Decline</span>
					</button>
					<button onMouseDown={this.onDown} onMouseUp={this.onUp} onTouchStart={this.onDown} onTouchEnd={this.onUp} data-accept={true}>
						<Icon_accept />
						<span>Accept</span>
					</button>
					{this.state.accepted === 0 && <small>Press and hold for a moment to accept</small>}
					{this.state.accepted === 1 && <small>Delivery has been cancelled</small>}
					{this.state.accepted === 2 && <small>Loading your delivery</small>}
				</section>
			</>
		);
	}
}