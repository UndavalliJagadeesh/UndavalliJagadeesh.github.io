let blogs = "";

fetch('blogs/data.json')
  .then(response => response.json())
  .then(data => {
    blogs = data;
    populateBlogs(blogs);
  })
  .catch(error => console.error('Error fetching the JSON:', error));


function populateBlogs(blogs) {
  const blogTiles = document.getElementById('blog-tiles');
  const minimizeAllButton = document.getElementById('minimize-all');

  blogs.forEach(blog => {
    const blogTile = document.createElement('div');
    blogTile.classList.add('blog-tile', 'reveal');

    blogTile.innerHTML = `
      <div class="blog-tile-header">
        <div class="blog-title">${blog.title}</div>
        <div class="blog-description">${blog.description}</div>
        <div class="blog-date">${blog.date}</div>
      </div>
      <span class="expand-hint">
        <span class="material-icons">expand_more</span>Read more
      </span>
      <div class="blog-content">
        <div class="blog-content-des" data-bg="${blog.backgroundImage}">
          ${blog.content}
        </div>
      </div>
      <button class="minimize-button">
        <span class="material-icons" style="font-size:0.9rem">expand_less</span>
        Collapse
      </button>
    `;

    // Image grid
    const imageGrid = document.createElement('div');
    imageGrid.classList.add('image-grid');

    if (blog.images && blog.images.length > 0) {
      blog.images.forEach(imageSrc => {
        if (!imageSrc.src) return;
        const imgElement = document.createElement('img');
        imgElement.src = imageSrc.src;
        imgElement.classList.add(imageSrc.orientation || 'horizontal');
        imgElement.loading = 'lazy';
        imageGrid.appendChild(imgElement);
      });
    }

    // Set background watermark via CSS custom property (avoids stretching)
    if (blog.backgroundImage) {
      const contentDes = blogTile.querySelector('.blog-content-des');
      if (contentDes) {
        contentDes.style.setProperty('--blog-bg', `url(${blog.backgroundImage})`);
      }
    }

    blogTile.querySelector('.blog-content').appendChild(imageGrid);

    // Expand on tile click (not when clicking expand/minimize buttons)
    blogTile.addEventListener('click', (event) => {
      if (event.target.closest('.minimize-button')) return;
      if (!blogTile.classList.contains('expanded')) {
        blogTile.classList.add('expanded');
        checkExpandedTiles();
        // Re-observe new images for lightbox
        setupImagePreviewFor(imageGrid);
        // Scroll reveal for newly visible tile content
        const revealEls = blogTile.querySelectorAll('.reveal');
        revealEls.forEach(el => el.classList.add('visible'));
      }
    });

    // Minimize button
    const minimizeButton = blogTile.querySelector('.minimize-button');
    minimizeButton.addEventListener('click', (event) => {
      event.stopPropagation();
      blogTile.classList.remove('expanded');
      checkExpandedTiles();
    });

    blogTiles.appendChild(blogTile);

    // Trigger scroll reveal
    setTimeout(() => {
      const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            revealObserver.unobserve(e.target);
          }
        });
      }, { threshold: 0.08 });
      revealObserver.observe(blogTile);
    }, 0);
  });

  function checkExpandedTiles() {
    const expandedTiles = document.querySelectorAll('.blog-tile.expanded');
    if (expandedTiles.length > 0) {
      minimizeAllButton.style.display = 'inline-flex';
    } else {
      minimizeAllButton.style.display = 'none';
    }
  }

  minimizeAllButton.addEventListener('click', () => {
    document.querySelectorAll('.blog-tile.expanded').forEach(tile => tile.classList.remove('expanded'));
    minimizeAllButton.style.display = 'none';
  });

  setupGlobalImagePreview();
}


// Global overlay for image preview
function setupGlobalImagePreview() {
  const overlay = document.createElement('div');
  overlay.classList.add('image-preview-overlay');

  const previewImage = document.createElement('img');
  overlay.appendChild(previewImage);
  document.body.appendChild(overlay);

  // Delegate clicks on any .image-grid img
  document.addEventListener('click', (event) => {
    const img = event.target.closest('.image-grid img');
    if (img) {
      event.stopPropagation();
      previewImage.src = img.src;
      overlay.classList.add('visible');
    }
  });

  overlay.addEventListener('click', (event) => {
    if (event.target !== previewImage) {
      overlay.classList.remove('visible');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') overlay.classList.remove('visible');
  });
}

function setupImagePreviewFor() {
  // Images are now handled by global delegated listener
}
