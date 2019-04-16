import {Component, Input, OnInit, ComponentFactoryResolver, Type,  ViewChild, ViewContainerRef} from '@angular/core';
import {RoleSelectComponent} from '../role-select/role-select.component';
import {TimeInputComponent} from '../time-input/time-input.component';
import {ProjectSelectComponent} from '../project-select/project-select.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  config = {
    fields: {
      projectSelect: {
        componentName: '',
        class: ProjectSelectComponent,
        templatePath: '',
        validation: ''
      },
      roleSelect: {
        componentName: '',
        class: RoleSelectComponent,
        templatePath: '',
        validation: ''
      },
      timeInp: {
        componentName: '',
        class: TimeInputComponent,
        templatePath: '',
        validation: ''
      },
      deleteRow: {
        componentName: '',
        class: '',
        templatePath: '',
        validation: ''
      }
    }
  };
  // @Input()
  //запилить конфиг для кажой из страниц. при переходе на новую страницу выхватывается значение из конфига и
  //рендерится наша таблица. тогда не понадобится бэк часть.
  tableInfo = {
    name: 'Projects',
    columns: ['projectSelect', 'roleSelect', 'timeInp']
  };
  toRender: Array<object> = [];
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.tableInfo.columns.forEach((item) => {
      // const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.config.fields[item].class);
      this.toRender.push(this.config.fields[item].class);
    });
  }
}
// const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentClass);
// const component = this.container.createComponent(componentFactory);
