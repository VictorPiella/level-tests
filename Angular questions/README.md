## 1. Given the following constructor for a component: 
```
constructor(private myService: MyService) 
```
Which of the following is equivalent for the purposes of dependency injection? 
- A. constructor(@Inject(MyService) private myService) 
- B. constructor(private myService: new MyService()) 
- C. constructor(private myService: MyService()) -
- D. constructor(@Inject() private myService) 

<details>
    <summary>Click to see the answer</summary>
    ✅ Z. Result
</details>

## 2. The following code is likely to have unintended consequences. How does this template property affect the OrdersCompont template? 
```
@Component({ template: './orders.component.html' }) 
```
- A. The template will be found in the file "./orders.component.html" 
- B. The template will contain the text "./orders.component.html" 
- C. The template is invalid and produces an error D. The template specifies an invalid file naming convention and produces an error

<details>
    <summary>Click to see the answer</summary>
    ✅ Z. Result
</details>

## 3. In which section of the @NgModule config must you add any custom pipes? 
- A. imports 
- B. declarations 
- C. providers 
- D. pipes 
- E. schemas

<details>
    <summary>Click to see the answer</summary>
    ✅ Z. Result
</details>

## 4. The purpose of the imports array of an Angular module is to define the set of: 
- A. modules, components, directives, and pipes needed by the templates of this module. 
- B. components, directives, and pipes needed by the templates of this module. 
- C. services that are created and available for dependency injection. 
- D. Angular modules whose exported directives and pipes are then available to the templates of this module. 

<details>
    <summary>Click to see the answer</summary>
    ✅ Z. Result
</details>

## 5. When can you omit the brackets when using property binding? 
- A. The property calls a method: ```<img title='getTitle()'>```
- B. The property accepts a string and that string is a fixed value: ```<img title='My Hero'>```
- C. The property is updated by the user: ```<input ngModel='listFilter' /> ```
- D. The property is assigned to a class property: ```<img title='heroTitle'>```

<details>
    <summary>Click to see the answer</summary>
    ✅ Z. Result
</details>

## 6. What is one of the benefits exclusive of end to end testing? 
- A. End to end tests run faster 
- B. End to end tests run in a live environment 
- C. End to end tests can more easily test multiple scenarios 
- D. End to end tests are less brittle

<details>
    <summary>Click to see the answer</summary>
    ✅ Z. Result
</details>

## 7. What is the correct syntax for using FormBuilder?
- A. this.heroForm = new FormGroup({ heroName: new FormControl(), identityName: new FormControl() });
- B. constructor(private fb: FormBuilder) this.heroForm = this.fb({ heroName: '', identityName: '' });
- C. constructor(private fb: FormBuilder) this.heroForm = this.fb.group({ heroName: '', identityName: '' });
- D. this.heroForm = new FormBuilder({ heroName: new FormControl(), identityName: new FormControl() });

<details>
    <summary>Click to see the answer</summary>
    ✅ Z. Result
</details>

## 8. What effect does this line of code have in your app? import 'rxjs/Rx'; 
- A. Imports all of RxJS, causing your bundle sizes to be larger than you may need 
- B. Causes and error because it is an invalid statement 
- C. Imports only what is needed from RxJS 
- D. Imports the Rx function from RxJS

<details>
    <summary>Click to see the answer</summary>
    ✅ Z. Result
</details>

## 9. Which of the following will create a local eventEmitter named "handleSelected" and expose an event named "selected"? 
- A. @Output() selected = new EventEmitter('handleSelected') 
- B. @Output('selected') handleSelected = new EventEmitter() 
- C. @Output() handleSelected = new EventEmitter('selected') 
- D. @Output('handleSelected') selected = new EventEmitter()

<details>
    <summary>Click to see the answer</summary>
    ✅ Z. Result
</details>

## 10. Which of the following allows a custom directive to listen to the click event on the DOM node on which the directive is added? 
- A. ElementRef.click() 
- B. @EventListener('click') 
- C. ElementRef.onClick() 
- D. @HostListener('click')

<details>
    <summary>Click to see the answer</summary>
    ✅ Z. Result
</details>

## 11. The useFactory provider option is useful in which scenario? 
- A. When you want a non-singleton service 
- B. When you need a function to construct the service 
- C. When you want to defer service creation 
- D. When you need to access the DOM inside of a service

<details>
    <summary>Click to see the answer</summary>
    ✅ Z. Result
</details>

## 12. Why is unidirectional data flow important? 
- A. For better performance while maintaining a consistent data state. 
- B. For communication between parent and child components. 
- C. To support immutable data structures. 
- D. To achieve two-way data binding.

<details>
    <summary>Click to see the answer</summary>
    ✅ Z. Result
</details>

## 13. What selectors would force this style from the host and down through the child component tree into all child component views? :host h3 { background-color: yellow; }
- A. :host /down/ h3 { background-color: yellow; }
- B. :host /deep/ h3 { background-color: yellow }
- C. h3 { background-color: yellow; }
- D. :host h3 { background-color: yellow !important; } 

<details>
    <summary>Click to see the answer</summary>
    ✅ Z. Result
</details>

## 14. What pseudo-selector or selector helps apply a style to the element that contains the component? 
- A. :contains 
- B. :container 
- C. /deep/ 
- D. :begin 
- E. :host 

<details>
    <summary>Click to see the answer</summary>
    ✅ Z. Result
</details>

## 15. What is one common way to implement a route guard? 
- A. Add the guard logic to the associated navigate method 
- B. Build a service and implement the interface for the desired guard 
- C. Build a component and implement the interface for the desired guard 
- D. Add the guard logic to the routerLink directive

<details>
    <summary>Click to see the answer</summary>
    ✅ Z. Result
</details>

## 16. The code below reads the id parameter from the route one time. What is the code to watch for changes to the parameter? constructor(private route: ActivatedRoute) { } ngOnInit(): void { let id = this.route.snapshot.params['id']; }
- A. ngOnInit(): void { this.route.snapshot.subscribe(params => let id = params['id']; }; )
- B. ngOnInit(): void { this.route.params.subscribe(params => let id = params['id']; }; )
- C. ngOnInit(): void { this.route.subscribe(params => let id = params['id']; }; )
- D. ngOnInit(): void { this.route.snapshot.params.subscribe(params => let id = params['id']; }; )

<details>
    <summary>Click to see the answer</summary>
    ✅ Z. Result
</details>

## 17. What can we do to improve the speed when creating a new Angular app when your internet connection is extremely slow? 
- A. ng new my-dream-app --skip-install 
- B. ng new my-dream-app --specs false 
- C. ng new my-dream-app --offline 
- D. ng new my-dream-app --npm false 
- E. ng new my-dream-app

<details>
    <summary>Click to see the answer</summary>
    ✅ Z. Result
</details>

## 18. Which Angular CLI command executes all end to end tests in your application? 
- A. ng e2e 
- B. ng e 
- C. ng test --e 
- D. ng test --e2e

<details>
    <summary>Click to see the answer</summary>
    ✅ Z. Result
</details>
