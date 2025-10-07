// Dummy Project Data
const projects = [
  {
    id: 1,
    title: 'Aplikasi ToDo List',
    description: 'Aplikasi untuk mengatur daftar tugas harian dengan fitur tambah, edit, dan hapus tugas secara mudah.',
    image: 'assets/todo.jpg',
    startDate: '01 Jan 2023',
    endDate: '01 Feb 2023',
    duration: '1 Month',
    technologies: ['Bootstrap', 'HTML', 'JavaScript'],
  },
  {
    id: 2,
    title: 'Website Portfolio',
    description: 'Website untuk menampilkan identitas dan karya pribadi sebagai media personal branding.',
    image: 'assets/portfolio.jpg',
    startDate: '05 Feb 2023',
    endDate: '20 Feb 2023',
    duration: '15 Days',
    technologies: ['Bootstrap', 'HTML', 'CSS'],
  },
  {
    id: 3,
    title: 'Blog Sederhana',
    description: 'Blog sederhana yang memungkinkan user menulis dan membaca artikel secara online.',
    image: 'assets/blog.jpg',
    startDate: '01 Mar 2023',
    endDate: '15 Mar 2023',
    duration: '2 Weeks',
    technologies: ['PHP', 'MySQL'],
  },
];

// Get ID from URL
const urlParams = new URLSearchParams(window.location.search);
const projectId = parseInt(urlParams.get('id'));

const project = projects.find((p) => p.id === projectId);

if (project) {
  document.getElementById('detail-project').innerHTML = `
        <div class="col-md-5">
          <img src="${project.image}" alt="${project.title}" class="project-image shadow" />
        </div>
        <div class="col-md-7">
          <h2 class="fw-bold">${project.title}</h2>
          <p><strong>Start Date:</strong> ${project.startDate}</p>
          <p><strong>End Date:</strong> ${project.endDate}</p>
          <p><strong>Duration:</strong> ${project.duration}</p>

          <p><strong>Technologies:</strong></p>
          ${project.technologies.map((tech) => `<span class="badge bg-dark me-2">${tech}</span>`).join('')}

          <p class="mt-3">${project.description}</p>
        </div>
      `;
} else {
  document.getElementById('detail-project').innerHTML = `<p>Project not found.</p>`;
}
