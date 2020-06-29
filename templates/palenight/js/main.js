let run = async () => {
	const data = await fetch("../content.json").then((data) => data.json());
	console.log(data);

	document.getElementById("name").innerHTML = data.name;
	document.getElementById("title").innerHTML = data.title;
	document.getElementById("about").innerHTML = data.about;
	document.getElementById("avatar").src = data.avatar;

	data.skills.forEach((skill) => {
		document
			.getElementById("grid-skills")
			.insertAdjacentHTML("beforeend", generateSkill(skill));
	});
	data.jobs.forEach((job) => {
		document
			.getElementById("second-ctn")
			.insertAdjacentHTML("beforeend", generateWorkplace(job));
	});

	//pra evitar que fique um gap no layout
	if (data.jobs.length === 0) {
		document.getElementById("second-ctn").insertAdjacentHTML(
			"beforeend",
			generateWorkplace({
				company: "Nenhum emprego",
				description: "Ainda :}",
				worked_time: "0 days",
			})
		);
	}

	data.socials.forEach((social) => {
		document
			.getElementById("grid-icons")
			.insertAdjacentHTML("beforeend", generateNetwork(social));
	});
};

let generateWorkplace = (place) => {
	return `
	<div class="company-ctn">
					<div class="company">
						<div class="up-label">
							<h2>${place.company}</h2>
						</div>
						<p>${place.description}</p>
						<div class="down-label">
							<h2>${place.worked_time}</h2>
						</div>
					</div>
				</div>
    `;
};

let generateSkill = (skill) => {
	return `
	<div class="skill" title="${skill.type}">
		<div class="up-ctn">
			<h3>${skill.name}</h3>
		</div>
		<div class="down-ctn">
			<p>${skill.time}</p>
		</div>
	</div>
    `;
};

let generateNetwork = (network) => {
	return `
    <a href="${network.link}" class="social-links" target="_blank" title="${network.type}">
        <i class="fa ${network.faIcon}" aria-hidden="true"></i>
    </a>
    `;
};

run();
