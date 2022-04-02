let listLength = 9;

function showPage (list, page) {
  // create two variables which will represent the index for the first and last student on the page
   let startIndex = ( page * listLength ) - listLength;
   let endIndex = ( page * listLength ) - 1; 
  // select the element with a class of `student-list` and assign it to a variable
  let studentList = document.querySelector(".student-list");
  // set the innerHTML property of the variable you just created to an empty string
  studentList.innerHTML = '';
  // loop over the length of the `list` parameter
   for (let i = 0; i < list.length; i++){
     
    // inside the loop create a conditional to display the proper students
      if (i >= startIndex && i <= endIndex ) {
        // inside the conditional:
        // create the elements needed to display the student information
         let studentItem = ` <li class="student-item cf">
         <div class="student-details">
           <img class="avatar" src=" ${list[i].picture.large} "alt="Profile Picture">
           <h3>${list[i].name.first} ${list[i].name.last}</h3>
           <span class="email">${list[i].email}</span>
         </div>
         <div class="joined-details">
           <span class="date">${list[i].registered.date}</span>
         </div>
       </li>`;
        // insert the above elements
       studentList.insertAdjacentHTML("beforeend",studentItem);  
      }
  
  }
}
function addPagination(list) {
  // create a variable to calculate the number of pages needed
  let numOfPages = Math.ceil(list.length / listLength);

  // select the element with a class of `link-list` and assign it to a variable
  let linkList = document.querySelector(".link-list");

  // set the innerHTML property of the variable you just created to an empty string
  linkList.innerHTML = '';
  // loop over the number of pages needed
    for (let i = 1; i <= numOfPages; i++) {
    // create the elements needed to display the pagination button
      let btn =` <li>
      <button type="button">${i}</button>
    </li>`;
    // insert the above elements
    linkList.insertAdjacentHTML("beforeend",btn);
    // give the first pagination button a class of "active"
      let selectBtn = document.querySelector("button");
      selectBtn.className = 'active';
      // create an event listener on the `link-list` element
    linkList.addEventListener("click", (e) => {
      // if the click target is a button:
      if (e.target.name = "BUTTON"){
       let activeBtn = document.querySelector(".active");
       // remove the "active" class from the previous button
       activeBtn.className = '';
       // add the active class to the clicked button
       e.target.className = 'active';
       // call the showPage function passing the `list` parameter and page to display as arguments
       showPage(list,e.target.textContent); 
      }
    });
  }
}
// Call functions
showPage(data,1);
addPagination(data);
