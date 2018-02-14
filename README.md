# Socks5-Websocket
Heroku deployable Shadowsocks

Original Repo - [Here](https://github.com/VincentChanX/shadowsocks-over-websocket)

Original Readme - [Here](https://github.com/JDsnyke/Socks5-Websocket/blob/master/ORIGINAL-README.md)

## Setup 

### Part 01

1. Sign up for a [Heroku](https://heroku.com/) and [Github](https://github.com/) account.

2. Fork this Repo 

3. Go to Heroku

   * Create and name a new App
   * Go to the Deploy tab
   * Add your Github account and link the repo you forked
   * Set automatic deploys and click 'Deploy Branch'
   * Go to Settings and click 'Reveal Config Vars'
   * Enter the Following - 
       * METHOD - aes-256-cfb (recommended) 
       * PASSWORD - whateverpasswordyouwant
       * SERVER_ADDRESS - 0.0.0.0       
  
### Part 02

Download and Install both [NodeJS](https://nodejs.org/en/download/) and [Git](https://git-scm.com/downloads)

### Part 03

1. Go to a directory of your choice on your PC (e.g. D:\Documents )

2. Run CMD within that directory / folder (right click while holding shift for windows)

3. Paste ```git clone https://github.com/JDsnyke/Socks5-Websocket.git``` and hit enter

4. Paste ```npm-install``` and hit enter

5. Edit ```socks5.bat``` with notepad and insert your heroku app name as well as your PASSWORD from Part 01 - Step 3

6. Save changes and Run ```socks5.bat``` 

7. It should say ```local is listening on 127.0.0.1:1080``` (Do not close this CMD window)

8. Confirm it by running ```test.bat```

    * You should see 127.0.0.1:1080 appear on the list
    
### Part 04

1. Install [SwitchyOmega](https://github.com/FelisCatus/SwitchyOmega) for your browser

2. Create a new profile called ```local-proxy```

3. Change the *Protocol* to ```SOCKS5```, *Server* to ```127.0.0.1``` and *Port* to ```1080```

4. Save your Settings

5. Click on your SwitchyOmega icon and select ```local-proxy``` (Ensure socks5.bat is running first)

6. Visit [Whats My IP](https://whatsmyip.com/) to take a look at your new IP and Location!

### Part 05

1. To end your session, kill the CMD window opened by ```socks5.bat``` and switch your profile on SwitchyOmega from ```local-proxy``` to ```direct```  

2. Feel free to edit and create your own auto-switch profile on SwitchyOmega

3. To restart your proxy, run ```socks5.bat```, confirm it with ```test.bat``` (this window can be closed) and set your SwitchyOmega profile to ```local-proxy```

4. Rinse, Repeat and Profit?! (Heroku offers a bandwidth of 2TB!)

## Cyphers Available

Add one of them to METHOD in Part 01 - Step 03. It is recommended to use aes-256-cfb

* rc4
* rc4-md5
* table
* bf-cfb
* des-cfb
* rc2-cfb
* idea-cfb
* seed-cfb
* cast5-cfb
* aes-128-cfb
* aes-192-cfb
* aes-256-cfb
* camellia-256-cfb
* camellia-192-cfb
* camellia-128-cfb
