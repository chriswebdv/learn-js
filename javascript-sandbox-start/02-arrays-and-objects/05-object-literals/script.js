let personObj = {
  name: "Tanko",
  age: 45,
  country: "Honduras",
};

let logData = () => {
  return (
    personObj.name +
    " is " +
    personObj.age +
    " years old and lives in " +
    personObj.country
  );
};

console.log(logData());
