# AngularMonorepo

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace has been generated by [Nx, Smart Monorepos · Fast CI.](https://nx.dev)** ✨


## Start the app

To start the development server run `nx serve monorepo-example`. Open your browser and navigate to http://localhost:4200/. 

## How does it work?
To retrieve a list of all repositories for a specific user, get the user github repo url. 

https://api.github.com/users/[username]/repos

eg: https://api.github.com/users/schacon/repos


## Test code

To run the test suite, run ```nx test```

## i18n
Translate files are located in assets/i18n/


## Ready to deploy?

Just run `nx build monorepo-example` to build the application. The build artifacts will be stored in the `dist/` directory, ready to be deployed.

## PWA / Offline capacibility
After building, check offline first capability with 
```npx http-server -p 8080 -c-1 dist/apps/angular-monorepo```

## Tool used
- angular material
- @angular/pwa
- ngx translate + ngx translate testing


