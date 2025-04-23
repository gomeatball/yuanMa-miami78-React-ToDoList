import React from "react";

//include images into your bundle
import ToDo from "./ToDo";




//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<ToDo/>
		</div>
	
	)
}

export default Home;