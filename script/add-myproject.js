const projects = [
  {
    id: 1,
    title: 'Aplikasi ToDo List',
    description: 'Aplikasi untuk mengatur daftar tugas harian.',
    image: 'assets/todo.jpg',
  },
  {
    id: 2,
    title: 'Website Portfolio',
    description: 'Website untuk menampilkan identitas dan karya pribadi.',
    image: 'assets/portfolio.jpg',
  },
  {
    id: 3,
    title: 'Blog Sederhana',
    description: 'Blog untuk menulis artikel secara online.',
    image: 'assets/blog.jpg',
  },
];

const container = document.getElementById('project-list');

// versi clean dengan looping for
let html = '';
for (let i = 0; i < projects.length; i++) {
  const p = projects[i];
  html += `
      <div class="col-md-4 mb-4">
        <div class="card project-card shadow-sm" onclick="window.location.href='project-detail.html?id=${p.id}'">
          <img src="${p.image}" alt="${p.title}" />
          <div class="card-body">
            <h5>${p.title}</h5>
            <p class="text-muted" style="font-size: 14px;">${p.description}</p>
          </div>
          <div class="card-footer d-flex justify-content-between">
            <button class="btn btn-outline-dark btn-sm">Edit</button>
            <button class="btn btn-dark btn-sm">Delete</button>
          </div>
        </div>
      </div>
    `;
}

container.innerHTML = html;

function addMyProject(title, description, image) {
  const newId = projects.length + 1;
  const newProject = {
    id: newId,
    title: title,
    description: description,
    image: image || 'assets/default.jpg',
  };

  projects.push(newProject);
}
