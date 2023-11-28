import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LeaveService {
  constructor() { }

  getLeaves() {
    return of([
      {
        id: 1,
        leave_type: "Maternity",
        start_date: "Dec 20, 2023",
        end_date: "Mar 20, 2024",
        created_by: "Grace",
        status: "PENDING",
        last_modified: "Nov 27, 2023",
        status_changed_by: "Derrick"
      },
      {
        id: 2,
        leave_type: "Baecation",
        start_date: "Dec 20, 2023",
        end_date: "Jan 9, 2024",
        created_by: "Suad",
        status: "PENDING",
        last_modified: "Nov 27, 2023",
        status_changed_by: "Xarri"
      }
    ]);
  }
}
