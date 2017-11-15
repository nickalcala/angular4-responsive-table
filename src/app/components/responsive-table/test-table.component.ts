import {
    Component,
    Input
} from '@angular/core';

@Component({
    selector: 'test-table-head',
    template: '<div class="tbl-head"><ng-content></ng-content></div>'
})
export class TestTableHeadComponent {
}

@Component({
    selector: 'test-table-cell',
    template: '<div class="tbl-cell"><ng-content></ng-content></div>'
})
export class TestTableCellComponent {
}

@Component({
    selector: 'test-table-row',
    template: '<div class="tbl-row"><ng-content></ng-content></div>'
})
export class TestTableRowComponent {
}

@Component({
    selector: 'test-table-body',
    template: '<div class="tbl-body"><ng-content></ng-content></div>'
})
export class TestTableBodyComponent {
}

@Component({
    selector: 'test-table',
    template: '<div class="tbl-container"><ng-content></ng-content></div>'
})
export class TestTableComponent {
}