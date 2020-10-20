import { Column } from "../models/column.model";
import { Task } from "../models/task.model";
import $ from "jquery";


export class ColumnService {

    constructor() {

        /**
         * @type {Array<Column>}
         */
        this.columnList = [];

    }


    // addTask(taskContent, taskColor, index) {
    //     /**
    //      * Add a task to the index column   
    //      */
    //     /** 
    //      * @param {taskContent} taskContent
    //     */
    //     /** 
    //      * @param {taskColor} taskColor
    //     */
    //     /** 
    //      * @param {int} index
    //      * index of the column
    //     */
    //     const task = new Task;
    //     task.content = taskContent;
    //     task.color = taskColor;
    //     const col = this.columnList[index];
    //     col.taskList.push(task);
    //     return null;
    // }




    post(titleCol,success) {

        /** 
         * Add a column to the column List 
        */

        /** 
         * @param {String} titleCol
        */
        /**
         * @param {Function} success
         */
        /** 
         * @returns {null}
        */
        const col = new Column;
        col.title = titleCol;
        this.columnList.push(col);
        this.save(success);

        return null;

    }

    iniColumns() {

        /** 
         * Add three default columns 
         * 
        /**
         * @param {success}
         */
         /**
         * @returns {null}
         */
        
        if (this.columnList.length == 0) {
            this.post("To do",()=>{});
            this.post("Doing",()=>{});
            this.post("Done",()=>{});
            
        }
        
        return null;

    }



    delete(index,success) {
        /**
         * @param {int}
         */
        /**
         * @returns {null}
         */
        let list = this.columnList;
        list.splice(index, 1);
        this.columnList = list;
        this.save().then(success);
        return null;

    }

    renameColumn(index, newTitle) {
        /**
         * Rename the title of a column
         */
        /**
         * @param {int} index
         */
        /**
         * @param {String} newTitle
         */
        /**
         * @returns {null}
         */

        this.columnList[index].title = newTitle;
        return null;


    }

    save(success) {
        /**
         * to save the list on the json bin,return a promess object, 
         */
        /**
         * @returns {object}
         */
        const key = "$2b$10$oxVfiyOXy7OueauQsa5I1ufcVa0qzfZ2SwmwO5Emyh1rLlilMpGpm";
        const url = "https://api.jsonbin.io/b/5f48f4c9514ec5112d102b47";
        const json=JSON.stringify(this.columnList);
        console.log(json);
        return $.ajax({
            url:url,
            method:"PUT",
            headers:{"secret-key":key},
            data:json
        }
      
        ).then(() => {
            success;
        }).catch((error) => {
            console.log(error);
        });
    }
    // get() {
    //     /**
    //      * @returns {object}
    //      */
    //     /**
    //      * to load the list
    //      */
    //     const key = "$2b$10$oxVfiyOXy7OueauQsa5I1ufcVa0qzfZ2SwmwO5Emyh1rLlilMpGpm";
    //     const url = "https://api.jsonbin.io/b/5f48f4c9514ec5112d102b47";
    //     return $.ajax({
    //         url:url,
    //         method:"GET",
    //         headers:{"secret-key":key},
    // //         dataType:{""}
           
            
    // //     }
      
    //     )


    // }


}