import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
    ResponsiveTableComponent,
    ResponsiveTableCellComponent
} from './components/responsive-table/responsive-table.component';
import { TemplateRendererComponent } from './components/shared/template-renderer.component';
import {
    TestTableComponent,
    TestTableCellComponent,
    TestTableRowComponent,
    TestTableHeadComponent,
    TestTableBodyComponent
} from './components/responsive-table/test-table.component';

@NgModule({
    declarations: [
        AppComponent,
        ResponsiveTableComponent,
        ResponsiveTableCellComponent,
        TemplateRendererComponent,

        TestTableComponent,
        TestTableBodyComponent,
        TestTableCellComponent,
        TestTableRowComponent,
        TestTableHeadComponent,
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
