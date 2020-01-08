---
title: Making of Scully Blog
description: cómo hacer un blog con Scully
publish: false
---

# Steps to reproduce a blog

## Create angular app
npx -p @angular/cli@next ng new angular-blog

## Add ScullyIO
ng add @scullyio/init

## Create a home module
ng g m home --route=home --module=app-routing

### Get and list the contents
```typescript
posts$ = this.srs.available$;
constructor(private srs: ScullyRoutesService) {}
```

```html
<li *ngFor="let post of posts$ | async">
  <a [routerLink]="post.route">{{ post.title }}</a>
</li>
```
### Add some style
```html
  <link rel="stylesheet" href="https://unpkg.com/sakura.css/css/sakura.css" type="text/css">
```
## Add blog capabilities

ng g @scullyio/init:blog

## Generate for distribution

"build-prod": "ng build --prod",

yarn build-prod

yarn scully

yarn scully:serve

### Serve with any static file server

"static:serve": "http-server ./dist/static",

yarn static:serve

## Add more posts
ng g @scullyio/init:post --name="This is my post"

### Re run `yarn scully` when any post changes

### Re run `yarn build-prod` when the app changes
