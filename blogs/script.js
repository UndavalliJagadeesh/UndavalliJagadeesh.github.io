let blogs = "";

fetch('blogs/data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    blogs = data;
    populateBlogs(blogs);
  })
  .catch(error => console.error('Error fetching the JSON:', error));


function populateBlogs(blogs) {
    const blogTiles = document.getElementById('blog-tiles');
    const minimizeAllButton = document.getElementById('minimize-all');

    blogs.forEach(blog => {
        const blogTile = document.createElement('div');
        blogTile.classList.add('blog-tile');

        blogTile.innerHTML = `
            <div class="blog-title" style="font-family:Dauphin">${blog.title}</div>
            <div class="blog-description">${blog.description}</div>
            <div class="blog-date">${blog.date}</div>
            <div class="blog-content">
            <div class="blog-content-des" align="justify" style="
                background-image: url(${blog.backgroundImage});
                background-position: center;
                background-repeat: no-repeat;
                background-color: rgba(255,255,255,0.6);
                background-blend-mode: lighten;
                background-size: fill;">${blog.content}</div>
            </div>
            <button class="minimize-button">-</button>
        `;

        const imageGrid = document.createElement('div');
        imageGrid.classList.add('image-grid');

        blog.images.forEach(imageSrc => {
            const imgElement = document.createElement('img');
            imgElement.src = imageSrc.src;
            imgElement.classList.add(imageSrc.orientation);
            imageGrid.appendChild(imgElement);
        });
        blogTile.querySelector('.blog-content').appendChild(imageGrid);

        blogTile.addEventListener('click', () => {
            blogTile.classList.add('expanded');
            blogTile.style.transform = 'none';
            checkExpandedTiles();
        });

        const minimizeButton = blogTile.querySelector('.minimize-button');
        minimizeButton.addEventListener('click', (event) => {
            blogTile.classList.remove('expanded');
            event.stopPropagation();
            checkExpandedTiles();
        });

        blogTiles.appendChild(blogTile);
    });

    function checkExpandedTiles() {
        const expandedTiles = document.querySelectorAll('.blog-tile.expanded');
        if (expandedTiles.length > 0) {
            minimizeAllButton.style.display = 'block';
        } else {
            minimizeAllButton.style.display = 'none';
        }
    }

    minimizeAllButton.addEventListener('click', () => {
        const expandedTiles = document.querySelectorAll('.blog-tile.expanded');
        expandedTiles.forEach(tile => tile.classList.remove('expanded'));
        minimizeAllButton.style.display = 'none';
    });

    setupImagePreview();
}

function setupImagePreview() {
    const imageGrid = document.querySelectorAll('.image-grid img');
    const overlay = document.createElement('div');
    overlay.classList.add('image-preview-overlay');

    const previewImage = document.createElement('img');
    overlay.appendChild(previewImage);

    document.body.appendChild(overlay);

    imageGrid.forEach(image => {
        image.addEventListener('click', (event) => {
            previewImage.src = event.target.src;
            overlay.classList.add('visible');
        });
    });

    overlay.addEventListener('click', (event) => {
        if (event.target !== previewImage) {
            overlay.classList.remove('visible');
        }
    });
}
