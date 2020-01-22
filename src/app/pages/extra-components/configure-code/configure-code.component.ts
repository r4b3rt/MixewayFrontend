import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {ShowProjectService} from '../../../@core/service/ShowProjectService';
import {Toast} from '../../../@core/utils/Toast';
import {ExtraConstants} from '../../../@core/constants/ExtraConstants';
import {FormBuilder} from '@angular/forms';
import {NbDialogService} from '@nebular/theme';
import {DTrackProject} from '../../../@core/Model/DTrackProject';
import {ViewCell} from 'ng2-smart-table';

@Component({
  selector: 'ngx-configure-code',
  templateUrl: './configure-code.component.html',
  styleUrls: ['./configure-code.component.scss'],
})
export class ConfigureCodeComponent implements OnInit, ViewCell {
    value: string;
  @Input() rowData: any;
  @Input() dTrackProjects: DTrackProject[];
  @Output() refresh: EventEmitter<any> = new EventEmitter();
  constants: ExtraConstants = new ExtraConstants();
  codeProjectForm;
  constructor(private dialogService: NbDialogService, private showProjectService: ShowProjectService,
              private toast: Toast, private formBuilder: FormBuilder) {
    this.codeProjectForm = this.formBuilder.group({
      dTrackUuid: '',
    });
  }

  ngOnInit() {
    this.codeProjectForm.patchValue({
      dTrackUuid: this.rowData.dTrackUuid,
    });
    this.dTrackProjects = <DTrackProject[]><unknown>this.value;
  }
  playOnceScan() {
    return this.showProjectService.runCodeScanForSingle(this.rowData.id).subscribe(() => {
        this.toast.showToast('success', this.constants.SUCCESS,
          this.constants.OPERATION_RUNONCE);
          this.rowData.running = true;
        this.refresh.emit(null);
      },
      () => {
        this.toast.showToast('danger', this.constants.FAILURE,
          this.constants.FAILURE_TEXT);
      });
  }
  deleteWebApp() {
    return this.showProjectService.deleteCodeProject(this.rowData.id).subscribe(() => {
        this.toast.showToast('success', this.constants.SUCCESS,
          this.constants.CODE_OPERATION_CODE_DELETE);
        this.refresh.emit(null);
      },
      () => {
        this.toast.showToast('danger', this.constants.FAILURE,
          this.constants.FAILURE_TEXT);
      });
  }



  saveCodeProject(value: any, ref) {
    return this.showProjectService.editCodeProject(this.rowData.id, value).subscribe(() => {
        this.toast.showToast('success', this.constants.SUCCESS,
          this.constants.CODE_OPERATION_CODE_DELETE);
        ref.close();
      },
      () => {
        this.toast.showToast('danger', this.constants.FAILURE,
          this.constants.FAILURE_TEXT);
      });
  }
  openDialog(dialog: TemplateRef<any>) {
    this.dialogService.open(
      dialog,
      { context: 'this is some additional data passed to dialog' });
  }

  createDTrack(ref) {
    return this.showProjectService.createDepTrackProject(this.rowData.id).subscribe(() => {
        this.toast.showToast('success', this.constants.SUCCESS,
          this.constants.CODE_OPERATION_CODE_DELETE);
        ref.close();
      },
      () => {
        this.toast.showToast('danger', this.constants.FAILURE,
          this.constants.FAILURE_TEXT);
      });
  }
}
