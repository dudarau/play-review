## Node-Js Best practices

 based on [Best practices](https://github.com/i0natan/nodebestpractices)

 1 . Structure your solution by components
- Good: Structure your solution by self-contained components
- Bad: Group your files by technical role

 2 . Config
Hierarchical config helps to find entries and maintain huge config files.

###### libraries
[config](https://www.npmjs.com/package/config)
[nconf](https://github.com/indexzero/nconf)
[rc](https://github.com/dominictarr/rc)

 3 . Separate Express 'app' and 'server'
 
 4 . Wrap common utilities as npm packages
 [private modules](https://docs.npmjs.com/private-modules/intro)
 [npm Enterprise with Nexus](https://npme.npmjs.com/docs/tutorials/npm-enterprise-with-nexus.html)
 [local modules](https://medium.com/@arnaudrinquin/build-modular-application-with-npm-local-modules-dfc5ff047bcc) - quite questionable approach
 
 5 . Layer your app, keep Express within its boundaries 
 
 Don't pass req or res on lower level, process them within route-handler.

#### Error handling

1 . Use Async-Await or promises for async error handling 

2 . Use only the built-in Error object - or extend it.

3 . Distinguish operational vs programmer errors

4 . Document API errors using Swagger

5 . Use a mature logger to increase errors visibility - Winston, Bunyan (highly popular) or Pino
 
6 . Test error flows using your favorite test framework

7 . Discover errors and downtime using APM products(Application Performance Management)

- Website or API monitoring: [Pingdom](https://www.pingdom.com/), [Uptime Robot](https://uptimerobot.com/), and [New Relic](https://newrelic.com/application-monitoring)
- Operational intelligence dashboard: [Datadog](https://www.datadoghq.com/), [Splunk](https://www.splunk.com/), [Zabbix](https://www.zabbix.com/)

8 . Handle errors centrally. Not within middleware:  Sentry](https://sentry.io/), [Rollbar](https://rollbar.com/), or [Raygun](https://raygun.com/)

9 . Catch unhandled promise rejections

10 . Fail fast, validate arguments using a dedicated library

#### Code Style Practices

1 . Use ESLint

Along with more powerful tools: [prettier](https://github.com/prettier/prettier) and [beatify](https://github.com/beautify-web/js-beautify)

2 . Node.js Specific Plugins -  eslint-plugin-node, eslint-plugin-mocha and eslint-plugin-node-security

3 . Don't Forget the Semicolon

4 . Name Your Functions
- Name all functions, including closures and callbacks. Avoid anonymous functions. This is especially useful when profiling a node app. Naming all functions will allow you to easily understand what you're looking at when checking a memory snapshot

5 . Naming conventions for variables, constants, functions and classes

6 . Prefer const over let. Ditch the var

7 . Requires come first, and not inside functions
 
8 . Do Require on the folders, not directly on the files - quite questionable point

9 . Use the === operator

10 . Use Async Await, avoid callbacks

11 . Use Fat (=>) Arrow Functions

#### Testing And Overall Quality Practices

1 . At the very least, write API (component) testing

2 . Detect code issues with a linter

3 . Carefully choose your CI platform (Jenkins vs CircleCI vs Travis vs Rest of the world) 
Your continuous integration platform (CICD) will host all the quality tools (e.g test, lint) so it should come with a vibrant ecosystem of plugins. `Jenkins` used to be the default for many projects as it has the biggest community along with a very powerful platform at the price of complex setup that demands a steep learning curve. Nowadays, it became much easier to set up a CI solution using SaaS tools like `CircleCI` and others. These tools allow crafting a flexible CI pipeline without the burden of managing the whole infrastructure. Eventually, it's a trade-off between robustness and speed - choose your side carefully

Otherwise: Choosing some niche vendor might get you blocked once you need some advanced customization. On the other hand, going with Jenkins might burn precious time on infrastructure setup

4 . Constantly inspect for vulnerable dependencies [nsp](https://github.com/nodesecurity/nsp)

5 . Check your test coverage, it helps to identify wrong test patterns [istanbul](https://github.com/gotwarlost/istanbul)

6 . Inspect for outdated packages `npm outdated` [npm-check-updates](https://github.com/tjunnone/npm-check-updates)

7 . Use docker-compose for e2e testing

8 . Refactor regularly using static analysis tools [Sonarqube](https://www.sonarqube.org/) or  [Code Climate](https://codeclimate.com/)

#### Going To Production Practices

1 . Monitoring

2 . Increase transparency using smart logging
    [Elastic monitoring](https://www.elastic.co/products)

3 . Delegate anything possible (e.g. gzip, SSL) to a reverse proxy

- Node is awfully bad at doing CPU intensive tasks like gzipping, SSL termination, etc. You should use ‘real’ middleware services like nginx, HAproxy or cloud vendor services instead

4 . Lock dependencies 

5 . Guard process uptime using the right tool `cluster management, docker, PM2`

6 . Utilize all CPU cores 

- At its basic form, a Node app runs on a single CPU core while all other are left idling. It’s your duty to replicate the Node process and utilize all CPUs – For small-medium apps you may use Node Cluster or PM2. For a larger app consider replicating the process using some Docker cluster (e.g. K8S, ECS) or deployment scripts that are based on Linux init system (e.g. systemd)

7 . Create a ‘maintenance endpoint’ `/healthcheck`, `/systeminfo` 

8 . Discover errors and downtime using APM products

9 . Make your code production-ready - 
- plan it from the beginning [meet.js summit slides for production readiness](https://naugtur.pl/pres3/node2prod/#/)
- [video](https://youtu.be/lUsNne-_VIk)
- [blocked](https://github.com/tj/node-blocked)
- [heapdump](https://github.com/bnoordhuis/node-heapdump)

10 . Measure and guard the memory usage: `node-inspector` and `memwatch`

11 . Get your frontend assets out of Node

12 . Be stateless, kill your Servers almost every day

13 . Assign ‘TransactionId’ to each log statement 

14 . Set NODE_ENV=production

15 . Design automated, atomic and zero-downtime deployments

16 . Use an [LTS](https://nodejs.org/en/about/releases/)(Long Term Support) release of Node.js

#### Security Best Practices

1 . Embrace linter security rules

- [eslint-plugin-security](https://github.com/nodesecurity/eslint-plugin-security) and [tslint-config-security](https://www.npmjs.com/package/tslint-config-security

2 . Limit concurrent requests using a middleware

example [code of express rate limit](https://github.com/nfriedly/express-rate-limit/blob/master/lib/express-rate-limit.js)
```js
var RateLimit = require('express-rate-limit');
// important if behind a proxy to ensure client IP is passed to req.ip
app.enable('trust proxy'); 
 
var apiLimiter = new RateLimit({
  windowMs: 15*60*1000, // 15 minutes
  max: 100,
});
 
// only apply to requests that begin with /user/
app.use('/user/', apiLimiter);
```

3 . Extract secrets from config files or use packages to encrypt them

4 . Prevent query injection vulnerabilities with ORM/ODM libraries

- [examples of ORM, links on prevention explanation](https://github.com/i0natan/nodebestpractices/blob/master/sections/security/ormodmusage.md)
- [SQL_Injection_Prevention_Cheat_Sheet](https://www.owasp.org/index.php/SQL_Injection_Prevention_Cheat_Sheet)

5 . Collection of generic security best practices

[link](https://github.com/i0natan/nodebestpractices/blob/master/sections/security/commonsecuritybestpractices.md)

6 . Adjust the HTTP response headers for enhanced security

- X-XSS-Protection, X-Frame-Options and so on
[link](https://github.com/i0natan/nodebestpractices/blob/master/sections/security/secureheaders.md)

7 . Constantly and automatically inspect for vulnerable dependencies

- [NPM audit](#npm-audit)
- [Snyk](#snyk)
- [Greenkeeper](#greenkeeper)


8 . Avoid using the Node.js Crypto library for passwords, use Bcrypt

[explanation](https://github.com/i0natan/nodebestpractices/blob/master/sections/security/bcryptpasswords.md)

9 . Escape HTML, JS and CSS output

```javascript
<script>...NEVER PUT UNTRUSTED DATA HERE...</script>   directly in a script
 
 <!--...NEVER PUT UNTRUSTED DATA HERE...-->             inside an HTML comment
 
 <div ...NEVER PUT UNTRUSTED DATA HERE...=test />       in an attribute name
 
 <NEVER PUT UNTRUSTED DATA HERE... href="/test" />   in a tag name
 
 <style>...NEVER PUT UNTRUSTED DATA HERE...</style>   directly in CSS

```

10 . Validate incoming JSON schemas

- [jsonschema](https://www.npmjs.com/package/jsonschema)

``` javascript
const JSONValidator = require("jsonschema").Validator;

class Product {
  
  validate() {
    var v = new JSONValidator();

    return v.validate(this, schema);
  }

  static get schema() {
    //define JSON-Schema, see example above
  }
}

```

11 . Support blacklisting JWTs

```js
var jwt = require('express-jwt');
var blacklist = require('express-jwt-blacklist');
 
app.use(jwt({
  secret: 'my-secret',
  isRevoked: blacklist.isRevoked
}));
 
app.get('/logout', function (req, res) {
  blacklist.revoke(req.user)
  res.sendStatus(200);
});
```

12 . Limit the allowed login requests of each user

13 . Run Node.js as non-root user

- According to the 'Principle of least privilege' a user/process must be able to access only the necessary information and resources.

14 . Limit payload size using a reverse-proxy or a middleware

```js
app.use(express.json({ limit: '300kb' }));
```

- [ngynx body limit](http://nginx.org/en/docs/http/ngx_http_core_module.html#client_max_body_size)

15 . Avoid JavaScript eval statements 

16 . Prevent evil RegEx from overloading your single thread execution
     - Avoid RegEx when possible or defer the task to a dedicated library like [validator.js](https://github.com/chriso/validator.js), or [safe-regex](https://github.com/substack/safe-regex) to check if the RegEx pattern is safe.

(*) Strange that author recommend 'safe-regex' (as silver bullet) that have less than 400 stars on Github
```js
var saferegex = require('safe-regex');
var emailRegex = /^([a-zA-Z0-9])(([\-.]|[_]+)?([a-zA-Z0-9]+))*(@){1}[a-z0-9]+[.]{1}(([a-z]{2,3})|([a-z]{2,3}[.]{1}[a-z]{2,3}))$/;

// should output false because the emailRegex is vulnerable to redos attacks
console.log(saferegex(emailRegex));

// instead of the regex pattern, use validator:
var validator = require('validator');
console.log(validator.isEmail('liran.tal@gmail.com'));
```

17 . Avoid module loading using a variable

18 . Run unsafe code in a sandbox
Three main options can help in achieving this isolation:
 - a dedicated child process
 - a cloud serverless framework
 - some npm libraries [vm2](https://github.com/patriksimek/vm2) or [sandbox](https://github.com/gf3/sandbox)

19 . Take extra care when working with child processes 
 - avoid user input in every case, otherwise validate and sanitize it
 - limit the privileges of the parent and child processes using user/group identities
 - run your process inside of an isolated environment to prevent unwanted side-effects if the other preparations fail


20 . Hide error details from clients

21 . Configure 2FA for npm or Yarn

22 . Modify session middleware settings

23 . Avoid DOS attacks by explicitly setting when a process should crash

24 . Prevent unsafe redirects

```js
const whitelist = { 
  'https://google.com': 1 
};

function getValidRedirect(url) { 
    // check if the url starts with a single slash 
  if (url.match(/^\/(?!\/)/)) { 
    // Prepend our domain to make sure 
    return 'https://example.com' + url; 
  } 
    // Otherwise check against a whitelist
  return whitelist[url] ? url : '/'; 
}

app.get('/login', (req, res, next) => {

  if (req.session.isAuthenticated()) {
    res.redirect(getValidRedirect(req.query.url));
  }

});  
```

