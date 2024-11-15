import { FocusMonitor } from '@angular/cdk/a11y';
import { DatePipe } from '@angular/common';
import { Component, ElementRef, Input, OnInit, Optional, Self, ViewChild } from '@angular/core';
import { FormGroupDirective, NgControl, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldControl } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatMenuTrigger } from '@angular/material/menu';
import { BreakpointService } from '@core/services/breakpoint.service';
import { AbstractMatFormField } from '@shared/helper/abstract-form-field-control';
import { DateRange } from '../date-range.interface';
import { DatepickerMenuComponent } from '../datepicker-menu/datepicker-menu.component';

@Component({
  selector: 'app-datepicker-input',
  templateUrl: './datepicker-input.component.html',
  styleUrls: ['./datepicker-input.component.scss'],
  providers: [
    {
      provide: MatFormFieldControl,
      useExisting: DatepickerInputComponent
    }
  ]
})
export class DatepickerInputComponent extends AbstractMatFormField<Date | DateRange> implements OnInit {
  @ViewChild(MatMenuTrigger) public trigger: MatMenuTrigger;
  @ViewChild(MatInput, { static: false }) private input: MatInput;
  @Input() public dateRange = true;

  public isMobile: boolean;
  public isTablet: boolean;

  constructor(
    @Optional() @Self() ngControl: NgControl,
    @Optional() _parentForm: NgForm,
    @Optional() _parentFormGroup: FormGroupDirective,
    _defaultErrorStateMatcher: ErrorStateMatcher,
    _focusMonitor: FocusMonitor,
    _elementRef: ElementRef,
    private readonly datePipe: DatePipe,
    private readonly dialog: MatDialog,
    private readonly breakpointService: BreakpointService
  ) {
    super('app-custom-text-input-with-icon', ngControl, _parentForm, _parentFormGroup, _defaultErrorStateMatcher, _focusMonitor, _elementRef);
  }

  public ngOnInit(): void {
    this.breakpointService.observe().subscribe(() => {
      this.isMobile = this.breakpointService.isMobile;
      this.isTablet = this.breakpointService.isTablet;
    });
  }

  public onMenuClose(closeValue: Date | DateRange): void {
    if (!(this.isMobile || this.isTablet)) {
      this.value = closeValue;
      this.trigger.closeMenu();
    }
  }

  public focus(): void {
    if (!(this.isMobile || this.isTablet)) {
      this.input.focus();
      this.trigger.openMenu();
    }
  }

  public getPlaceholder(): string {
    return this.dateRange ? 'Select dates' : 'Select date';
  }

  public getDisplayValue(): string {
    if (this.dateRange) {
      const dateRange = this.value as DateRange;
      return dateRange ? `${this.datePipe.transform(dateRange.startDate.toString())} - ${this.datePipe.transform(dateRange.endDate.toString())}` : '';
    }
    return this.datePipe.transform(this.value?.toString());
  }

  public clear(): void {
    this.ngControl?.control?.markAsTouched();
    this.value = null;
  }

  public isDatepickerMenuOpen(): boolean {
    return document.getElementsByClassName('calendar-menu')?.length > 0 || document.getElementsByTagName('app-datepicker-menu')?.length > 0;
  }

  public openDatepickerDialog(): void {
    if (this.isMobile || this.isTablet) {
      this.dialog
        .open(DatepickerMenuComponent, {
          width: 'calc(100vw - 32px)',
          maxWidth: 'calc(100vw - 32px)',
          hasBackdrop: true,
          data: {
            dateRange: this.dateRange,
            actions: true
          }
        })
        .afterClosed()
        .subscribe((value: Date | DateRange) => {
          if ((value && (value as Date) instanceof Date) || (value && Object.keys(value).length > 1 && Object.keys(value).every((key: string) => (value as any)[key]))) {
            this.value = value;
          }
        });
    }
  }
}
