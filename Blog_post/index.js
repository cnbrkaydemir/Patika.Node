// Inıtialize the posts array
const posts=[
{title:"Hello Everyone", desc:"Long time no see"},
{title:"My new career path", desc:"I am starting a new position"},
{title:"I am very sorry",desc:"Today the greatest of all time have passed !"}
];

const printPosts=(()=>{
    posts.forEach((post)=>console.log(`Title: ${post.title} , Description: ${post.desc}`))
});


const newPost=(post)=>{
    return new Promise((resolve,reject)=>{
        if(post){
            posts.push(post);
            resolve(post);
        }
        else{
            reject("Not a compatible post");
        }
    }
)};



const getPosts = async () => {
    try {
      let post = await newPost({
        title: "Epl week 3",
        desc: "Arsenal is at the top of the table",
      });
      post && printPosts();
    } catch (error) {
      console.log("ERROR:", error);
    }
  };

  getPosts();





