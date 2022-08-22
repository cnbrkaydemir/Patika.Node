const fs= require("fs");

const create=()=>{
    fs.appendFile("employees.json",'[{"name": "Employee 1 Name", "salary": 2000}]', (err)=>{
        if(err) console.log(err);
    })
console.log("Everything went good");
}

const read=()=>{
    fs.readFile("employee.json","utf8",(err,data)=>{
        if(err){
            console.log(err);
        }
        console.log(JSON.parse(data));
        console.log("Everything cool as you see.");
    })
}

const update=()=>{
    fs.readFile("employees.json", "utf8", (err, data) => {
        if (err) throw err;
        let arr = JSON.parse(data);
        arr.push({ name: "Employee3  Name", salary: 51000 });
        fs.writeFile("employees.json", JSON.stringify(arr), "utf8", (error) => {
          if (error) throw error;
          console.log("Update was succesfull");
        });
})
}

const deleteRecord=()=>{
    fs.unlink("employees.json", (err) => {
        if (err) throw err;
        console.log("Deleted !");
      });
}



deleteRecord();