'use strict'

console.log('js Loaded')

// Globals
const jsonFile = 'data/page1.json';
const employee_array = [];



// ==== Constructor Functions ===== //

const Employee = function (name, email){
  this.name = name;
  // this.email = email;

};

// Prototype Function



Employee.prototype.renderWithHandleBars = function () {
  let employeeHtml = $('my-template').html();
  const renderEmployees = Handlebars.compile(employeeHtml);
  const data = renderEmployees(this);
  $('#employeeList').append(data);
};



const renderPageOne = () => {
  console.log('rendering results')
  employee_array.forEach(employee => {
    console.log(employee)
    // employee.renderWithHandleBars();
  })
}





//========= END CONSTRUCTOR DATA =============



// ======== Main Functionality =========


// GET JSON DATA


const getJsonData = (file) => {
  console.log('fetching .json File')
  $.get(file).then(data => {

    const employees = data.employee_list;
    const sortedEmployees = sortByName(employees);
    
    sortedEmployees.forEach(person => {
      employee_array.push(person.name)
      return employee_array;
    })
    console.log('data loaded.')
  })

  return employee_array
}

// ==============




// Display Toggle
$(document).ready(function(){
  $("#hide").click(function(){
    $("#directions").toggle();
  });
});



$('#results').on('click', function (){
  console.log('click!')
  renderPageOne()
}) 

// /Display Toggle


//Helper Functions
const sortByName = (arr) => {
  arr.sort((a, b) => {
      if(a.name > b.name){
          return 1;
      }else if (a.name < b.name){
          return -1
      }else {
          return 0
      }
  })
  return arr;
};




// =============//


// Function Calls

getJsonData(jsonFile)
// renderPageOne()
