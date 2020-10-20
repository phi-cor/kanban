
export const template = (task, index) => {

  /** 
   * display Tasks of the column  
  */
  /** 
   * @param {Task} task
  */
  /** 
   * @param {int} index
   * @returns {string} toDisplay
  */
  let toDisplay =
    `<div class="row">
        <div class="col s12">
          <div class="card ${task.color} task-card ${index}">
            <div class="card-content">
              <span class="card-title">${task.content}</span>
            </div>
            <div class="card-action orange-text">
              <a href="#">Delete</a>
            </div>
          </div>
        </div>
      </div>
        `;
  return toDisplay;




}





