# sg-coin-flip
Coin Flip test on Heroku

```
heroku login -i
heroku git:remote -a sg-coin-flip
echo "web: node server.js" > Procfile
git add .
git commit -m "heroku prep"
heroku buildpacks:set heroku/nodejs
git push heroku main
```