const MyMessage = ({message}) => {
	if(message?.attachments?.length > 0){
		return (
			<img 
				src = {message.attachments[0].file}
				alt = "message-attachment"
				className = 'message-image'
				style = {{float : 'right'}}
			/>
		)
	}
	let min = new Date(message.created).getMinutes().toString().padStart(2 , 0);
	let hou = new Date(message.created).getHours().toString().padStart(2 , 0);
	let time = `${hou} : ${min}`;
	return (
		<div className="message" style={{float : 'right' , marginRight : '18px' , color : 'white' , backgroundColor : '#3B2A50'}}>
			<p>{message.text}</p>
			<p className="time">{time}</p>
		</div>
	)
}

export default MyMessage