import { Component, OnInit } from '@angular/core';
import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  constructor(
    private teamService: TeamService
  ) { }

  // members = []
    members: any;
  ngOnInit(): void {
    this.members = this.teamService.getMembers();

    // this.teamService.getMembers()
    //   .subscribe(
    //     members => this.members = members
    //   )
    // console.log(this.members);
  }


}
