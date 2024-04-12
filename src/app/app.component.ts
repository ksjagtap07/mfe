import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

declare var DDS: any;
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  title = 'Policy';
  @ViewChild('policyTabs') policyTabs: ElementRef = {} as ElementRef;
  textAreaApi: any;
  @ViewChild('notification') notification: ElementRef = {} as ElementRef;
  notificationApi: any;
  @ViewChild('startTime') startTime: ElementRef = {} as ElementRef;
  startTimeApi: any;

  @ViewChild('dropdown') dropdown: ElementRef = {} as ElementRef;
  dropdownApi: any;

  ngAfterViewInit(): void {
    this.textAreaApi = DDS.Tabs(this.policyTabs.nativeElement);
    this.notificationApi = DDS.Switch(this.notification.nativeElement);
    // this.startTimeApi = DDS.TimePicker(this.startTime.nativeElement);
    this.dropdownApi = DDS.Dropdown(this.dropdown.nativeElement);
    this.dropdownApi.selectOption('1');
    this.startTimeApi = DDS.TimePicker(this.startTime.nativeElement, {
      inactive: this.notificationApi.isChecked() ? false : true,
    });
    // api.setTime({ hour: 11, minute: 30, timeFormat: 12, meridiem: 'a.m.' });
  }

  // ngOnDestroy(): void {
  //   this.textAreaApi.dispose();
  //   this.notificationApi.dispose();
  // }
}
