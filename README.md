# AngularPagination

This project contains the source code for an Angular library with a pagination table component.

## How to use

Install the package from the public npm package repository:

```
npm install
```

Import the module into your Angular application module. Example:

```javascript
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        PaginationTableModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

Replace your current table element with the table pagination component:

```html
<lib-pagination-table
    [data]="[{title: 'Item 1', id: 1}, {title: 'Item 2', id: 2}]"
    [headers]="[{key: 'title', title: 'Title'}, {key: 'id', title: 'ID'}]"
    [perPage]="1"
    tableClasses="table-style"
    (clickRow)="handleClickedRow($event)">
</lib-pagination-table>
```
