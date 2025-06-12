// 漢堡選單開關
function toggleMenu() {
  const menu = document.getElementById("sideMenu");
  if (menu.style.width === "250px") {
    menu.style.width = "0";
  } else {
    menu.style.width = "250px";
  }
}


// 顯示對應的內容區塊
function showSection(event) {
  event.preventDefault();
  const sectionId = event.target.getAttribute("data-section");
  if (!sectionId) return;

  // 隱藏所有內容區
  const sections = document.querySelectorAll(".content-section");
  sections.forEach((sec) => sec.classList.remove("active"));

  // 顯示被點擊的區塊
  const activeSection = document.getElementById(sectionId);
  if (activeSection) activeSection.classList.add("active");

  // 桌機版更新選單 active 樣式
  const links = document.querySelectorAll(".nav-links a");
  links.forEach((link) => link.classList.remove("active"));
  event.target.classList.add("active");
}
// 隱藏所有 .section 元素
  document.querySelectorAll('.section').forEach(section => {
    section.classList.add('hidden');
  });

  // 顯示被點擊的區塊
  const targetId = event.target.getAttribute('data-section');
  const targetSection = document.getElementById(targetId);

  if (targetSection) {
    targetSection.classList.remove('hidden');
  }
}
function showContent(id) {
  // 先隱藏所有作品內容
  const contents = document.querySelectorAll('.content');
  contents.forEach(c => c.style.display = 'none');

  // 顯示指定 ID 的作品內容
  document.getElementById(id).style.display = 'block';
}

tsParticles.load("tsparticles", {
  fullScreen: { enable: true, zIndex: -1 },
  particles: {
    number: { value: 60, density: { enable: true, area: 800 } },
    color: { value: "#00ffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: { min: 1, max: 5 } },
    move: { enable: true, speed: 2, direction: "none", outMode: "bounce" },
    links: {
      enable: true,
      distance: 120,
      color: "#ffffff",
      opacity: 0.3,
      width: 1
    }
  },
  background: { color: "transparent" }
});
