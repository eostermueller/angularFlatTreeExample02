Simple angular 13 project where VSCode debugging is NOT working.  In this other similar project, vscode debugging is working just fine:  https://github.com/eostermueller/angularFlatTreeExample01

# Setup
Steps to setup this project:

    git clone https://github.com/eostermueller/angularFlatTreeExample02
    npm install
    code .  #to start vscode
    
Then in vscode, open app.component.ts and place a breakpoint on the line with `title = 'tree13c';`:

    import { Component } from '@angular/core';
    
    @Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.css']
    })
    export class AppComponent {
      title = 'tree13c';
    }
# Launch and show that VSCode Debug is not working

To launch and this project and see that debugging is NOT working:

* In VSCode, launch "ng serve" on the debug menu.
* the project compiles, 
* the browser launches 
* ...and then nothing happens.  Was expecting control to returns to vscode and 'break' on the line with `title = 'tree13c';`

