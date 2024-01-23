import { useEffect, useState } from "react";
import "./Render.css";

const Render = () => {
	const [resourceType, setResourceType] = useState("users");
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
			.then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
    });
	}, [resourceType]);
	console.log(data);
	return (
		<div className="renderLayout">
			<div className="renderButtons">
				<button
					className="deleteRenderBtn"
					onClick={() => {
						setData([]);
            setResourceType('')
					}}>
					удалить пользователей
				</button>
				<button
					className="getRenderBtn"
					onClick={() => {
            setResourceType('users')
            
					}}>
					получить пользователей
				</button>
			</div>
			<div className="allCards">
				{data.map((el) => (
					<div className="card" key={el.id}>
						<p>{el.id}</p>
						<h3>{el.name}</h3>
						<h4>{el.username}</h4>
						<p>{el.email}</p>
						<p>{el.phone}</p>
						<p>{el.website}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Render;
