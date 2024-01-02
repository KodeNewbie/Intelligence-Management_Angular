import { Component , OnInit} from '@angular/core';
import { MissionService } from 'src/app/Services/Mission/mission.service';

@Component({
  selector: 'app-mission-list',
  templateUrl: './mission-list.component.html',
  styleUrls: ['./mission-list.component.css']
})

export class MissionListComponent implements OnInit{

  mission: any = {}; 

  constructor(private missionService: MissionService) {}

  processAddMissionForm() {
    console.log(this.mission); 
    this.missionService.addMission(this.mission).subscribe(
      (response) => {
        console.log(response);
        alert('Mission added!');
      },
      (error) => {
        console.error(error); // Add error handling
        alert('Error adding mission!');
      }
    );
}
  
  missions: any[] = [];

  ngOnInit(): void {
   this.missionService.getAllMissions().subscribe(
    (response)=>{  //An array of json objects
      this.missions=response;
      console.log(response);
    }
   );
  }

  delete(id:any)
  {
   this.missionService.deleteMission(id).subscribe(
    (response)=>{
      alert('Mission deleted!');
      this.ngOnInit();
    }
   );
  } 
}
