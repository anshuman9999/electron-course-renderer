const { remote, webFrame, desktopCapturer } = require('electron');

const { dialog, BrowserWindow, app } = remote;

const testButton = document.getElementById('test-button');

const mainWindow = remote.getCurrentWindow();

testButton.addEventListener('click', e => {
    console.log('testing this button');

    // const optionButtons = ['OK', 'CANCEL', 'TU KYA LE?']

    // const result = dialog.showMessageBoxSync({
    //     type: 'info',
    //     buttons: optionButtons,
    //     title: 'TU KYA LE?',
    //     message: 'TEST BUTTON CLICKED',
    //     defaultId:  0,
    //     cancelId: 1
    // })

    // let secondarWindow = new BrowserWindow({
    //     width: 400,
    //     height: 200,
    //     backgroundColor: 'white',
    //     parent: remote.getCurrentWindow(),
    //     modal: true
    // })

    // secondarWindow.loadFile('./index.html')


    console.log(remote.getGlobal('myGlobalVar'));

})

const fullScreenButton = document.getElementById('fullscreen-button');

fullScreenButton.addEventListener('click', e => {
    const isFullScreen = mainWindow.fullScreen;
    let fullScreenCopy = isFullScreen;
    mainWindow.fullScreen = !isFullScreen
    fullScreenCopy = mainWindow.fullScreen
    if (fullScreenCopy) {
        fullScreenButton.innerText = 'Normal'
    }
    else {
        fullScreenButton.innerText = 'FullScreen'
    }
})

const newWindow = document.getElementById('new-window');

let win;

newWindow.addEventListener('click', (e) => {
    win = window.open('https://electronjs.org/docs');
    console.log(win);
})

const closeWindow = document.getElementById('close-window');

//  CLOSE THE NEW WINDOW USING THE WIN REFERENCE

closeWindow.addEventListener('click', e => {
    win.close();
})

const optionWindow = document.getElementById('option-window');

let optionWin

optionWindow.addEventListener('click', e => {
    optionWin = window.open('https://youtube.com/', '_blank', 'width=500,height=400,alwaysOnTop=1')
})

//   DESKTOP CAPTURER GETSOURCES RETURNS THE SOURCES OF THE SCREENS TO  CAPTURE: 

// desktopCapturer.getSources({ types: [ 'screen' ] })
//                 .then(response => console.log(response));


const screenshotButton = document.getElementById('screenshot-button');

screenshotButton.addEventListener('click', e => {
    //remote.getCurrentWindow().minimize();
    desktopCapturer.getSources({ types: ['window'], thumbnailSize: { width: 1080, height: 1920 } })
        .then(response => {
            console.log(response);
            document.getElementById('screenshot').src = response[0].thumbnail.toDataURL();
        });
})