import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeavesComponent } from './main-features/leaves/leaves.component.ts';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  leaves =
      [
        { id: 1,
          name: 'Maternity Leave',
          start_date: "Dec 20, 2023",
          end_date:"Mar 20, 2024",
          created_by:"Grace",
          status: "PENDING",
          last_modified: 'Nov 27, 2023',
          status_changed_by:"Derrick"
       },
       { id: 2,
        name: 'Baecation',
        start_date: "Dec 20, 2023",
        end_date:"Jan 09, 2024",
        created_by:"Suad",
        status: "PENDING",
        last_modified: 'Nov 27, 2023',
        status_changed_by:"Xarri"
     }
      ]

}
