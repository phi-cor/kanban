import { ColumnService } from "../../shared/services/column.service";
import { template, inputTemplate, titleTemplate } from "./column-list.component.html";
import { TaskComponent } from "./task/task.component";
import { Column } from "../../shared/models/column.model";
import $ from "jquery";


export class ColumnListComponent {
    constructor() {

        /**
         * @type {ColumnService}
         */

        /**
         * @type {Element}
         */

        /**
         * @type {Column}
         */
        this.service = new ColumnService();
        
        
       

    }



    ini() {
        /** 
         * Initialize the column List
        */
        /** 
         * @returns {null}
        */
        this.service.iniColumns();
        return null;

        ;
    }

    display() {
        /**
         * Display the columns
         */
        /**
         * @returns {null}
         */


        /**
         * actualise le selecteur
         */
        $(".column-list").html(template(this.service.columnList));


        // list.forEach((column) => {
        //     column.taskList.forEach((task, index) => {
        //         const taskcompo = new TaskComponent(task, index);
        //         taskcompo.display();

        //         ;
        //     })
        //         ;
        // })



        this.buttonsSet();
       /* this.renameCol();*/
        return null;
    }

    buttonsSet() {

        /**
        * function that add event to the buttons
        */
        /**
         * @returns {null}
         */

        const add = () => {
            /**
             * function use to set the Add Column Button
             */
            /**
             * @returns {null}
             */
            console.log(this.save);
           
            this.service.post("",()=>{this.display(); console.log("Update");});
            

            return null;
        }


        const selectBnew = document.querySelector(`.bnew-col`);
        selectBnew.addEventListener("click", () => { add();});

        const selectBdel = document.querySelectorAll(`.bdelete-col`);

        selectBdel.forEach((button, index) => {


            const del = () => {
                this.service.delete(index, this.display());
               
                return null;
            }




            button.addEventListener("click", del);
        })


    }
    


    /**
     * Ctrl+K+C/Ctrl+K+U for dummy
     */

    renameCol() {
        /**
         * Rename the clicked column 
         */
        /**
         * @returns {null}
         */
        const selectTitles = document.querySelectorAll(`.column-edit`);
       
        selectTitles.forEach((button) => {
            const f=()=>{this.eventClick(button);}
            button.addEventListener("click",f);

           
        })
        
        return null;

    }

    eventClick(button) {
        /**
         * Transform the title span into an input 
         *
         */
        /**
         * @param {Element} button
         */
        /**
         * @returns {null}
         */
        
        console.log("Hello");
        
        button.innerHTML = inputTemplate;
        return null;
    }


    // toInput(button) {
    //     /**
    //      * Change the title using service and display the new list
    //      */
    //     this.service.renameColumn(this.buttonIndex(button), button.value);
    //     this.display();
    // }


    

    // eventDel(button, eventType, inst) {
    //     /**
    //      * @param {Element} button
    //      */
    //     /**
    //      * @param {String} eventType
    //      */
    //     /**
    //      * @param {function name(params) {}} inst
    //      */
    //     /**
    //      * @return {Object}
    //      */
    //     /**
    //      * Set the listener with ease et return a event object
    //      */

        
    //     button.removeEventListener(eventType, inst);
    //     return event;

    // }

    // buttonIndex(button) {
    //     /**
    //      * @param {Element} button
    //      */
    //     /**
    //      * @return {int}
    //      */
    //     /**
    //      * return the index corresponding to the button
    //      */

    //     const index = parseInt(button.id);
    //     return index;

    // }











}





