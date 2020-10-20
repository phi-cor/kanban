import { template } from "./task.component.html"
export class TaskComponent {

    constructor(task, index) {
        /**
         * @param {Task} task
         */
        /**
         * @param {int} index
         */
        /**
        * @type {Task} 
        */
        /**
         * @type {int} 
         */
        /**
       * @type {Element}
       * select will be use to select the place of the tasklist in DOM 
       */
        /** 
         * @type {string}
        */

        this.taskU = task;

        this.colIndex = index;





    }


    display() {


        /**
         * display a task
         */
       
        $(".task-list").html(template(this.taskU, this.colIndex));
    }




    ;
}