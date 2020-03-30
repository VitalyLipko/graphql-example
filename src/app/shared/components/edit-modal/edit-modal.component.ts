import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';

import { Note } from 'src/app/core/services/generated/graphql-example';
import { IntersectionStatus } from '../../operators/operators';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};

interface Option {
  label: string;
  value: string;
}

@Component({
  selector: 'gql-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditModalComponent implements OnInit {
  note: Note;
  type: string;
  noteFormGroup = new FormGroup({
    title: new FormControl(''),
    icon: new FormControl(''),
    text: new FormControl(''),
  });
  iconsOptions: Option[] = [];
  searchResultList: Option[] = [];
  visibilityStatus: { [key: number]: IntersectionStatus } = {};
  intersectionStatus = IntersectionStatus;

  constructor() {
    this.prepairIconsForSelector();
    this.searchResultList = this.iconsOptions;
  }

  ngOnInit() {
    if (this.type === 'edit') {
      this.noteFormGroup.addControl('id', new FormControl());
      this.noteFormGroup.patchValue(this.note);
    }
  }

  onVisibilityChanged(index: number, status: IntersectionStatus) {
    this.visibilityStatus[index] = status;
  }

  trackByFn(index: number, option: Option): string | number {
    return option.value || index;
  }

  onSearch(value: string) {
    if (value && value.length > 1) {
      this.searchResultList = this.iconsOptions.filter(
        item => item.label.indexOf(value) > -1,
      );
    } else if (!value.length) {
      this.searchResultList = this.iconsOptions;
    }
  }

  private prepairIconsForSelector() {
    Object.keys(antDesignIcons).forEach(item => {
      const icon = antDesignIcons[item];
      if (icon.theme === 'outline') {
        this.iconsOptions.push({ label: icon.name, value: icon.name });
      }
    });
  }
}
