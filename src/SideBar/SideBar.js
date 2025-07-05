document.addEventListener("DOMContentLoaded", function () {
    const sidebarHTML = `
      <div class="w-16 bg-gray-100 h-screen flex flex-col items-center py-4 space-y-6 shadow-md">
        <div class="sidebar-item w-10 h-10 rounded-full flex items-center justify-center text-white bg-blue-600 cursor-pointer">
          <i class="fas fa-arrow-up"></i>
        </div>
        <div class="sidebar-item w-10 h-10 flex items-center justify-center hover:bg-gray-200 rounded-full text-gray-600 cursor-pointer">
          <i class="fas fa-th-large"></i>
        </div>
        <div class="sidebar-item w-10 h-10 flex items-center justify-center hover:bg-gray-200 rounded-full text-gray-600 cursor-pointer">
          <i class="fas fa-envelope"></i>
        </div>
        <div class="sidebar-item w-10 h-10 flex items-center justify-center hover:bg-gray-200 rounded-full text-gray-600 cursor-pointer">
          <i class="fas fa-edit"></i>
        </div>
        <div class="sidebar-item w-10 h-10 flex items-center justify-center hover:bg-gray-200 rounded-full text-gray-600 cursor-pointer">
          <i class="fas fa-star"></i>
        </div>
      </div>
    `;
  
    document.getElementById("sidebar-container").innerHTML = sidebarHTML;
  
    // Highlight clicked item
    const setupSidebarHighlighting = () => {
      const items = document.querySelectorAll('.sidebar-item');
      items.forEach(item => {
        item.addEventListener('click', () => {
          // Remove active styles from all
          items.forEach(i => {
            i.classList.remove('bg-blue-600', 'text-white');
            i.classList.add('text-gray-600');
          });
  
          // Add active styles to clicked item
          item.classList.add('bg-blue-600', 'text-white');
          item.classList.remove('text-gray-600');
        });
      });
    };
  
    setupSidebarHighlighting();
  });
  