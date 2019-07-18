
![simplinnovation](https://4.bp.blogspot.com/-f7YxPyqHAzY/WJ6VnkvE0SI/AAAAAAAADTQ/0tDQPTrVrtMAFT-q-1-3ktUQT5Il9FGdQCLcB/s350/simpLINnovation1a.png)

# JavaScript on Jupyter Notebook

1. Make sure __Python 3__ is installed, then install __Jupyter Lab__:

    ```bash
    $ pip3 install jupyter
    $ pip3 install jupyterlab
    ```

#

2. Make sure you have installed the older __Node.js < v9__ (I'm using _v8.11.3_ with npm _v5.6.0_), then install __IJavaScript__:

    ```bash
    $ npm install -g ijavascript
    $ ijsinstall
    ```

    If you use the latest version of Node.js, you can install the older version too using npm:

    ```bash
    $ npm install -g node@8.11.3
    $ npm install -g npm@5.6.0
    ```
    
    So now you have 2 versions of Node.js, I guess. To manage its version, you can use __nvm__ (_Node Version Manager_). For Windows, you can use [nvm-windows](https://github.com/coreybutler/nvm-windows).

    ```bash
    $ node -v
        v10.14.2

    $ nvm list
          8.11.3
        * 10.14.2

    $ nvm use 8.11.3
        Now using node v8.11.3 (64-bit)
    
    $ node -v
        v8.11.3
    ```

#

3. Launch Jupyter Lab

    ```bash
    $ jupyter lab 
    ```
    
    It will run at http://localhost:8888/lab, and now you can use __JavaScript (Node.js)__ kernel on Jupyter Notebook. Enjoy~ 😎

#

#### Lintang Wisesa :love_letter: _lintangwisesa@ymail.com_

[Facebook](https://www.facebook.com/lintangbagus) | 
[Twitter](https://twitter.com/Lintang_Wisesa) |
[Google+](https://plus.google.com/u/0/+LintangWisesa1) |
[Youtube](https://www.youtube.com/user/lintangbagus) | 
:octocat: [GitHub](https://github.com/LintangWisesa) |
[Hackster](https://www.hackster.io/lintangwisesa)