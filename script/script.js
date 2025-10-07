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

// Fungsi render utama
function renderProjects(dataList = projects, callback) {
  const html = dataList
    .map(
      (p) => `
    <div class="col-md-4 mb-4">
      <div class="card project-card shadow-sm" onclick="window.location.href='detail-project.html?id=${p.id}'">
        <img src="${p.image}" alt="${p.title}" class="card-img-top"/>
        <div class="card-body">
          <h5>${p.title}</h5>
          <p class="text-muted" style="font-size: 14px;">${p.description}</p>
        </div>
        <div class="card-footer d-flex justify-content-between">
          <button class="btn btn-outline-dark btn-sm" onclick="editProject(${p.id}, event)">Edit</button>
          <button class="btn btn-dark btn-sm" onclick="deleteProject(${p.id}, event)">Delete</button>
        </div>
      </div>
    </div>
  `
    )
    .join('');

  container.innerHTML = html;
  if (typeof callback === 'function') callback();
}

// Tambah project baru dari form
function addMyProject(title, description, image) {
  const newId = projects.length + 1;
  const newProject = {
    id: newId,
    title,
    description,
    image: image || 'assets/default.jpg',
  };
  projects.push(newProject);
  renderProjects();
}

// Hapus project
function deleteProject(id, event) {
  event.stopPropagation();
  const index = projects.findIndex((p) => p.id === id);
  if (index !== -1) {
    projects.splice(index, 1);
    renderProjects();
  }
}

// Edit (contoh alert)
function editProject(id, event) {
  event.stopPropagation();
  const p = projects.find((p) => p.id === id);
  alert(`Edit project: ${p.title}`);
}

// Filter berdasarkan input
function filterProjects(keyword) {
  const filtered = projects.filter((p) => p.title.toLowerCase().includes(keyword.toLowerCase()));
  renderProjects(filtered);
}

// Handle submit form
document.getElementById('project-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const title = document.getElementById('project-name').value.trim();
  const desc = document.getElementById('project-desc').value.trim();
  const fileInput = document.getElementById('project-image');
  const image = fileInput.files.length ? URL.createObjectURL(fileInput.files[0]) : 'assets/default.jpg';

  if (!title || !desc) return alert('Isi semua field terlebih dahulu!');

  addMyProject(title, desc, image);
  this.reset();
});

// Render pertama kali
renderProjects(undefined, () => console.log('Render pertama selesai'));
