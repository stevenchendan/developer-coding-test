import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../models/user';
import { Pathway } from '../models/pathway';
import { Questpath } from '../models/pathway';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent implements OnInit {
  userInfo: User[] = [];
  pathway: Pathway[] = [];
  constructor(private dataService: DataService, private http: HttpClient) { }

  ngOnInit() {
    this.getUsers();
    this.getPathway();
  }

  getUsers(): void {
    this.dataService.getData('./assets/api/users.json').subscribe((cards) => {
      for (const key in cards) {
        if (cards.hasOwnProperty(key)) {
          const user = new User(cards[key]); // will refactor later.
          this.userInfo.push(user);
        }
      }
    });
  }



  getPathway(): void {
    this.dataService.getData('./assets/api/quest_pathways.json').subscribe((path) => {
      for (const key in path) {
        if (path.hasOwnProperty(key)) {
          const pathway = new Pathway();
          pathway.userId = path[key].user_id;
          pathway.questPaths = [];
          for (const i in path[key].quest_paths) {
            if (path[key].quest_paths.hasOwnProperty(i)) {
              const quest = new Questpath(path[key].quest_paths[i]);
              pathway.questPaths.push(quest);
            }
          }
          this.pathway.push(pathway);
        }
      }
    });
  }
}
