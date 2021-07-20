import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NotificationService } from 'src/app/services/notification.service';


@Component({
  selector: 'app-carosol',
  templateUrl: './carosol.component.html',
  styleUrls: ['./carosol.component.css']
})
export class CarosolComponent implements OnInit {

  constructor(private notifyService :NotificationService) { }
title= "carosol"
  ngOnInit(): void {
  }


}
