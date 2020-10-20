import { ColumnListComponent } from "./column-list/column-list.component";
import { template } from "./main-board.component.html";

export class MainBoardComponent {

  constructor() {
    this.columnListComponent = new ColumnListComponent;
  }
  display() {
    /**
     * display the mainboard
     * @returns {null}
     */

    template();
    this.columnListComponent.ini();
    /*Initialize the column list */
    this.columnListComponent.display();





  }




  ;
}