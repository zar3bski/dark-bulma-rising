# dark-bulma-rising
Dark theme for Pelican SSG based on Bulma

## Usage

```bash
git submodule add https://github.com/zar3bski/dark-bulma-rising.git themes/dark-bulma-rising
```

`pelicanconf.py`
```python
THEME = "./themes/dark-bulma-rising"
```

### Social 

`pelicanconf.py`

```python
SOCIAL = (
    ("GitHub", "https://github.com/zar3bski"),
    ....
)
```

Supported social media

* [GitHub](https://github.com/)
* [Gitlab](https://gitlab.com/)
* [DockerHub](https://hub.docker.com/)
* [Stackoverflow](https://stackoverflow.com/)
* [Linkedin](https://www.linkedin.com)
* [AngelList](https://angel.co/)
* [Youtube](https://www.youtube.com)
* [Facebook](https://www.facebook.com/)
* [HackTheBox](https://www.hackthebox.eu/)

> Please use the precise name's orthograph, for the entire templating relies on it. If your favorite social media is missing from the list, please consider making a pull request. You just need to add it's icon `.png` here and update this documentation

```
dark-bulma-rising/
    static/
        images/
            icons/
                your_social_media_icon.png
```



### Favicon

Simply put it in 

```
content/
     images/
          favicon.ico
```

## Developer 

To work on **dark-bulma-rising**, you'll need the following to generate the `.css` based on the `.scss`

```
npm install -g node-sass --save-dev
npm install -g bulma --save-dev
```

Just use the following to compile the `.css`

```
npm run css-build
```

> new to scss? [Bulma's documentation](https://bulma.io/documentation/customize/) is a good entrypoint for non modern frontend developers

