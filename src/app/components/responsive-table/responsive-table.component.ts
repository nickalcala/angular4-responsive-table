import { Component, Input, ContentChildren, QueryList, ContentChild, TemplateRef } from "@angular/core";
import { ITemplateProvider } from "../shared/template-renderer.component";

@Component({
    selector: 'rtable-cell',
    template: ''
})
export class ResponsiveTableCellComponent implements ITemplateProvider {

    @Input()
    header: string;

    @Input()
    field: string;

    @Input()
    type: string = 'string';

    @ContentChild('template', { read: TemplateRef }) template: TemplateRef<any>;

    getTemplateReference() {
        return this.template;
    }

    ngAfterContentInit(): void {
    }

}

@Component({
    selector: 'rtable',
    templateUrl: 'responsive-table.component.html'
})
export class ResponsiveTableComponent {

    @Input()
    rows: Array<any>

    @ContentChildren(ResponsiveTableCellComponent) columns: QueryList<ResponsiveTableCellComponent>;

    parseDotNotation(data: any, field: string): any {
        if (data && field) {
            if (field.indexOf('.') == -1) {
                return data[field];
            } else {
                let fields: string[] = field.split('.');
                let value = data;
                for (var i = 0, len = fields.length; i < len; ++i) {
                    if (value == null) {
                        return null;
                    }
                    value = value[fields[i]];
                }
                return value;
            }
        } else {
            return null;
        }
    }
}