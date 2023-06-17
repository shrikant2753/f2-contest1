/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr
    .filter(function (value) {
      return value.profession === "developer";
    })
    .map(function (developer) {
      console.log(developer);
    });
  
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(function(value){
    value.profession==="developer" && console.log(value);
  })
}

function addData() {
  //Write your code here, just console.log
  const newEmployee = {
    id: 4,
    name: "shrikant",
    age: "23",
    profession: "developer",
  };

  arr.push(newEmployee);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter(function (value) {
    return value.profession !== "admin";
  });

  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  const newArray = [
    { id: 4, name: "rohit", age: "23", profession: "developer" },
    { id: 5, name: "pragat", age: "23", profession: "admin" },
  ];

  const concatenatedArray = arr.concat(newArray);
  console.log(concatenatedArray);
}
