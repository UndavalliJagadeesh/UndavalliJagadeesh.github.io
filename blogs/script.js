const blogs = [
    {
        title: "Late Night Thoughts - A Special Note",
        description: "The thought of penning this note came to me in the late hours of 2 AM on April 21, 2024. From that moment, I have eagerly awaited the opportunity to share these sentiments. Now, as this note finally sees the light of day, I am filled with a deep sense of gratitude and fulfillment. Thank you to everyone who has been a part of this incredible journey.",
        date: "August 11, 2024",
        content: `
            <p>&emsp; Today marks a significant milestone in my life: the Convocation, an event I have eagerly awaited, has finally arrived.
            It is a day filled with mixed emotions as I officially conclude my B.Tech journey. I am considering penning a note to express my gratitude for this remarkable journey.<br/><br/>

            &emsp; I still remember the very first days of B.Tech, when we, as hostellers, raised an issue about the internet to the then Principal (now Director), Mr. Suryanarayana Dasika. 
            We had an hour of funny chat when he revealed the bitter truth that we had to complete the 4-year Bachelor's course in 3 years because of Covid, which happened eventually.
            I would like to thank our Head of Department (CSE) and Dean of Placements, Dr. Sumit Gupta, who has been supportive and provided us with the knowledge to succeed in various exams and placements. 
            Sir, the stories and words you shared will never be forgotten.<br/><br/>

            &emsp; The person who needs no introduction and is known for perfection, whom we always look up to - the incharge HoD (CSE) and the faculty of DBMS for us - Dr. Srinivasa Raju Rudraraju. 
            Thank you, sir, for backing us in all means and providing us with the best possible way to excel (and for providing permissions too 😅).<br/><br/>

            &emsp; The faculty have played a pivotal role in my B.Tech career, right from the basic sciences department - the most positive faculty of VITB, Dr. Dr Rajyalakshmi Ch, to our department’s 
            most supportive one and my mentor - Mr. Shenkar Deva. All the below-mentioned faculty have had a great impact on me, without whom I may not have achieved what I am holding now.<br/><br/>

            Basic Sciences - Dr. Dr Rajyalakshmi Ch (AC, Env.), Dr. R L N Pradeep Kumar (M1, M2), Mr. Phani (EEEE), Mr. Jatin, Ms. Sita Kalyani, Mr. Maheshwararo (English)<br/><br/>

            Dr. Srinivasa Raju Rudraraju (DBMS), Mrs. Sridevi Bonthu (APPL, FML, DAA), Mrs. Parsanthi (SE), Ms. Ravindra Bharathi (OS, ECom), Mr. Kali Pradeep (Java, DWDM), Mrs. Lakshmi Veenadri (DMS, IOT), 
            Mrs. Mayuri Kundu (C, Python, FML),  Mr. Shankar Deva (Web Tech), Mr. S Mahaboob Hussain (UHV), Mr. Narasimharao (NoSQL), Mrs. Vijaya Durga (SPM, STM), Mr. Janardhan Rao (Web Tech),
            Mrs. Krishna Madurai (CEWS, SA), Mrs. Preethi Bitra (CO, CN, RPA), Ms. Amulya (DV), Mr. Sujith (DSA, DLD) and my final project guide and department PCo Mr. Durga Satish.<br/><br/>

            It has been an honor to be taught by such dedicated faculty members who have always been willing to respond to calls and messages, even during late nights or early mornings. 
            I must also extend my gratitude to the lab assistants and support staff for their kindness in allowing us to use our personal laptops in labs, where we enjoyed coding and learning in comfortable environments(under ACs 😊). 
            Additionally, I appreciate the female librarian's warm demeanor in providing us with newspapers and books, always accompanied by a smile, and for accommodating our needs for GDs and Interviews in the discussion rooms.<br/><br/>

            &emsp; My family has been an unwavering source of support throughout my journey. My father, Mr. Sateesh Babu, provided me with all the necessities and the freedom to carve my own path. 
            My brother, Mr. Chaitanya, who coincidentally pursued his Bachelors in the same field, has been a guiding influence and mentor, especially during critical decisions. Lastly, my mother, 
            Mrs. Annapurna, like all mothers, has always been concerned about my well-being.<br/><br/>

            &emsp; B.Tech has brought me lifelong friendships, and I am deeply grateful for the selfless support and camaraderie of my friends. I will always cherish the memories we created together.<br/><br/>

            To Vishnu Institute of Technology (Autonomous)  Bhimavaram - Although my B.Tech life may not have unfolded as I had envisioned, you will always hold a special place in my heart.<br/><br/><br/>

            <center style="font-family:sans-serif;">
            Yours Jagadeesh Undavalli<br/>
            #5H6 <br/>
            Sayonara
            </center>
            </p>`,
        backgroundImage: `assets/img/graduation.png`,
        images: [
            {
                src: "assets/grad/IMG_2640.jpg",
                orientation: 'horizontal'
            },
            {
                src: "assets/grad/IMG_20240811_133420907.jpg",
                orientation: 'vertical'
            },
            {
                src: "assets/grad/IMG_20240811_134337888.jpg",
                orientation: 'vertical'
            },

            {
                src: "assets/grad/WhatsApp%20Image%202024-08-11%20at%2017.47.27.jpeg",
                orientation: 'vertical'
            },
            {
                src: "assets/grad/WhatsApp%20Image%202024-08-11%20at%2017.21.43.jpeg",
                orientation: 'vertical'
            },
            {
                src: "assets/grad/WhatsApp%20Image%202024-08-14%20at%2012.03.43%20(1).jpeg",
                orientation: 'horizontal'
            },

            {
                src: "assets/grad/IMG_20240813.jpeg",
                orientation: 'horizontal'
            },

            {
                src: "assets/grad/IMG_20240811_133420907.jpg",
                orientation: 'vertical'
            },
            {
                src: "assets/grad/IMG_20240811_134337888.jpg",
                orientation: 'vertical'
            },

            {
                src: "assets/grad/IMG_20240813.jpeg",
                orientation: 'horizontal'
            },
            {
                src: "assets/grad/IMG_2640.jpg",
                orientation: 'horizontal'
            },

            {
                src: "assets/grad/IMG_2640.jpg",
                orientation: 'horizontal'
            },
        ]
    },

];

const blogTiles = document.getElementById('blog-tiles');
const minimizeAllButton = document.getElementById('minimize-all');

blogs.forEach(blog => {
    const blogTile = document.createElement('div');
    blogTile.classList.add('blog-tile');

    blogTile.innerHTML = `
        <div class="blog-title">${blog.title}</div>
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
        // blogTile.classList.toggle('expanded');
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