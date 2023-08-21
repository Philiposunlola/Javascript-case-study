// object Literals

// const blogs = [
//    {title: 'why Tech and money', likes: 20},
//    {title: 'because i want to leave trenches', likes: 30}
// ];

// console.log(blogs); 


// let user = {
//    name: 'Philip',
//    aga: 20,
//    email: 'philiposun@gmail.com',
//    location: 'lagos',
//    blogs: [
//       {title: 'why Tech and money', likes: 20},
//       {title: 'because i want to leave trenches', likes: 30}
//    ],
//    login: function(){
//       console.log('this user is logged in');
//    },
//    logout: function(){
//       console.log('this user is logged out');
//    },
//    logBlogs: function(){
//       //   console.log(this.blogs);
//       console.log('this user has written the following blogs:');
//       this.blogs.forEach(blog => {
//          console.log(blog.title, blog.likes);
//       })
//    }
// };

//  user.logBlogs();



// user.login();
// user.logout();

// const name = "osunlola";
// name.toUpperCase();


// console.log(user);
// console.log(user.name);

// user.age = 35;
//  console.log(user.age);

//  console.log(user['email']);
//  user['name']  = 'nicholas';
//  console.log(user['name']);

//  console.log(typeof user);



// // Maths objects
// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E );

// const area = 7.7;

// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));

// // random numbers
// const random =  Math.random();
// console.log(random);

// console.log(Math.round(random * 200));



// primitive values

// let scoreOne = 50;
// let scoreTwo = scoreOne;

// console.log(`scoreOne: ${scoreOne}`,` scoreTwo: ${scoreTwo}`);

// scoreOne = 100;
// console.log(`scoreOne: ${scoreOne}`,` scoreTwo: ${scoreTwo}`);


// reference values

// const userOne = {name: 'philip', age: 20};
// const userTwo = userOne;

// console.log(userOne, userTwo);

// userOne.name = 'ope';
// console.log(userOne, userTwo);



//  // JS && the DOM

// const para = document.querySelector('body > div.error');
// console.log(para);

// const paras = document.querySelectorAll('p');
//  const error = document.querySelectorAll('.error');

//  console.log(error);

// paras.forEach(para => {
//    console.log(para);
// });

//  // get the element by ID
//  const title = document.getElementById('page-title');
//  console.log(title);


//  get the element by class name
// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[1]);

 
// get element by tag name\
// const paras = document.getElementsByTagName('p');
// console.log(paras);
// console.log(paras[1]);

   
 
// const para = document.querySelector('p'); 

// console.log(para.innerHTML);
// para.innerHTML = 'philip is a tech bro';

// const paras = document.querySelectorAll('p');

// paras.forEach(para => {
//    console.log(para.innerHTML);
//    para.innerHTML += ' new test';
// });

// const content = document.querySelector('.content');

// console.log(content.innerHTML);    
// content.innerHTML = '<h2>this is an heading 2</h2>';

// const people = ['philip', 'nicholas', 'john']; 

// people.forEach(person => {
//    content.innerHTML += `<p> ${person} </p>`; 
// });

// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://www.detrixstudios.com');
// link.innerHTML = 'The detrixstudios website';

// const mssg = document.querySelector('p');

// console.log(mssg.getAttribute('class'));
// mssg.setAttribute('class', 'success');
// mssg.setAttribute('style', 'color: green;'); 

// const title = document.querySelector('h1');

// title.setAttribute('style', 'margin: 50px;');

// console.log(title.style);
// console.log(title.style.color);

// title.style.margin = "50px";
// title.style.color ="crimson";
// title.style.letterSpacing= "20px";
// title.style.fontSize = "60px";



const content = document.querySelector('p');

// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success')

const page = document.querySelectorAll('p');

page.forEach (p => {
    if (p.textContent.includes('error')) {
        p.classList.add('error');
    };

    if (p.textContent.includes('success')) {
        p.classList.add('success');
    };
});