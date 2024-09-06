fetch("../data/skills.json")
  .then((res) => res.json())
  .then((data) => {
    data.map((skill) => {
      let box = document.createElement("div");
      box.className = "box";
      let img = document.createElement("img");
      img.src = skill.image;
      img.alt = skill.name;
      box.appendChild(img);
      let p = document.createElement("p");
      p.textContent = skill.name;
      box.appendChild(p);
      document.querySelector(".skills-content").appendChild(box);
    });
  });