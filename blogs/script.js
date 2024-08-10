const blogs = [
    {
        title: "Graduation Day",
        description: "The most awaited moment of my life",
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

            Dr. Srinivasa Raju Rudraraju (DBMS), Ms. Ravindra Bharathi (OS), Mr. Kali pradeep (Java, DWDM), Mrs. Lakshmi Veenadri (DMS, IOT), Mrs. Parsanthi (SE), Mr. S Mahaboob Hussain (UHV), 
            Mr. Narasimharao (NoSQL), Mrs. Sridevi Bonthu (APPL, FML, DAA), Mrs. Mayuri Kundu (C, Python, FML), Mrs. Vijaya Durga (SPM, STM), Mr. Janardhan Rao (Web Tech), Mr. Shankar Deva (Web Tech), Mrs. Krishna Madurai (CEWS, SA), 
            Mrs. Preethi Bitra (CO, CN, RPA), Ms. Amulya (DV), Mr. Sujith (DSA, DLD) and my final project guide and department PCo Mr. Durga Satish.<br/><br/>

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
5H6 <br/>
Sayonara
</center>
</p>
        `
    },
    // {
    //     title: "Blog Post 2",
    //     description: "This is a short description of Blog Post 2.",
    //     date: "August 11, 2024",
    //     content: `
    //         <p>This is the full content of Blog Post 2. It can include text, images, videos, etc.</p>
    //         <video controls width="100%">
    //             <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
    //             Your browser does not support the video tag.
    //         </video>
    //     `
    // },
    // Add more blog objects as needed
];

const blogTiles = document.getElementById('blog-tiles');

blogs.forEach(blog => {
    const blogTile = document.createElement('div');
    blogTile.classList.add('blog-tile');

    blogTile.innerHTML = `
        <div class="blog-title">${blog.title}</div>
        <div class="blog-description">${blog.description}</div>
        <div class="blog-date">${blog.date}</div>
        <div class="blog-content" align="justify">${blog.content}</div>
        <button class="minimize-button">-</button>
    `;

    blogTile.addEventListener('click', () => {
        // blogTile.classList.toggle('expanded');
        blogTile.classList.add('expanded');
        blogTile.style.transform = 'none';
    });

    const minimizeButton = blogTile.querySelector('.minimize-button');
    minimizeButton.addEventListener('click', (event) => {
        blogTile.classList.remove('expanded');
        event.stopPropagation(); // Prevents the tile from expanding again on button click
    });

    blogTiles.appendChild(blogTile);
});
