fetch("../data/projects.json")
  .then((response) => response.json())
  .then((data) => {
    data.map((project) => {

      let row = document.createElement("div");
      row.classList.add("row");
      let img = document.createElement("img");
      img.src = project.image;
      img.alt = project.title;
      row.appendChild(img);
      //*******************************************
      let mainRow = document.createElement("div");
      mainRow.classList.add("main-row");
      row.appendChild(mainRow);

      let rowText = document.createElement("div");
      rowText.classList.add("row-text");
      mainRow.appendChild(rowText);
      let h5 = document.createElement("h5");
      h5.textContent = project.title;
      rowText.appendChild(h5);

      let rowIcon = document.createElement("div");
      rowIcon.classList.add("row-icon");
      mainRow.appendChild(rowIcon);
      let a_github = document.createElement("a");
      a_github.target = "_blank";
      a_github.href = project.urlGithub;
      let i_github = document.createElement("i");
      i_github.className = "ri-code-s-slash-line";
      a_github.appendChild(i_github);
      rowIcon.appendChild(a_github);
      let a_view = document.createElement("a");
      a_view.target = "_blank";
      a_view.href = project.urlSite;
      let i_view = document.createElement("i");
      i_view.className = "ri-eye-line";
      a_view.appendChild(i_view);
      rowIcon.appendChild(a_view);
     //*******************************************
      let createdBy = document.createElement("div");
      createdBy.className = "created-by";
      row.appendChild(createdBy);

      project.skills.map((skill) => {
        let img_html = document.createElement("img");
        img_html.src = skill;
        img_html.alt = "skill";
        createdBy.appendChild(img_html);
      })
      document.querySelector(".projects-content").appendChild(row);
    });
  });