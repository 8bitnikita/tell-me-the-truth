import { useState } from "react";
import styles from "./WindowOfQuestion.module.css";

export const WindowOfQuestion = () => {
	const [message, setMessage] = useState("Are You Stupid?");

	const buttonMove = (e: any) => {
		let a = Math.ceil(Math.random() * 200);
		let b = Math.ceil(Math.random() * 200);
		e.target.style.left = -a + "px";
		e.target.style.top = b + "px";
	};

	const onButtonClick = () => {
		setMessage("i Know :)");
	};

	return (
		<div className={styles.window}>
			<div className={styles.header}>
				<div className={styles.headerButton + " " + styles.red}></div>
				<div className={styles.headerButton + " " + styles.yellow}></div>
				<div className={styles.headerButton + " " + styles.green}></div>
				<div className={styles.headerText}>tell-me-the-truth | React JS</div>
				<div className={styles.headerButton}></div>
				<div className={styles.headerButton}></div>
				<div className={styles.headerButton}></div>
			</div>
			<div className={styles.content}>
				<div className={styles.question}>{message}</div>
				<div className={styles.buttons}>
					<button onMouseMove={buttonMove}>NO</button>
					<button onClick={onButtonClick}>YES</button>
				</div>
			</div>
		</div>
	);
};
