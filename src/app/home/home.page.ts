import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isOpen: boolean = false;
  tache: any[] = [];
  newTache: string = "";

  constructor() {}

  onOpen(){
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
  }

  onCheck(e: any, i: number){
    this.tache[i].isCheck = e.detail.checked;
  }

  onSupprTask(i: number){
    this.tache.splice(i, 1)
  }

  onAjouter(){
    var task = {
      isCheck : false,
      nom : this.newTache,
    }
  this.tache.push(task);
  this.newTache= "";
  this.isOpen = false;
  }

}
