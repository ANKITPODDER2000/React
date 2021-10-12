const TheirMessage = ({lastMessage , message}) => {
	const isFirstMessage = !lastMessage || lastMessage.sender.username !== message.sender.username;
	
	let min = new Date(message.created).getMinutes().toString().padStart(2 , 0);
	let hou = new Date(message.created).getHours().toString().padStart(2 , 0);
	let time = `${hou} : ${min}`;

	return (
		<div className = 'message-row'>
			{isFirstMessage && (
				<div
					className = "message-avatar"
					style = {{backgroundImage : `url(${message?.sender?.avatar})`}}
				/>
			)}
			{

				message?.attachments?.length > 0 ?
				(
					<img 
						src = {message.attachments[0].file}
						alt = "message-attachment"
						className = 'message-image'
						style = {{marginLeft : isFirstMessage ? '4px' : '48px'}}
					/>
				)
				:
				(
					<div className="message" style={{float : 'left' ,backgroundColor : '#CABCDC' , marginLeft : isFirstMessage ? '4px' : '48px'}}>
						<p>{message.text}</p>
						<p className="time">{time}</p>
					</div>
				)
			}
		</div>
	)
}

export default TheirMessage