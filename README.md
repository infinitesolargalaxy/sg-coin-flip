# sg-coin-flip
Simple Coin Flip API on Heroku

<a href="https://sg-coin-flip.herokuapp.com/" rel="nofollow">
    <img alt="Website" src="https://img.shields.io/static/v1?label=|&message=WEBSITE&color=cdf998&style=for-the-badge&logo=googlechrome&logo-color=white">
</a>

<img alt="Website" src="https://img.shields.io/website?style=flat-square&url=https%3A%2F%2Fsg-coin-flip.herokuapp.com%2F"> <img alt="GitHub" src="https://img.shields.io/github/license/infinitesolargalaxy/sg-coin-flip?style=flat-square">



## How It's Made:

**Tech used:** <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://heroku.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/heroku/heroku-original.svg" alt="heroku" width="40" height="40"/> </a>

## Heroku Instructions

```
heroku login -i
heroku git:remote -a sg-coin-flip
echo "web: node server.js" > Procfile
git add .
git commit -m "heroku prep"
heroku buildpacks:set heroku/nodejs
git push heroku main
```

## Lessons Learned:
From this project, I learned how to deploy an API to heroku as well as debug heroku build failures with `heroku logs --tail`.
The very first build failed due to the lack of a `package.json` file, a requirement for all `node.js` projects.
A subsequent build failed due to the hardcode usage of port `8000`, which may be available locally, but not always on Heroku.

