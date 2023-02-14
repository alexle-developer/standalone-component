# Standalone Component

source: <https://www.telerik.com/blogs/angular-14-introducing-standalone-components>

## How To Convert Existing Component into a Standalone Commponent

You can also convert an existing component into a standalone component by setting its standalone property to true.

You must keep these three points in mind while converting a module-based component to a standalone one:

1. Set the standalone property to true.
2. Remove it from the declaration array of the module of which it was a part.
3. Use imports array to add dependencies.

## Dependencies in Standalone Component

A standalone component may depend on other members, pipes and directives. These dependencies can be divided into two parts:

1. Standalone
2. Part of a module

Both types of dependencies can be added to a standalone component using the imports array of the @Component decorator. For example, ReactiveFormsModule can be added to the LoginComponent by passing it to the imports array as shown in the below code listing:

```javascript
    @Component({
      selector: 'app-login',
      standalone: true,
      imports: [CommonModule, ReactiveFormsModule],
      templateUrl: './login.component.html',
      styleUrls: ['./login.component.css']
    })

    export class LoginComponent implements OnInit {
```

## Using a Standalone Component

You can use a standalone component, directive or pipe in either of two ways:

1. Inside another standalone component
2. Inside a module

For both the options, pass it inside the imports array, and also keep in mind that you don’t pass standalone components in the **declaration** array of the modules.

So to use it inside AppComponent, which is part of AppModule, you can pass it to the imports array as shown below:

```javascript
      @NgModule({
        declarations: [
          AppComponent
        ],
        imports: [
          BrowserModule,
          AppRoutingModule,
          LoginComponent // add here
        ],
        providers: [],
        bootstrap: [AppComponent]
      })

      export class AppModule { }
```

## Bootstrapping Standalone Component

Angular 14 allows you to bootstrap the whole application using a standalone component. To bootstrap an application using a standalone component, follow the steps discussed below.

In the **main.ts**, import the standalone component to be bootstrapped and bootstrapapplication function as shown below:

```javascript
      import {bootstrapApplication} from '@angular/platform-browser';
      import { ProductComponent } from './app/product/product.component';
```

After that, call **bootstrapapplication** and pass the component in it as shown below:

```javascript
      bootstrapApplication(ProductComponent,{
        providers:[]
      });
```

Next, on the index.html, replace app-root with your component.

```html
      <body>
        <!-- <app-root></app-root> -->
        <app-product></app-product>
      </body>
```
