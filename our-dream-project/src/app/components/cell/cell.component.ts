import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef, ComponentRef} from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {
  // @Input() config: object;
  // @Input() tableInfo: object;
  //
  // @Input() component: any;
  // @Input() props: object;
  // @ViewChild('container', {read: ViewContainerRef}) private container: ViewContainerRef;
  // componentRef: ComponentRef<Component>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    // let factory = this.componentFactoryResolver
    //   .resolveComponentFactory(this.component);
    // this.componentRef = this.container.createComponent(factory);
    // Object.assign(this.componentRef.instance, this.props);
    // this.container.createComponent(this.component);
  }

}
