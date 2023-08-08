// getting plus-button, modal-container and cross button
const addBlogBtn = document.querySelector(".plus-icon");
const modalContainer = document.querySelector(".modal-container");
const closeModalBtn = document.querySelector(".cross-icon");

// getting the modal form
const addBlogForm = document.getElementById("add-blog");
// getting all input fields in add-blog-modal
const imgUrlInput = addBlogForm.querySelector(".url");
const titleInput = addBlogForm.querySelector(".title");
const descrInput = addBlogForm.querySelector(".description");
const blogBodyInput = addBlogForm.querySelector(".blog_body");

//getting the read-blog-section
const readBlogPage = document.querySelector(".read-blog-container");
const blogPage = document.querySelector(".read-blog");
const backBtn = document.querySelector(".left-arrow");

// getting the home page | blogs container
const homePage = document.querySelector(".homepage");

// functions to get , add and remove blogs from localStorage
const loadBlogs = () => {
  try {
    const stringifiedArray = localStorage.getItem("Blogs");
    return JSON.parse(stringifiedArray);
  } catch (err) {
    return err;
  }
};

const saveBlog = (item) => {
  try {
    let blogsArray = loadBlogs();
    blogsArray = blogsArray ? blogsArray : [];
    console.log(blogsArray);
    blogsArray.push(item);

    localStorage.setItem("Blogs", JSON.stringify(blogsArray));
    window.location.reload();
  } catch (err) {
    return err;
  }
};

const removeBlog = (id) => {
  let blogsArray = loadBlogs();
  blogsArray.splice(id, 1);
  localStorage.setItem("Blogs", JSON.stringify(blogsArray));
  window.location.reload();
};

const defaultBlogs=[
    
    {
    blog_body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,ducimus in. Laboriosam, hic! Placeat aliquid, molestiae esse omnisfacilis earum repellat magnam fugit doloremque? Animi aliquamexercitationem voluptate, voluptatum maiores odit ex consequaturearum dolorem accusamus ullam labore at ratione corrupti expeditaquae quidem corporis, sunt hic fugit. Ab eum illo cupiditate aliasad perspiciatis, quos amet id officiis aliquam deserunt at earumexpedita nobis. Autem dolore ipsa et suscipit pariatur ipsum commodimaxime laboriosam sunt sapiente dolorem omnis ex, nemo modi, iurenecessitatibus laudantium minus deleniti. Nulla odio culpa suscipit.Ea optio eum assumenda illo dolores aliquam, dignissimos totamducimus dolor maiores quod animi? Neque laboriosam exercitanatus qui molestias distinctio animi consectetur rem modi, liberoaliquam eum sint! Lorem ipsum dolor sit amet consectetur,adipisicing elit. Voluptatibus aspernatur in perspiciatis quosaliquid corporis nihil consequuntur earum, omnis, dolores et sitdeleniti libero autem ipsum iste suscipit magni! Maiores nihil",
    descrp: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque voluptatem officia ducimus!",
    imgUrl:
      "https://images.pexels.com/photos/15863044/pexels-photo-15863044/free-photo-of-monitor-screen-with-openai-logo-on-black-background.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "ChatGPT From OpenAI",
  },
    {
    blog_body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,ducimus in. Laboriosam, hic! Placeat aliquid, molestiae esse omnisfacilis earum repellat magnam fugit doloremque? Animi aliquamexercitationem voluptate, voluptatum maiores odit ex consequaturearum dolorem accusamus ullam labore at ratione corrupti expeditaquae quidem corporis, sunt hic fugit. Ab eum illo cupiditate aliasad perspiciatis, quos amet id officiis aliquam deserunt at earumexpedita nobis. Autem dolore ipsa et suscipit pariatur ipsum commodimaxime laboriosam sunt sapiente dolorem omnis ex, nemo modi, iurenecessitatibus laudantium minus deleniti. Nulla odio culpa suscipit.Ea optio eum assumenda illo dolores aliquam, dignissimos totamducimus dolor maiores quod animi? Neque laboriosam exercitanatus qui molestias distinctio animi consectetur rem modi, liberoaliquam eum sint! Lorem ipsum dolor sit amet consectetur,adipisicing elit. Voluptatibus aspernatur in perspiciatis quosaliquid corporis nihil consequuntur earum, omnis, dolores et sitdeleniti libero autem ipsum iste suscipit magni! Maiores nihil",
    descrp: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque voluptatem officia ducimus!",
    imgUrl:
      "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Top 5 Indian Food You Need To Try",
  },
    {
    blog_body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,ducimus in. Laboriosam, hic! Placeat aliquid, molestiae esse omnisfacilis earum repellat magnam fugit doloremque? Animi aliquamexercitationem voluptate, voluptatum maiores odit ex consequaturearum dolorem accusamus ullam labore at ratione corrupti expeditaquae quidem corporis, sunt hic fugit. Ab eum illo cupiditate aliasad perspiciatis, quos amet id officiis aliquam deserunt at earumexpedita nobis. Autem dolore ipsa et suscipit pariatur ipsum commodimaxime laboriosam sunt sapiente dolorem omnis ex, nemo modi, iurenecessitatibus laudantium minus deleniti. Nulla odio culpa suscipit.Ea optio eum assumenda illo dolores aliquam, dignissimos totamducimus dolor maiores quod animi? Neque laboriosam exercitanatus qui molestias distinctio animi consectetur rem modi, liberoaliquam eum sint! Lorem ipsum dolor sit amet consectetur,adipisicing elit. Voluptatibus aspernatur in perspiciatis quosaliquid corporis nihil consequuntur earum, omnis, dolores et sitdeleniti libero autem ipsum iste suscipit magni! Maiores nihil",
    descrp: " Lorem ipsum dolortem officia ducimus!",
    imgUrl:
      "https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Restaurant like chicken biryani-Recipe",
  },

]

// if user clicks plus button open the modal
addBlogBtn.onclick = function () {
  modalContainer.classList.add("modal-container-opened");
};

// if user clicks the cross button close the modal
closeModalBtn.onclick = function () {
  modalContainer.classList.remove("modal-container-opened");
};

// prevent the browsers default behaviour after submitting the form
addBlogForm.onsubmit = function (e) {
  e.preventDefault();
  let imgUrl = imgUrlInput.value;
  let title = titleInput.value;
  let descrp = descrInput.value;
  let blog_body = blogBodyInput.value;

  let blogObject = {
    imgUrl,
    title,
    descrp,
    blog_body,
  };

  saveBlog(blogObject);

  modalContainer.classList.remove("modal-container-opened");
};

async function getBlogs() {
  const loadedBlogs = await loadBlogs() || [];
  const blogs = [ ...defaultBlogs,
    ...loadedBlogs,
  ];

  blogs.forEach((blog) => {
    const blogCard = document.createElement("div");
    blogCard.classList.add("card");
    blogCard.innerHTML = `
        <img
          class="card-img"
          src=${blog.imgUrl}
          alt=${blog.title}
         />
         <p class="title" title="${blog.title}"  >${blog.title.slice(0,30)}...</p>
         <p class="description">
          ${blog.descrp.slice(0,50)}
         </p>
         <button class="read-more" title="${blog.title}"  >Read</button>
        `;
    homePage.appendChild(blogCard);
    const readBtn = blogCard.querySelector(".read-more");
    // for each blog card , if user clicks the read button show them the blog
    readBtn.onclick = function () {
      blogPage.innerHTML = `<div class="header-part">
           <!-- left-part of blog header | title and desc only -->
           <div class="header-part-left">
             <p class="title">${blog.title}</p>
             <p class="description">  ${blog.descrp}</p>
           </div>
           <!-- right-part of blog header | blog-img only -->
           <div class="header-part-right">
             <img class="blog_img" src=${blog.imgUrl}  alt=${blog.title}  />
           </div>
         </div>
         <!-- blog body -->
         <div class="blog">
           <p class="blog-body">
             ${blog.blog_body}
           </p>
         </div>`;
      readBlogPage.classList.add("read-blog-container-opened");
    };
  });
}

getBlogs();

backBtn.onclick = function () {
  readBlogPage.classList.remove("read-blog-container-opened");
};
