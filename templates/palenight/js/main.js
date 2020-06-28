let run = async () => {
  const data = await fetch("../content.json").then((data) => data.json());
  console.log(data);

  document.getElementById("name").innerHTML = data.name;
  document.getElementById("title").innerHTML = data.title;
  document.getElementById("about").innerHTML = data.about;
  document.getElementById("avatar").innerHTML = data.avatar;

  data.skills.forEach((skill) => {
    document
      .getElementById("skills")
      .insertAdjacentHTML("beforeend", generateSkill(skill));
  });
  data.jobs.forEach((job) => {
    document
      .getElementById("jobs")
      .insertAdjacentHTML("beforeend", generateWorkplace(job));
  });
  data.socials.forEach((social) => {
    document
      .getElementById("socialNetworks")
      .insertAdjacentHTML("beforeend", generateNetwork(social));
  });
};

let generateWorkplace = (place) => {
  return `
    <div class="col-sm-12 timeline-info">
        <div class="timeline-time">
            <small>Empresa:</small>
            <h4>${place.company}</h4>
            <small>Duração:</small>
            <h5 class="base-purple">${place.worked_time}</h5>
        </div>
        <div class="timeline-description">
            <p class="pt-md-2">
            <strong>Descrição:</strong>
            ${place.description}
            </p>
        </div>
    </div>
    `;
};

let generateSkill = (skill) => {
  return `
    <span
        class="badge badge-pill badge-${skill.type} badge-custom"
        data-toggle="tooltip"
        data-placement="bottom"
        title="${skill.name}<br> ${skill.comment}"
        data-html="true"
        >${skill.name}</span
    >
    `;
};

let generateNetwork = (network) => {
  return `
    <a href="${network.link}" class="social-links" target="_blank">
        <i class="fa ${network.faIcon}" aria-hidden="true"></i>
        <label>Me siga no ${network.type}</label>
    </a>
    `;
};

run();
