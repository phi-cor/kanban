/*CRUD */
export const template = (columnList) => {

  /** 
   * template display Columns 
  */
  /** 
   * @returns {String} toDisplay
  */
  let toDisplay = `<div class="row">`;

  columnList.forEach((column, index) => {

    toDisplay +=
      ` <div class="col s2">
          <div class="card blue-grey darken-1 column-card column-edit">
          
            <div class="card-content white-text">
              <span class="card-title">${column.title}</span>
              
            </div>
            <div class="task-list">
            </div>
            <div class="card-action">
              <a class="bnew-task" href="#">New Task</a> 
              <a class="bdelete-col" href="#">Delete</a>
            </div>
          </div>
        </div>
      
        `});

  return toDisplay +
    ` <a class="bnew-col">
        <i class="material-icons">add_circle</i></a>
        </div>`;

}
export const inputTemplate=()=>{
const toDisplay=`
    <div class="card-content edit">
      <span class="card-title"><h3>Sign up to find out more about Two Lanterns.</h3></span>
        <form class="container">
          <div class = "row">
            <div class="input-field col m6">
              <input id="email" type="email" class="validate">
              <label for="email">Email</label>
            </div>
            <div class="input-field col m6">
              <button class="btn waves-effect waves-light" type="submit" name="action">
                Submit <i class="material-icons right">send</i>
              </button>
            </div>
          </div>
        </form>
    </div>
  
<!-- End of Sign Up Card row -->`;
return toDisplay;
}

