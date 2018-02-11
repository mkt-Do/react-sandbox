# React sandbox
This is React sandbox (for individual(mkt\_mks))

## How to Use
First,
```
npm install
mkdir dist
```
Next,
```
npm run build
or
npm start
```

## Change Code
If you change javascript code, write codes in '/src/jsx/' directory or css codes in '/src/css/' directory.  
You can use 'react', 'redux', 'react-router', 'redux-saga', 'material-ui' and 'flow-type'.

## Directory
### src/jsx/components/
This directory is only component files.  
Components must render only.  

### src/jsx/index.jsx
This file is entry file.

### src/jsx/modules/
This directory is `actions` and `reducers`.

### src/jsx/sagas/
This directory is `redux-saga` functions.

### src/jsx/containers/
This directory is connecting `components` and `modules`.
